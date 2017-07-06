import { GetWalletTransaction } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetWalletTransaction()', function() {
  it(
    'should return a properly configured JSON-RPC request for the getwallettransaction API command',
    function() {
      const transactionId = 'id'
      const includeWatchOnly = false
      const verbose = false

      // Signature 1: [string]
      TestCommand(
        GetWalletTransaction(transactionId),
        GetWalletTransaction,
        [transactionId],
      )

      // Signature 2: [string, boolean]
      TestCommand(
        GetWalletTransaction(transactionId, includeWatchOnly),
        GetWalletTransaction,
        [transactionId, includeWatchOnly],
      )

      // Signature 3: [string, boolean, boolean]
      TestCommand(
        GetWalletTransaction(transactionId, includeWatchOnly, verbose),
        GetWalletTransaction,
        [transactionId, includeWatchOnly, verbose],
      )
    },
  )
})
