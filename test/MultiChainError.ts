import { expect } from 'chai'
import { MultiChainError } from '../src/MultiChainError'
import { Error as RpcResponseError } from '../src/RpcResponse'
import { MockRpcResponse } from './test-helpers'

describe('/MultiChainError', function() {
  it(
    'new MultiChainError() should return a properly constructed instance',
    function() {
      const response = MockRpcResponse({ code: 1, message: 'Error description.' })
      const error = new MultiChainError(response)

      expect(error.message)
        .to.contain((response.error as RpcResponseError).code)
        .to.contain((response.error as RpcResponseError).message)

      expect(error.response).to.equal(response)
    },
  )

  it(
    'new MultiChainError() should throw an Error when the RPC response does not contain an error',
    function() {
      const response = MockRpcResponse()
      expect(() => new MultiChainError(response)).to.throw(Error)
    },
  )
})
