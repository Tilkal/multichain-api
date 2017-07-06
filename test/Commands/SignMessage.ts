import { SignMessage } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/SignMessage()', function() {
  it(
    'should return a properly configured JSON-RPC request for the signmessage API command',
    function() {
      const address = 'address'
      const message = 'message'

      // Signature 1: [string, string]
      TestCommand(
        SignMessage(address, message),
        SignMessage,
        [address, message],
      )
    },
  )
})
