
export async function calculateOrderPrice(options) {

  let discountReport = await applyDiscounts(options)
  if (discountReport instanceof Error) return discountReport;

  let shippingCostReport = await calculateShippingCost(options.items)
  if (shippingCostReport instanceof Error) return shippingCostReport

  return { success: true }
}