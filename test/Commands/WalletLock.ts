import { WalletLock } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/WalletLock', function() {
  it(
    'WalletLock() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        WalletLock(),
        WalletLock,
      )
    },
  )
})
