import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getwalletinfo* command.
 */
export interface GetWalletInfoRequest extends RpcRequest {
  readonly method: 'getwalletinfo'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getwalletinfo* command.
 */
export interface GetWalletInfoResponse extends RpcResponse {
  readonly result: GetWalletInfoResult | null
}

/**
 * Result of the *getwalletinfo* command.
 */
export type GetWalletInfoResult = any

export function GetWalletInfo(...params: any[]): GetWalletInfoRequest {
  return params.length === 0 ? { method: 'getwalletinfo' } : { method: 'getwalletinfo', params }
}
