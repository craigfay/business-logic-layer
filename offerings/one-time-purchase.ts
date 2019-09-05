export async function oneTimePurchase(options) {
  const { items, price, paymentData, customerData} = options;

  let inStockReport = await checkInventory(items)
  if (inStockReport instanceof Error) return inStockReport

  let paymentProcessingReport = await processPayment(price, paymentData)
  if (paymentProcessingReport instanceof Error) return paymentProcessingReport 

  let inTransitReport = await initiateDelivery(items, customerData)
  if (inTransitReport instanceof Error) return inTransitReport 

  return { success: true }
}