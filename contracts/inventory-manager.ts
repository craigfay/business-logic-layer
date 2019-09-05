import { ServerError, ClientError } from '../error-types'
import { Product } from '../entities/product'

type AcceptableError = ServerError | ClientError;

export interface InventoryManagerContract {
  verifyProductsInStock: (Products:Product[]) => Product[] | AcceptableError
  countInventory: (productId:number) => number | ClientError | ServerError
  updateInventoryQuantity: (productId:number, newQuantity:number) => number | AcceptableError
  increaseInventoryQuantity: (productId:number, amount:number) => number | AcceptableError
  decreaseInventoryQuantity: (productId:number, amount:number) => number | AcceptableError
}