import { GetWalletInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetWalletInfo', function() {
  it(
    'GetWalletInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetWalletInfo(),
        GetWalletInfo,
      )
    },
  )
})
