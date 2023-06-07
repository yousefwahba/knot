import { Module } from '@nestjs/common';
import { LinkSectionService } from './link-section.service';
import { LinkSectionController } from './link-section.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionSchema } from './section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Section', schema: SectionSchema }]),
  ],
  providers: [LinkSectionService],
  controllers: [LinkSectionController],
})
export class LinkSectionModule {}
