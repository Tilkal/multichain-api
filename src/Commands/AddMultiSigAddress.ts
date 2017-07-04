import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *addmultisigaddress* command.
 */
export interface AddMultiSigAddressRequest extends RpcRequest {
  readonly method: 'addmultisigaddress'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *addmultisigaddress* command.
 */
export interface AddMultiSigAddressResponse extends RpcResponse {
  readonly result: AddMultiSigAddressResult | null
}

/**
 * Result of the *addmultisigaddress* command.
 */
export type AddMultiSigAddressResult = any

export function AddMultiSigAddress(...params: any[]): AddMultiSigAddressRequest {
  return params.length === 0 ? { method: 'addmultisigaddress' } : { method: 'addmultisigaddress', params }
}
