import { CreateKeyPairs } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/CreateKeyPairs', function() {
  it(
    'CreateKeyPairs() should return a properly configured JSON-RPC request',
    function() {
      const count = 1

      // Signature 1: undefined
      TestCommand(
        CreateKeyPairs(),
        CreateKeyPairs,
      )

      // Signature 2: [string]
      TestCommand(
        CreateKeyPairs(count),
        CreateKeyPairs,
        [count],
      )
    },
  )
})
