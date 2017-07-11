import { BackupWallet } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/BackupWallet', function() {
  it(
    'BackupWallet() should return a properly configured JSON-RPC request',
    function() {
      const filename = 'filename'

      // Signature 1: [string]
      TestCommand(
        BackupWallet(filename),
        BackupWallet,
        [filename],
      )
    },
  )
})
