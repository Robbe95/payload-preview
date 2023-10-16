import { customAxios } from '../http/http'
import type { Reference } from '../types/references.type'

export async function getReference(): Promise<Reference> {
  const response = await customAxios.get('references/1')
  return response.data as Reference
}
