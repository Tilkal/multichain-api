import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getaddresstransaction* command.
 */
export interface GetAddressTransactionRequest extends RpcRequest {
  readonly method: 'getaddresstransaction'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getaddresstransaction* command.
 */
export interface GetAddressTransactionResponse extends RpcResponse {
  readonly result: GetAddressTransactionResult | null
}

/**
 * Result of the *getaddresstransaction* command.
 */
export type GetAddressTransactionResult = any

export function GetAddressTransaction(...params: any[]): GetAddressTransactionRequest {
  return params.length === 0 ? { method: 'getaddresstransaction' } : { method: 'getaddresstransaction', params }
}
