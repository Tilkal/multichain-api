import { VerifyMessage } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/VerifyMessage', function() {
  it(
    'VerifyMessage() should return a properly configured JSON-RPC request',
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
