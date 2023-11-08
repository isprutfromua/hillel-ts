// In case of success
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },

// In case of fail
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "....",
// 		"errorCode": 4
// 	}
// }

// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }

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

// fields test
const res: Response = {} as Response

if (res.status === 'failed') {
  console.log(res.data.errorCode)
  console.log(res.data.errorMessage)
  console.log(res.data.sum) //Error as expected
} else if (res.status === 'success') {
  console.log(res.data.databaseId)
  console.log(res.data.from)
  console.log(res.data.sum)
  console.log(res.data.to)
  console.log(res.data.errorCode) // Error as expected
} else {
  const invalidStatus: never = res

  throw `invalid status ${invalidStatus}`
}
