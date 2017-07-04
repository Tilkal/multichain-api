import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getaddresses* command.
 */
export interface GetAddressesRequest extends RpcRequest {
  readonly method: 'getaddresses'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getaddresses* command.
 */
export interface GetAddressesResponse extends RpcResponse {
  readonly result: GetAddressesResult | null
}

/**
 * Result of the *getaddresses* command.
 */
export type GetAddressesResult = any

export function GetAddresses(...params: any[]): GetAddressesRequest {
  return params.length === 0 ? { method: 'getaddresses' } : { method: 'getaddresses', params }
}
