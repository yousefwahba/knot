import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/createLink.dto';
import { UpdateLinkDto } from './dto/updateLink.dto';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  getAllLinks() {
    return this.linkService.getAllLinks();
  }

  @Get(':id')
  getLinkById(@Param('id') id: string) {
    return this.linkService.getLinkById(id);
  }

  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto) {
    return this.linkService.createLink(createLinkDto);
  }

  @Put(':id')
  updateLink(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linkService.updateLink(id, updateLinkDto);
  }

  @Delete(':id')
  deleteLink(@Param('id') id: string) {
    return this.linkService.deleteLink(id);
  }
}
