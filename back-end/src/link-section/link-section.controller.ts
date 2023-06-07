import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LinkSectionService } from './link-section.service';
import { CreateSectionDto } from './dto/createSection.dto';
import { UpdateSectionDto } from './dto/updateSection.dto';

@Controller('section')
export class LinkSectionController {
  constructor(private readonly sectionService: LinkSectionService) {}

  @Get()
  getAllSections() {
    return this.sectionService.getAllSections();
  }

  @Get(':id')
  getSectionById(@Param('id') id: string) {
    return this.sectionService.getSectionById(id);
  }

  @Post()
  createSection(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.createSection(createSectionDto);
  }

  @Put(':id')
  updateSection(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.updateSection(id, updateSectionDto);
  }

  @Delete(':id')
  deleteSection(@Param('id') id: string) {
    return this.sectionService.deleteSection(id);
  }
}
