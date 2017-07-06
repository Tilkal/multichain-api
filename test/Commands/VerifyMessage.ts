import { VerifyMessage } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/VerifyMessage()', function() {
  it(
    'should return a properly configured JSON-RPC request for the verifymessage API command',
    function() {
      const address = 'address'
      const signature = 'signature'
      const message = 'message'

      // Signature 1: [string, string, string]
      TestCommand(
        VerifyMessage(address, signature, message),
        VerifyMessage,
        [address, signature, message],
      )
    },
  )
})
