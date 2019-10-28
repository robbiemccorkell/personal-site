export interface BlogPost {
  attributes: {
    title?: string,
    date?: string,
    thumbnail?: string,
  }
  html: string,
  slug: string
}