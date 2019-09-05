import { ServerError, ClientError } from '../error-types'
import { PaymentDetails, PaymentReceipt, RefundReceipt } from '../entities'

type AcceptableError = ServerError | ClientError;

export interface PaymentProcessorContract {
  processPayment: (payment:PaymentDetails) => Promise<PaymentReceipt | AcceptableError>
  refundPayment: (receipt:PaymentReceipt) => Promise<RefundReceipt | AcceptableError>
}