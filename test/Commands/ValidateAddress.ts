import { ValidateAddress } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ValidateAddress()', function() {
  it(
    'should return a properly configured JSON-RPC request for the validateaddress API command',
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
