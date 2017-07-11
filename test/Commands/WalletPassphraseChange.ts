import { WalletPassphraseChange } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/WalletPassphraseChange', function() {
  it(
    'WalletPassphraseChange() should return a properly configured JSON-RPC request',
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
