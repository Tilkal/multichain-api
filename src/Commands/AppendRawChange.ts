import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *appendrawchange* command.
 */
export interface AppendRawChangeRequest extends RpcRequest {
  readonly method: 'appendrawchange'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *appendrawchange* command.
 */
export interface AppendRawChangeResponse extends RpcResponse {
  readonly result: AppendRawChangeResult | null
}

/**
 * Result of the *appendrawchange* command.
 */
export type AppendRawChangeResult = any

export function AppendRawChange(...params: any[]): AppendRawChangeRequest {
  return params.length === 0 ? { method: 'appendrawchange' } : { method: 'appendrawchange', params }
}
