export interface Product {
  id:string 
  name:string
  slug:string
  price:number
  description:string
  tags:Array<string>
  meta:{ [key:string]:string }
}

export interface PaymentDetails {
  cardNumber:string
  expirationMonth:number
  expirationYear:number
  securityCode:number
  firstName:string
  lastName:string
  streetAddress:string
  stateProvince:string
  country:string
  meta:{ [key:string]:string }
}

export interface PaymentReceipt {
  id:string
  timestamp:string
  cents:number
  products:Product[]
  metafields:{ [key:string]:string }
}

export interface ShippingDetails {
  firstName:string
  lastName:string
  streetAddress:string
  stateProvince:string
  country:string
  meta:{ [key:string]:string }
}

export interface RefundReceipt {
  id:string
  timestamp:string
  cents:number
  products:Product[]
  meta:{ [key:string]:string }
}

export interface SubscriptionDetails {
  id:string
  products:Product[]
  frequency: 'weekly' | 'monthly' | 'quarterly'
  shipping: ShippingDetails
  paymentHistory: PaymentReceipt[]
  meta:{ [key:string]:string }
}