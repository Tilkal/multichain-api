import { SendRawTransaction } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/SendRawTransaction', function() {
  it(
    'SendRawTransaction() should return a properly configured JSON-RPC request',
    function() {
      const transaction = 'transaction'
      const allowHighFees = false

      // Signature 1: [string]
      TestCommand(
        SendRawTransaction(transaction),
        SendRawTransaction,
        [transaction],
      )

      // Signature 2: [string, boolean]
      TestCommand(
        SendRawTransaction(transaction, allowHighFees),
        SendRawTransaction,
        [transaction, allowHighFees],
      )
    },
  )
})
