import { Product } from '../entities/product'

import { InventoryManager } from '../service-providers/inventory-manager.shopify'

interface OneTimePurchaseOptions {
  products:Product[]
  cents:number
  payment:PaymentDetails
  shipping:ShippingDetails
}

interface PaymentDetails {
  cardNumber:string
  expirationMonth:number
  expirationYear:number
  securityCode:number
  firstName:string
  lastName:string
  streetAddress:string
  stateProvince:string
  country:string
  metadata: { [key:string]:string }
}

interface ShippingDetails {
  firstName:string
  lastName:string
  streetAddress:string
  stateProvince:string
  country:string
  metadata: { [key:string]:string }
}

export async function oneTimePurchase(options:OneTimePurchaseOptions) {
  const { products, cents, payment, shipping } = options;

  let inStockReport = await InventoryManager.verifyInStock(products)
  if (inStockReport instanceof Error) return inStockReport

  let paymentProcessingReport = await PaymentProcessor.processPayment(cents, payment)
  if (paymentProcessingReport instanceof Error) return paymentProcessingReport 

  let inTransitReport = await ProductDelivery.initiateDelivery(products, shipping)
  if (inTransitReport instanceof Error) return inTransitReport 

  return { success: true }
}