import { Controller, Get, Render } from '@nestjs/common';
import { ItemsService } from './items/items.service';

@Controller()
export class AppController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @Render('index')
  async root() {
    const items = await this.itemsService.findAll();
    const itemsArray = items.map((item) => item.toObject());
    return { items: itemsArray };
  }

  @Get('/hola')
  @Render('hola')
  async hola() {
    const items = await this.itemsService.findAll();
    const itemsArray = items.map((item) => item.toObject());
    return { items: itemsArray };
  }
}
