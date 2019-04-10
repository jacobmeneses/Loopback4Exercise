import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

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

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  score: number;

  @property({
    type: 'number',
    required: true,
  })
  shop_id: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
