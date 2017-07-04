import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *importwallet* command.
 */
export interface ImportWalletRequest extends RpcRequest {
  readonly method: 'importwallet'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *importwallet* command.
 */
export interface ImportWalletResponse extends RpcResponse {
  readonly result: ImportWalletResult | null
}

/**
 * Result of the *importwallet* command.
 */
export type ImportWalletResult = any

export function ImportWallet(...params: any[]): ImportWalletRequest {
  return params.length === 0 ? { method: 'importwallet' } : { method: 'importwallet', params }
}
