import { DecodeRawTransaction } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DecodeRawTransaction', function() {
  it(
    'DecodeRawTransaction() should return a properly configured JSON-RPC request',
    function() {
      const transaction = 'transaction'

      // Signature 1: [string]
      TestCommand(
        DecodeRawTransaction(transaction),
        DecodeRawTransaction,
        [transaction],
      )
    },
  )
})
