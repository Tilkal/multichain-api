import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getblockhash* command.
 */
export interface GetBlockHashRequest extends RpcRequest {
  readonly method: 'getblockhash'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getblockhash* command.
 */
export interface GetBlockHashResponse extends RpcResponse {
  readonly result: GetBlockHashResult | null
}

/**
 * Result of the *getblockhash* command.
 */
export type GetBlockHashResult = any

export function GetBlockHash(...params: any[]): GetBlockHashRequest {
  return params.length === 0 ? { method: 'getblockhash' } : { method: 'getblockhash', params }
}
