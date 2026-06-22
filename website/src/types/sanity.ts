export interface Project {
  _id: string
  name: string
  description: string
  tools: string[]
  image: { asset: { _ref: string } }
  link?: string
}