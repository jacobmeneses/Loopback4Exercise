import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository,
  HasManyRepositoryFactory,
  juggler,
  repository,
} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Shop, Product} from '../models';
import {ProductRepository} from './product.repository';

export class ShopRepository extends DefaultCrudRepository<
  Shop,
  typeof Shop.prototype.id
> {

  public readonly products: HasManyRepositoryFactory<Product, typeof Shop.prototype.id>

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter(ProductRepository) protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Shop, dataSource);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter);
  }
}
