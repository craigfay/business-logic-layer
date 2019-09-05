import { PaymentProcessorContract } from '../contracts/payment-processor'
import { ClientError, ServerError } from '../error-types'
import {
  PaymentDetails,
  PaymentReceipt,
  RefundReceipt,
  SubscriptionDetails
} from '../entities'

const AcmePayments: PaymentProcessorContract = {
  processPayment,
  refundPayment,
  // createSubscription: (payment:PaymentDetails, subscription:SubscriptionDetails) => Promise<PaymentReceipt | AcceptableError>
  // cancelSubscription: (subscriptionId:string) => Promise<SubscriptionDetails | AcceptableError>
}

/**
 * Generate and return a dummy PaymentReceipt
 */
async function processPayment(payment:PaymentDetails) {
  let dummyReceipt = {
    id: 'dn8fbvm139hd0hc1',
    timestamp: new Date().toUTCString(),
    cents: 5000,
    products: [
      {
        id: 'c9gh385nckdhadf0',
        name: 'Olive Tee',
        slug: 'olive-tee',
        cents: 1600,
        description: 'A tee shirt you can bring home to mom and dad.',
        tags: ['shirts', 'wholesome'],
        meta: {}
      }
    ],
    metafields: {}
  }
  return dummyReceipt;
}

/**
 * Generate and return a dummy RefundReceipt
 */
async function refundPayment(receipt:PaymentReceipt) {
  let dummyRefund = {
    id: '72hd9cn38fh3ga0o',
    timestamp: new Date().toUTCString(),
    cents: 20000,
    products: [
      {
        id: 'c9gh385nckdhadf0',
        name: 'Olive Tee',
        slug: 'olive-tee',
        cents: 1600,
        description: 'A tee shirt you can bring home to mom and dad.',
        tags: ['shirts', 'wholesome'],
        meta: {}
      }
    ],
    meta: {}
  }
  return dummyRefund;
}

export default AcmeInventory;
