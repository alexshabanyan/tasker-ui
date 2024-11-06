export interface ErrorResponseItem {
  field: string,
  message: string,
}

export interface ErrorResponse {
  errors: ErrorResponseItem[]
}



export const isErrorResponse = (obj: any[]): obj is ErrorResponse[] =>  {
  return typeof obj === 'object' && obj !== null
    && obj.every(({ field, message }) => typeof field === 'string' && typeof message === 'string' )
};