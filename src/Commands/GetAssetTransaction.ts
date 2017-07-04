import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getassettransaction* command.
 */
export interface GetAssetTransactionRequest extends RpcRequest {
  readonly method: 'getassettransaction'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getassettransaction* command.
 */
export interface GetAssetTransactionResponse extends RpcResponse {
  readonly result: GetAssetTransactionResult | null
}

/**
 * Result of the *getassettransaction* command.
 */
export type GetAssetTransactionResult = any

export function GetAssetTransaction(...params: any[]): GetAssetTransactionRequest {
  return params.length === 0 ? { method: 'getassettransaction' } : { method: 'getassettransaction', params }
}
