import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getruntimeparams* command.
 */
export interface GetRuntimeParamsRequest extends RpcRequest {
  readonly method: 'getruntimeparams'
  readonly params?: any[]
}

/**
 * JSON-RPC response for the *getruntimeparams* command.
 */
export interface GetRuntimeParamsResponse extends RpcResponse {
  readonly result: GetRuntimeParamsResult | null
}

/**
 * Result of the *getruntimeparams* command.
 */
export type GetRuntimeParamsResult = any

export function GetRuntimeParams(...params: any[]): GetRuntimeParamsRequest {
  return params.length === 0 ? { method: 'getruntimeparams' } : { method: 'getruntimeparams', params }
}
