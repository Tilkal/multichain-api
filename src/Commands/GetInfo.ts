import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getinfo* command.
 */
export interface GetInfoRequest extends RpcRequest {
  readonly method: 'getinfo'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *getinfo* command.
 */
export interface GetInfoResponse extends RpcResponse {
  readonly result: GetInfoResult | null
}

/**
 * Result of the *getinfo* command.
 */
export type GetInfoResult = any

export function GetInfo(): GetInfoRequest {
  return { method: 'getinfo' }
}
