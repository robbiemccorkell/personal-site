export interface BlogPost {
  attributes: {
    title?: string;
    date?: string;
    thumbnail?: string;
    canonical?: string;
  };
  html: string;
  slug: string;
}

export type BlogManifest = Record<string, string>;