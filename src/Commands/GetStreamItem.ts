import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getstreamitem* command.
 */
export interface GetStreamItemRequest extends RpcRequest {
  readonly method: 'getstreamitem'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getstreamitem* command.
 */
export interface GetStreamItemResponse extends RpcResponse {
  readonly result: GetStreamItemResult | null
}

/**
 * Result of the *getstreamitem* command.
 */
export type GetStreamItemResult = any

export function GetStreamItem(...params: any[]): GetStreamItemRequest {
  return params.length === 0 ? { method: 'getstreamitem' } : { method: 'getstreamitem', params }
}
