export interface Product {
  id: number
  name: string
  slug: string
  price: number
  description: string
  tags: Array<string>
  metafields: { [key:string]: string }
}