import { Stop } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Stop()', function() {
  it(
    'should return a properly configured JSON-RPC request for the stop API command',
    function() {
      // Signature 1: undefined
      TestCommand(
        Stop(),
        Stop,
      )
    },
  )
})
