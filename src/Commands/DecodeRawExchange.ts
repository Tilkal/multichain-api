import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *decoderawexchange* command.
 */
export interface DecodeRawExchangeRequest extends RpcRequest {
  readonly method: 'decoderawexchange'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *decoderawexchange* command.
 */
export interface DecodeRawExchangeResponse extends RpcResponse {
  readonly result: DecodeRawExchangeResult | null
}

/**
 * Result of the *decoderawexchange* command.
 */
export type DecodeRawExchangeResult = any

export function DecodeRawExchange(...params: any[]): DecodeRawExchangeRequest {
  return params.length === 0 ? { method: 'decoderawexchange' } : { method: 'decoderawexchange', params }
}
