import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './link.schema';
import { Model } from 'mongoose';
import { CreateLinkDto } from './dto/createLink.dto';
import { UpdateLinkDto } from './dto/updateLink.dto';

@Injectable()
export class LinkService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async getAllLinks(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async getLinkById(id: string): Promise<Link | null> {
    return this.linkModel.findById(id).exec();
  }

  async createLink(createLinkDto: CreateLinkDto): Promise<Link> {
    const createdLink = new this.linkModel(createLinkDto);
    return createdLink.save();
  }

  async updateLink(
    id: string,
    updateLinkDto: UpdateLinkDto,
  ): Promise<Link | null> {
    return this.linkModel
      .findByIdAndUpdate(id, updateLinkDto, { new: true })
      .exec();
  }

  async deleteLink(id: string): Promise<Link | null> {
    return this.linkModel.findByIdAndDelete(id).exec();
  }
}
