import type { PortableTextBlock } from "@portabletext/react"

export interface Project {
  _id: string
  name: string
  description: string
  tools?: string[]
  image: { asset: { _ref: string } }
  link?: string
}

export interface Blog {
  _id: string
  image: { asset: { _ref: string } }
  date: string
  title: string
  slug: { current: string }
  excerpt: string
  content: PortableTextBlock[]
  category?: string
  tags?: string[]
  featured: boolean
}

export interface About{
  _id: string
  p_1: string
  p_2: string
  image: { asset: { _ref: string } }
}