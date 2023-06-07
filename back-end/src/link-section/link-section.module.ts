import { Module } from '@nestjs/common';
import { LinkSectionService } from './link-section.service';
import { LinkSectionController } from './link-section.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionSchema } from './section.schema';
import { UserSchema } from 'src/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Section', schema: SectionSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  providers: [LinkSectionService],
  controllers: [LinkSectionController],
})
export class LinkSectionModule {}
