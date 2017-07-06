import { WalletLock } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/WalletLock()', function() {
  it(
    'should return a properly configured JSON-RPC request for the walletlock API command',
    function() {
      // Signature 1: undefined
      TestCommand(
        WalletLock(),
        WalletLock,
      )
    },
  )
})
