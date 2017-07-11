import { ValidateAddress } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ValidateAddress', function() {
  it(
    'ValidateAddress() should return a properly configured JSON-RPC request',
    function() {
      const address = 'address'

      // Signature 1: [string]
      TestCommand(
        ValidateAddress(address),
        ValidateAddress,
        [address],
      )
    },
  )
})
