import { WalletPassphraseChange } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/WalletPassphraseChange()', function() {
  it(
    'should return a properly configured JSON-RPC request for the walletpassphrasechange API command',
    function() {
      const oldPassphrase = 'old_passphrase'
      const newPassphrase = 'new_passphrase'

      // Signature 1: [string, string]
      TestCommand(
        WalletPassphraseChange(oldPassphrase, newPassphrase),
        WalletPassphraseChange,
        [oldPassphrase, newPassphrase],
      )
    },
  )
})
