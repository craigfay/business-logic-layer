import { PaymentProcessorContract } from '../contracts/payment-processor'
import { ClientError, ServerError } from '../error-types'
import {
  PaymentDetails,
  PaymentReceipt,
  RefundReceipt,
  SubscriptionDetails
} from '../entities'

const AcmePayments: PaymentProcessorContract = {
  /**
   * Generate and return a dummy PaymentReceipt
   */
  async processPayment(payment:PaymentDetails) {
    let dummyReceipt:PaymentReceipt = {
      id: 'dn8fbvm139hd0hc1',
      timestamp: new Date().toUTCString(),
      cents: 5000,
      products: [
        { id: 'c9gh385nckdhadf0' }
      ],
      meta: {}
    }
    return dummyReceipt;
  },

  /**
   * Generate and return a dummy RefundReceipt
   */
  async refundPayment(receipt:PaymentReceipt) {
    let dummyRefund:RefundReceipt = {
      id: '72hd9cn38fh3ga0o',
      timestamp: new Date().toUTCString(),
      cents: 20000,
      products: [
        { id: 'c9gh385nckdhadf0' }
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
    let dummyReceipt:PaymentReceipt = {
      id: '1vxcajf74gs08chskjbn',
      timestamp: new Date().toUTCString(),
      cents: 4800,
      products: [
        { id: 'dbv07d7hq1zx38te' }
      ],
      meta: {}
    }
    return dummyReceipt;
  },

  // cancelSubscription: (subscriptionId:string) => Promise<SubscriptionDetails | AcceptableError>`
  async cancelSubscription(subsriptionId:string) {
    let dummySubscription:SubscriptionDetails = {
      id: '1vxcajf74gs08chs',
      products: [
        { id: 'dbv07d7hq1zx38te' }
      ],
      frequency: 'quarterly',
      shipping: { id: 'vbkru91bhb419djg' },
      paymentReceipts: [
        { id: '0cvz83kvb130jsm3' },
        { id: '15gb863jvbslak8c' },
      ],
      cents: 4800,
      meta: {}
    }
    return dummySubscription;
  }
}

export default AcmeInventory;

// shipping: {
//   firstName: 'Abraham',
//   lastName: 'Winkledinkle',
//   streetAddress: '1000 Pleasant Rd',
//   city: 'San Antonio',
//   stateProvince: 'Texas',
//   country: 'United States',
//   meta: {}
// },

// products: [
//   {
//     id: 'c9gh385nckdhadf0',
//     name: 'Olive Tee',
//     slug: 'olive-tee',
//     cents: 1600,
//     description: 'A tee shirt you can bring home to mom and dad.',
//     tags: ['shirts', 'wholesome'],
//     meta: {}
//   }
// ],