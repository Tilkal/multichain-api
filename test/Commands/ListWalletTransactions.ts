import { ListWalletTransactions } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListWalletTransactions', function() {
  it(
    'ListWalletTransactions() should return a properly configured JSON-RPC request',
    function() {
      const count = 10
      const skip = 0
      const includeWatchOnly = false
      const verbose = false

      // Signature 1: undefined
      TestCommand(
        ListWalletTransactions(),
        ListWalletTransactions,
      )

      // Signature 2: [number]
      TestCommand(
        ListWalletTransactions(count),
        ListWalletTransactions,
        [count],
      )

      // Signature 3: [number, number]
      TestCommand(
        ListWalletTransactions(count, skip),
        ListWalletTransactions,
        [count, skip],
      )

      // Signature 4: [number, number, boolean]
      TestCommand(
        ListWalletTransactions(count, skip, includeWatchOnly),
        ListWalletTransactions,
        [count, skip, includeWatchOnly],
      )

      // Signature 5: [number, number, boolean, boolean]
      TestCommand(
        ListWalletTransactions(count, skip, includeWatchOnly, verbose),
        ListWalletTransactions,
        [count, skip, includeWatchOnly, verbose],
      )
    },
  )
})
