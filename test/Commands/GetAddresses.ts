import { GetAddresses } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetAddresses', function() {
  it(
    'GetAddresses() should return a properly configured JSON-RPC request',
    function() {
      const verbose = false

      // Signature 1: undefined
      TestCommand(
        GetAddresses(),
        GetAddresses,
      )

      // Signature 2: [boolean]
      TestCommand(
        GetAddresses(verbose),
        GetAddresses,
        [verbose],
      )
    },
  )
})
