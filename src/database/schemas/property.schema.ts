import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Property extends Document<Types.ObjectId> {
  @Prop({ type: Types.ObjectId, required: true })
  organizationId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  bua: number;

  @Prop({ type: Number, required: true })
  totalBua: number;

  @Prop({ type: Number, required: true })
  landArea: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  beds: number;

  @Prop({ type: Number, required: true })
  bathrooms: number;

  @Prop({ type: String, required: true })
  buildingId: string;

  @Prop({ type: String, required: true })
  unitId: string;

  @Prop({ type: [String], default: [] })
  amenities: string[];

  @Prop({ type: Types.ObjectId, required: true })
  compoundId: Types.ObjectId;
}

export type PropertyDocument = Property & Document;
export const PropertySchema = SchemaFactory.createForClass(Property);
