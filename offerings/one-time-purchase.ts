import { Product, PaymentDetails, ShippingDetails } from '../entities'
import InventoryManager from '../service-providers/inventory-manager.acme'
import PaymentProcessor from '../service-providers/payment-processor.acme'

interface OneTimePurchaseOptions {
  products:Product[]
  cents:number
  payment:PaymentDetails
  shipping:ShippingDetails
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