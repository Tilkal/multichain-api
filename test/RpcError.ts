import { expect } from 'chai'
import { RpcError } from '../src/RpcError'

describe('/RpcError', function() {
  it(
    'RpcError should return a properly constructed instance',
    function() {
      const status = 401
      const statusText = 'Unauthorized'
      const headers = { Server: 'MultiChain' }
      const body = 'Your are not authorized to access this resource'
      const error = new RpcError(status, statusText, headers, body)

      expect(error.status).to.equal(status)
      expect(error.statusText).to.equal(statusText)
      expect(error.headers).to.deep.equal(headers)
      expect(error.body).to.equal(body)
    },
  )
})
