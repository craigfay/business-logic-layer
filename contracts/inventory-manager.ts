import { ServerError, ClientError } from '../error-types'
import { Product } from '../entities'

type AcceptableError = ServerError | ClientError;

export interface InventoryManagerContract {
  verifyInStock: (Products:Product[]) => Promise<Product[] | AcceptableError>
  countInventory: (productId:number) => Promise<number | AcceptableError>
  updateInventoryQuantity: (productId:number, newQuantity:number) => Promise<number | AcceptableError>
  increaseInventoryQuantity: (productId:number, amount:number) => Promise<number | AcceptableError>
  decreaseInventoryQuantity: (productId:number, amount:number) => Promise<number | AcceptableError>
}