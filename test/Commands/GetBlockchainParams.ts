import { GetBlockchainParams } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetBlockchainParams', function() {
  it(
    'GetBlockchainParams() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetBlockchainParams(),
        GetBlockchainParams,
      )
    },
  )
})
