import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createmultisig* command.
 */
export interface CreateMultiSigRequest extends RpcRequest {
  readonly method: 'createmultisig'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *createmultisig* command.
 */
export interface CreateMultiSigResponse extends RpcResponse {
  readonly result: CreateMultiSigResult | null
}

/**
 * Result of the *createmultisig* command.
 */
export type CreateMultiSigResult = any

export function CreateMultiSig(...params: any[]): CreateMultiSigRequest {
  return params.length === 0 ? { method: 'createmultisig' } : { method: 'createmultisig', params }
}
