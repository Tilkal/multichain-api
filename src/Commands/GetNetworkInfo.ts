import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getnetworkinfo* command.
 */
export interface GetNetworkInfoRequest extends RpcRequest {
  readonly method: 'getnetworkinfo'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getnetworkinfo* command.
 */
export interface GetNetworkInfoResponse extends RpcResponse {
  readonly result: GetNetworkInfoResult | null
}

/**
 * Result of the *getnetworkinfo* command.
 */
export type GetNetworkInfoResult = any

export function GetNetworkInfo(...params: any[]): GetNetworkInfoRequest {
  return params.length === 0 ? { method: 'getnetworkinfo' } : { method: 'getnetworkinfo', params }
}
