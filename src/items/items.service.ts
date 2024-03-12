import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<ItemDocument[]> {
    return await this.itemModel.find().exec();
  }
}
