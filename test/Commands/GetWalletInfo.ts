import { GetWalletInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetWalletInfo()', function() {
  it(
    'should return a properly configured JSON-RPC request for the getwalletinfo API command',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetWalletInfo(),
        GetWalletInfo,
      )
    },
  )
})
