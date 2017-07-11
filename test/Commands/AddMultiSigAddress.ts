import { AddMultiSigAddress } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/AddMultiSigAddress', function() {
  it(
    'AddMultiSigAddress() should return a properly configured JSON-RPC request',
    function() {
      const requiredSignatures = 2
      const keys = ['key1', 'key2', 'key3']

      // Signature 1: [number, string[]]
      TestCommand(
        AddMultiSigAddress(requiredSignatures, keys),
        AddMultiSigAddress,
        [requiredSignatures, keys],
      )
    },
  )
})
