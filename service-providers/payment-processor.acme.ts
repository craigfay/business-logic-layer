import { PaymentProcessorContract } from '../contracts/payment-processor'
import { ClientError, ServerError } from '../error-types'
import {
  PaymentDetails,
  PaymentReceipt,
  RefundReceipt,
  SubscriptionDetails
} from '../entities'

const AcmePayments: PaymentProcessorContract = {
    // cancelSubscription: (subscriptionId:string) => Promise<SubscriptionDetails | AcceptableError>`

  /**
   * Generate and return a dummy PaymentReceipt
   */
  async processPayment(payment:PaymentDetails) {
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
      meta: {}
    }
    return dummyReceipt;
  },

  /**
   * Generate and return a dummy RefundReceipt
   */
  async refundPayment(receipt:PaymentReceipt) {
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
  },

  /**
   * Generate and return a dummy PaymentReceipt
   */
  async createSubscription(
    payment:PaymentDetails,
    subscription:SubscriptionDetails,
  ) {
    let dummyReceipt = {
      id: '1vxcajf74gs08chskjbn',
      timestamp: new Date().toUTCString(),
      cents: 4800,
      products: [
        {
          id: 'dbv07d7hq1zx38te',
          name: 'Lemon Candle',
          slug: 'lemon-candle',
          cents: 2200,
          description: 'A fragrance you need on a recurring basis.',
          tags: ['candles', 'citrus'],
          meta: {}
        }
      ],
      meta: {}
    }
    return dummyReceipt;
  }
}

export default AcmeInventory;
