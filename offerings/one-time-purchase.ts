import { InventoryManager } from '../service-providers/inventory-manager.netsuite'

export async function oneTimePurchase(options) {
  const { products, price, paymentData, customerData} = options;

  let inStockReport = await InventoryManager.verifyInStock(products)
  if (inStockReport instanceof Error) return inStockReport

  let paymentProcessingReport = await PaymentProcessor.processPayment(price, paymentData)
  if (paymentProcessingReport instanceof Error) return paymentProcessingReport 

  let inTransitReport = await ProductDelivery.initiateDelivery(products, customerData)
  if (inTransitReport instanceof Error) return inTransitReport 

  return { success: true }
}