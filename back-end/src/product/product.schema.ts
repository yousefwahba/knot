import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { UserDocument } from 'src/user/user.schema';

export enum ProductType {
  CARD = 'CARD',
  KEYCHAIN = 'KEYCHAIN',
  STICKER = 'STICKER',
}

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: String, enum: ProductType, required: true })
  type: ProductType;

  @Prop({ type: Boolean, default: true })
  active: boolean;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  ownerId: UserDocument;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
