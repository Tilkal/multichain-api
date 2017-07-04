import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getpeerinfo* command.
 */
export interface GetPeerInfoRequest extends RpcRequest {
  readonly method: 'getpeerinfo'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getpeerinfo* command.
 */
export interface GetPeerInfoResponse extends RpcResponse {
  readonly result: GetPeerInfoResult | null
}

/**
 * Result of the *getpeerinfo* command.
 */
export type GetPeerInfoResult = any

export function GetPeerInfo(...params: any[]): GetPeerInfoRequest {
  return params.length === 0 ? { method: 'getpeerinfo' } : { method: 'getpeerinfo', params }
}
