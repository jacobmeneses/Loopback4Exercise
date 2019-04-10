// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  get,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';

import {ShopRepository} from '../repositories';
import {Product} from '../models';


export class ShopProductController {
  constructor(
    @repository(ShopRepository) protected shopRepository: ShopRepository,
  ) {}

  @get('/shops/{id}/products', {
    responses: {
      '200': {
        description: "Array of Products's belonging to Shop",
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Product}},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter,
  ): Promise<Product[]> {
    return await this.shopRepository.products(id).find(filter);
  }
}
