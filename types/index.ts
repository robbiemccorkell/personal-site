export interface BlogMeta {
  title?: string;
  date?: string;
  thumbnail?: string;
  canonical?: string;
}

export interface BlogEntry {
  fileName: string;
  slug: string;
  meta: BlogMeta;
}
