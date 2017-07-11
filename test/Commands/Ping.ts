import { Ping } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Ping', function() {
  it(
    'Ping() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        Ping(),
        Ping,
      )
    },
  )
})
