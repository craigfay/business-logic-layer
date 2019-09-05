export async function oneTimePurchase(options) {
  const { products, price, paymentData, customerData} = options;

  let inStockReport = await checkInventory(products)
  if (inStockReport instanceof Error) return inStockReport

  let paymentProcessingReport = await processPayment(price, paymentData)
  if (paymentProcessingReport instanceof Error) return paymentProcessingReport 

  let inTransitReport = await initiateDelivery(products, customerData)
  if (inTransitReport instanceof Error) return inTransitReport 

  return { success: true }
}