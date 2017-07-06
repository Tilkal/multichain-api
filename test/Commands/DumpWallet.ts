import { DumpWallet } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DumpWallet()', function() {
  it(
    'should return a properly configured JSON-RPC request for the dumpwallet API command',
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
