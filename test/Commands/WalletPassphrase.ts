import { WalletPassphrase } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/WalletPassphrase', function() {
  it(
    'WalletPassphrase() should return a properly configured JSON-RPC request',
    function() {
      const passphrase = 'passphrase'
      const timeout = 30

      // Signature 1: [string, number]
      TestCommand(
        WalletPassphrase(passphrase, timeout),
        WalletPassphrase,
        [passphrase, timeout],
      )
    },
  )
})
