import { CreateMultiSig } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/CreateMultiSig()', function() {
  it(
    'should return a properly configured JSON-RPC request for the createmultisig API command',
    function() {
      const requiredSignatures = 2
      const keys = ['key1', 'key2', 'key3']

      // Signature 1: [number, string[]]
      TestCommand(
        CreateMultiSig(requiredSignatures, keys),
        CreateMultiSig,
        [requiredSignatures, keys],
      )
    },
  )
})
