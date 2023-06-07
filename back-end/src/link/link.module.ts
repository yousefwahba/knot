import { Module } from '@nestjs/common';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkSchema } from './link.schema';
import { UserSchema } from 'src/user/user.schema';
import { SectionSchema } from 'src/link-section/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Link', schema: LinkSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Section', schema: SectionSchema },
    ]),
  ],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
