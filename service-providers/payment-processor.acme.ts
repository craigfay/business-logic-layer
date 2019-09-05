import { PaymentProcessorContract } from '../contracts/payment-processor'
import { ClientError, ServerError } from '../error-types'
import {
  PaymentDetails,
  PaymentReceipt,
  RefundReceipt,
  SubscriptionDetails
} from '../entities'

const AcmePayments: PaymentProcessorContract = {
  processPayment: async (payment:PaymentDetails) => {
    let dummyPaymentReceipt = {
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
    return dummyPaymentReceipt;
  }
  // refundPayment: (receipt:PaymentReceipt) => Promise<RefundReceipt | AcceptableError>
  // createSubscription: (payment:PaymentDetails, subscription:SubscriptionDetails) => Promise<PaymentReceipt | AcceptableError>
  // cancelSubscription: (subscriptionId:string) => Promise<SubscriptionDetails | AcceptableError>
}

export default AcmeInventory;