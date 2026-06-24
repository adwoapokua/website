export interface Project {
  _id: string
  name: string
  description: string
  tools: string[]
  image: { asset: { _ref: string } }
  link?: string
}

export interface Blog {
  id: number
  image: string
  date: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  featured: boolean
}

export interface About{
  p_1: string
  p_2: string
  image: { asset: { _ref: string } }
}