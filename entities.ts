export interface Product {
  id:string 
  name:string
  slug:string
  price:number
  description:string
  tags:Array<string>
  metafields:{ [key:string]:string }
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
  metadata:{ [key:string]:string }
}

export interface PaymentReceipt {
  id:string
  timestamp:string
  cents:number
  products:Product[]
  
}

export interface ShippingDetails {
  firstName:string
  lastName:string
  streetAddress:string
  stateProvince:string
  country:string
  metadata:{ [key:string]:string }
}