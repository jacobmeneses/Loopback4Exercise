import {Entity, model, property, hasMany} from '@loopback/repository';
import { Product } from './product.model'

@model()
export class Shop extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @hasMany(() => Product, {keyTo: 'shop_id'})
  products?: Product[]


  constructor(data?: Partial<Shop>) {
    super(data);
  }
}
