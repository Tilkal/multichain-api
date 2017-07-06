import { Ping } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Ping()', function() {
  it(
    'should return a properly configured JSON-RPC request for the ping API command',
    function() {
      // Signature 1: undefined
      TestCommand(
        Ping(),
        Ping,
      )
    },
  )
})
