import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getblockchainparams* command.
 */
export interface GetBlockchainParamsRequest extends RpcRequest {
  readonly method: 'getblockchainparams'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getblockchainparams* command.
 */
export interface GetBlockchainParamsResponse extends RpcResponse {
  readonly result: GetBlockchainParamsResult | null
}

/**
 * Result of the *getblockchainparams* command.
 */
export type GetBlockchainParamsResult = any

export function GetBlockchainParams(...params: any[]): GetBlockchainParamsRequest {
  return params.length === 0 ? { method: 'getblockchainparams' } : { method: 'getblockchainparams', params }
}
