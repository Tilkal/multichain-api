import { RpcRequest } from '../RpcRequest'
import { RpcResponse } from '../RpcResponse'

/**
 * JSON-RPC request for the *getmininginfo* command.
 */
export interface GetMiningInfoRequest extends RpcRequest {
  readonly method: 'getmininginfo'
  readonly params?: undefined
}

/**
 * JSON-RPC response for the *getmininginfo* command.
 */
export interface GetMiningInfoResponse extends RpcResponse {
  readonly result: GetMiningInfoResult | null
}

/**
 * Result of the *getmininginfo* command.
 */
export interface GetMiningInfoResult {
  blocks: number
  currentblocksize: number
  currentblocktx: number
  difficulty: number
  errors: string
  genproclimit: number
  networkhashps: number
  pooledtx: number
  testnet: boolean
  chain: string
  generate: boolean
  hashespersec: number
}

export function GetMiningInfo(): GetMiningInfoRequest {
  return { method: 'getmininginfo' }
}
