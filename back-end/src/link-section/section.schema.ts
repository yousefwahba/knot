import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UserDocument } from 'src/user/user.schema';

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: UserDocument;

  @Prop({ required: true })
  label: string;

  @Prop({ default: true })
  active: boolean;
}

export const SectionSchema = SchemaFactory.createForClass(Section);
