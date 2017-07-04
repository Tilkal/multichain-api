import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *help* command.
 */
export interface HelpRequest extends RpcRequest {
  readonly method: 'help'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *help* command.
 */
export interface HelpResponse extends RpcResponse {
  readonly result: HelpResult | null
}

/**
 * Result of the *help* command.
 */
export type HelpResult = any

export function Help(...params: any[]): HelpRequest {
  return params.length === 0 ? { method: 'help' } : { method: 'help', params }
}
