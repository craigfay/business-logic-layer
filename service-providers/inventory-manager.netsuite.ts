import { InventoryManagerContract } from '../contracts/inventory-manager'
import { Product } from '../entities/product'
import { ClientError, ServerError } from '../error-types'

class Netsuite implements InventoryManagerContract {
  async verifyProductsInStock(products:Product[]) {
    return products
  }
  async countInventory(productId:number) {
    return 100
  }
  async updateInventoryQuantity(productId:number, newQuantity:number) {
    return new ClientError('The product id provided does not exist')
  }
  async increaseInventoryQuantity(productId:number, amount:number) {
    return new ServerError('Our system took to long to respond')
  }
  async decreaseInventoryQuantity(productId:number, amount:number) {
    return 100 - amount
  }
}

export const InventoryManager = new Netsuite();