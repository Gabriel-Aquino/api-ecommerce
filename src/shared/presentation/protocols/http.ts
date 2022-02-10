export interface HttpResponse {
  statusCode: number
  body?: any
}

export interface HttpRequest {
  params?: {[key: string]: any}
  body?: any
}
