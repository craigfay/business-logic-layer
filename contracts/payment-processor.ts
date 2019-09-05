import { ServerError, ClientError } from '../error-types'
import {
  PaymentDetails,
  PaymentReceipt,
  RefundReceipt,
  SubscriptionDetails
} from '../entities'

type AcceptableError = ServerError | ClientError;

export interface PaymentProcessorContract {
  processPayment: (payment:PaymentDetails) => Promise<PaymentReceipt | AcceptableError>
  refundPayment: (receipt:PaymentReceipt) => Promise<RefundReceipt | AcceptableError>
  createSubscription: (payment:PaymentDetails, subscription:SubscriptionDetails) => Promise<PaymentReceipt | AcceptableError>
  cancelSubscription: (subscriptionId:string) => Promise<SubscriptionDetails | AcceptableError>
}