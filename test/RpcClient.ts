import { expect } from 'chai'
import * as http from 'http'
import * as sinon from 'sinon'
import { PassThrough } from 'stream'
import { Help } from '../src/Commands'
import { MultiChainError, RpcClient, RpcError, RpcResponse } from '../src/main'
import { MockRpcResponse } from './test-helpers'

describe('/RpcClient', function() {
  beforeEach(function() {
    this.request = sinon.stub(http, 'request')
  })

  afterEach(function() {
    this.request.restore()
  })

  it(
    'RpcClient should return a RpcResponse when the request is successful',
    async function() {
      const expectedResponse: RpcResponse = { result: '...', error: null, id: null }

      const message = new PassThrough()
      message.end(JSON.stringify(expectedResponse))

      this.request
        .callsArgWith(1, message)
        .returns(new PassThrough())

      const response = await RpcClient({ password: 'password' })(Help())
      expect(response).to.deep.equal(expectedResponse)
    },
  )

  it(
    'RpcClient should throw an Error when the request is unsuccessful',
    async function() {
      const expectedResponse: RpcResponse = { result: '...', error: null, id: null }

      const message = new PassThrough()
      message.end(JSON.stringify(expectedResponse))

      this.request
        .callsArgWith(1, message)
        .returns(new PassThrough())

      try {
        const promise = RpcClient({ password: 'password' })(Help())
        message.emit('error', new Error())
        const result = await promise
        throw new Error('Unreachable')
      } catch (error) {
        expect(error)
          .to.be.an.instanceof(Error)
          .and.to.not.be.an.instanceof(RpcError)
          .and.to.not.have.property('message', 'Unreachable')
      }
    },
  )

  it(
    'RpcClient should throw an RpcError when the request is successful but the response body is not a JSON document',
    async function() {
      const message = new PassThrough()
      message.end('<h1>Unauthorized</h1>')

      this.request
        .callsArgWith(1, message)
        .returns(new PassThrough())

      try {
        const response = await RpcClient({ password: 'password' })(Help())
        throw new Error('Unreachable')
      } catch (error) {
        expect(error).to.be.an.instanceof(RpcError)
      }
    },
  )

  it(
    'RpcClient should throw a MultiChainError when the request is successful but the response contains an error',
    async function() {
      const r = MockRpcResponse({ code: 1, message: 'Error description.' })
      const message = new PassThrough()
      message.end(JSON.stringify(r))

      this.request
        .callsArgWith(1, message)
        .returns(new PassThrough())

      try {
        const response = await RpcClient({ password: 'password' })(Help())
        throw new Error('Unreachable')
      } catch (error) {
        expect(error).to.be.an.instanceof(Error)
      }
    },
  )
})
