import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { SectionDocument } from 'src/link-section/section.schema';
import { UserDocument } from 'src/user/user.schema';

export type LinkDocument = Link & Document;

@Schema()
export class Link {
  @Prop({ type: String, required: true })
  label: string;

  @Prop({ type: String, required: true })
  url: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: Boolean, default: true })
  active: boolean;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Section' })
  sectionId: SectionDocument;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  userId: UserDocument;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
