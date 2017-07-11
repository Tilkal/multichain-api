import { DisableRawTransaction } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DisableRawTransaction', function() {
  it(
    'DisableRawTransaction() should return a properly configured JSON-RPC request',
    function() {
      const transaction = 'transaction'

      // Signature 1: [string]
      TestCommand(
        DisableRawTransaction(transaction),
        DisableRawTransaction,
        [transaction],
      )
    },
  )
})
