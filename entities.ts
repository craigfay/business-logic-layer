export interface Product {
  id:string 
  name:string
  slug:string
  cents:number
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
  products:Array<{ id:string }>
  meta:{ [key:string]:string }
}

export interface ShippingDetails {
  id:string
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
  products: Array<{ id:string }>
  meta:{ [key:string]:string }
}

export interface SubscriptionDetails {
  id:string
  products:Array<{ id:string }>
  frequency: 'weekly' | 'monthly' | 'quarterly'
  // frequency:string
  shipping:{ id:string }
  paymentReceipts:Array<{ id:string }>
  cents:number
  meta:{[key:string]:string }
}