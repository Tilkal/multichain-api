import { GetNewAddress } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetNewAddress', function() {
  it(
    'GetNewAddress() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetNewAddress(),
        GetNewAddress,
      )
    },
  )
})
