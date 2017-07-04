import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *createkeypairs* command.
 */
export interface CreateKeyPairsRequest extends RpcRequest {
  readonly method: 'createkeypairs'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *createkeypairs* command.
 */
export interface CreateKeyPairsResponse extends RpcResponse {
  readonly result: CreateKeyPairsResult | null
}

/**
 * Result of the *createkeypairs* command.
 */
export type CreateKeyPairsResult = any

export function CreateKeyPairs(...params: any[]): CreateKeyPairsRequest {
  return params.length === 0 ? { method: 'createkeypairs' } : { method: 'createkeypairs', params }
}
