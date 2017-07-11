import { Stop } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Stop', function() {
  it(
    'Stop() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        Stop(),
        Stop,
      )
    },
  )
})
