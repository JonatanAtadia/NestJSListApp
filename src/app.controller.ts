import { Controller, Get, Render } from '@nestjs/common';
import { ItemService } from './item/item.service';

@Controller()
export class AppController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  @Render('index')
  async getItems() {
    const items = await this.itemService.findAll();
    return { items };
  }
}
