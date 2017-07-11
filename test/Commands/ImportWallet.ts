import { ImportWallet } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ImportWallet', function() {
  it(
    'ImportWallet() should return a properly configured JSON-RPC request',
    function() {
      const filename = 'filename'

      // Signature 1: [string]
      TestCommand(
        ImportWallet(filename),
        ImportWallet,
        [filename],
      )
    },
  )
})
