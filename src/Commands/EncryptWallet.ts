import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *encryptwallet* command.
 */
export interface EncryptWalletRequest extends RpcRequest {
  readonly method: 'encryptwallet'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *encryptwallet* command.
 */
export interface EncryptWalletResponse extends RpcResponse {
  readonly result: EncryptWalletResult | null
}

/**
 * Result of the *encryptwallet* command.
 */
export type EncryptWalletResult = any

export function EncryptWallet(...params: any[]): EncryptWalletRequest {
  return params.length === 0 ? { method: 'encryptwallet' } : { method: 'encryptwallet', params }
}
