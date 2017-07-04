import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *disablerawtransaction* command.
 */
export interface DisableRawTransactionRequest extends RpcRequest {
  readonly method: 'disablerawtransaction'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *disablerawtransaction* command.
 */
export interface DisableRawTransactionResponse extends RpcResponse {
  readonly result: DisableRawTransactionResult | null
}

/**
 * Result of the *disablerawtransaction* command.
 */
export type DisableRawTransactionResult = any

export function DisableRawTransaction(...params: any[]): DisableRawTransactionRequest {
  return params.length === 0 ? { method: 'disablerawtransaction' } : { method: 'disablerawtransaction', params }
}
