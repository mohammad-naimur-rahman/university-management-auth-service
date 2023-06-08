export type GenericResponseType<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}
