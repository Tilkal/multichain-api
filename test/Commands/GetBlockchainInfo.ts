import { GetBlockchainInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetBlockchainInfo', function() {
  it(
    'GetBlockchainInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetBlockchainInfo(),
        GetBlockchainInfo,
      )
    },
  )
})
