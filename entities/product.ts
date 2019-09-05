export interface Product {
  name: string
  slug: string
  price: number
  description: string
  tags: string[]
  metafields: { [key:string]: string }
}