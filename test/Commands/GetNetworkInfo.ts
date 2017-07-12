import { GetNetworkInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetNetworkInfo', function() {
  it(
    'GetNetworkInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetNetworkInfo(),
        GetNetworkInfo,
      )
    },
  )
})
