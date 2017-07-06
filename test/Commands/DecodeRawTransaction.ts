import { DecodeRawTransaction } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DecodeRawTransaction()', function() {
  it(
    'should return a properly configured JSON-RPC request for the decoderawtransaction API command',
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
