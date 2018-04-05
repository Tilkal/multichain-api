import { GetMiningInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetMiningInfo', function() {
  it(
    'GetMiningInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetMiningInfo(),
        GetMiningInfo,
      )
    },
  )
})
