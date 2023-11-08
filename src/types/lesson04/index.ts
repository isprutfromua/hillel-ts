export interface PaymentRequest {
  sum: number
  from: number
  to: number
}
export interface ErrorData {
  errorMessage: string
  errorCode: number
}
export interface SuccessData extends PaymentRequest {
  databaseId: number
}
export interface FailedResponse {
  status: 'failed'
  data: ErrorData
}
export interface SuccessResponse {
  status: 'success'
  data: SuccessData
}
export type Response = FailedResponse | SuccessResponse
