import { CreateKeyPairs } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/CreateKeyPairs()', function() {
  it(
    'should return a properly configured JSON-RPC request for the createkeypairs API command',
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
