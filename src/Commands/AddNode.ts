import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *addnode* command.
 */
export interface AddNodeRequest extends RpcRequest {
  readonly method: 'addnode'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *addnode* command.
 */
export interface AddNodeResponse extends RpcResponse {
  readonly result: AddNodeResult | null
}

/**
 * Result of the *addnode* command.
 */
export type AddNodeResult = any

export function AddNode(...params: any[]): AddNodeRequest {
  return params.length === 0 ? { method: 'addnode' } : { method: 'addnode', params }
}
