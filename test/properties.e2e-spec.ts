import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Property } from '../src/database/schemas/property.schema';
import { Model, Types } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { HTTPResponse } from '../src/common/http/response';

describe('PropertiesController (e2e)', () => {
  let app: INestApplication;
  let propertyModel: Model<Property>;

  const mockProperty = {
    organizationId: new Types.ObjectId(),
    bua: 120,
    totalBua: 150,
    landArea: 200,
    price: 2500000,
    beds: 3,
    bathrooms: 2,
    buildingId: 'BLD-001',
    unitId: 'UNIT-101',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking'],
    compoundId: new Types.ObjectId(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    propertyModel = moduleFixture.get<Model<Property>>(
      getModelToken(Property.name),
    );
    await app.init();
  });

  beforeEach(async () => {
    await propertyModel.deleteMany({});
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /properties', () => {
    it('should return an empty array when no properties exist', () => {
      return request(app.getHttpServer())
        .get('/properties')
        .expect(200)
        .expect((res: { body: HTTPResponse<Property[]> }) => {
          expect(res.body.data).toEqual([]);
        });
    });

    it('should return all properties', async () => {
      const testProperty = (await propertyModel.create(
        mockProperty,
      )) as Property & { _id: Types.ObjectId };

      const res = await request(app.getHttpServer())
        .get('/properties')
        .expect(200);

      const body = res.body as HTTPResponse<Property[]>;

      expect(body.data).toHaveLength(1);
      expect(body.data[0]._id.toString()).toBe(testProperty._id.toString());
      expect(body.data[0].bua).toBe(mockProperty.bua);
      expect(body.data[0].price).toBe(mockProperty.price);
    });
  });

  describe('GET /properties/:id', () => {
    it('should return 404 when property does not exist', () => {
      const nonExistentId = new Types.ObjectId().toString();
      return request(app.getHttpServer())
        .get(`/properties/${nonExistentId}`)
        .expect(404);
    });

    it('should return the property when it exists', async () => {
      const testProperty = (await propertyModel.create(
        mockProperty,
      )) as Property & { _id: Types.ObjectId };

      const res = await request(app.getHttpServer())
        .get(`/properties/${testProperty._id.toString()}`)
        .expect(200);

      const body = res.body as HTTPResponse<Property>;

      expect(body.data._id.toString()).toBe(testProperty._id.toString());
      expect(body.data.bua).toBe(mockProperty.bua);
      expect(body.data.price).toBe(mockProperty.price);
      expect(body.data.amenities).toEqual(mockProperty.amenities);
    });
  });
});
