import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { seedUnits } from '../seed/units';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from './database/schemas/property.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const appPort =
    process.env.PORT || configService.get<number>('app.port') || 8080;

  await app.listen(appPort);
  logger.log(`Application is running on: http://localhost:${appPort}`);

  // seed database
  const propertyModel = app.get<Model<Property>>(getModelToken(Property.name));
  await seedUnits(propertyModel);
}

bootstrap();
