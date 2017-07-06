import { EncryptWallet } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/EncryptWallet()', function() {
  it(
    'should return a properly configured JSON-RPC request for the encryptwallet API command',
    function() {
      const passphrase = 'passphrase'

      // Signature 1: [string]
      TestCommand(
        EncryptWallet(passphrase),
        EncryptWallet,
        [passphrase],
      )
    },
  )
})
