import { DumpWallet } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DumpWallet', function() {
  it(
    'DumpWallet() should return a properly configured JSON-RPC request',
    function() {
      const filename = 'filename'

      // Signature 1: [string]
      TestCommand(
        DumpWallet(filename),
        DumpWallet,
        [filename],
      )
    },
  )
})
