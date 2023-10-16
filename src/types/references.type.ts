export interface Reference {
  id: number
  name: string
  projects: {
    name: string
    description: {
      [k: string]: unknown
    }[]
    color: string
    stairs: string
    location: string
    dimensions: string
    executedAt: string
    executedBy: string
    headerImage: number | Media
    carousel: {
      image: number | Media
      id?: string
    }[]
    coverCompanyName: string
    coverCompanyUrl: string
    id?: string
  }[]
  updatedAt: string
  createdAt: string
}
export interface Media {
  id: number
  alt?: string
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  sizes?: {
    thumbnail?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
    card?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
    tablet?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
  }
}
