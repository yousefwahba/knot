import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Section, SectionDocument } from './section.schema';
import { CreateSectionDto } from './dto/createSection.dto';
import { UpdateSectionDto } from './dto/updateSection.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LinkSectionService {
  constructor(
    @InjectModel(Section.name)
    private readonly sectionModel: Model<SectionDocument>,
  ) {}

  async getAllSections(): Promise<Section[]> {
    return this.sectionModel.find().exec();
  }

  async getSectionById(id: string): Promise<Section | null> {
    return this.sectionModel.findById(id).exec();
  }

  async createSection(createSectionDto: CreateSectionDto): Promise<Section> {
    const createdSection = new this.sectionModel(createSectionDto);
    return createdSection.save();
  }

  async updateSection(
    id: string,
    updateSectionDto: UpdateSectionDto,
  ): Promise<Section | null> {
    return this.sectionModel
      .findByIdAndUpdate(id, updateSectionDto, { new: true })
      .exec();
  }

  async deleteSection(id: string): Promise<Section | null> {
    return this.sectionModel.findByIdAndRemove(id).exec();
  }
}
