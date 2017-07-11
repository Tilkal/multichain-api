import { ListAssetTransactions } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListAssetTransactions', function() {
  it(
    'ListAssetTransactions() should return a properly configured JSON-RPC request',
    function() {
      const asset = 'asset'
      const verbose = true
      const count = 10
      const start = 0
      const localOrdering = false

      // Signature 1: [string]
      TestCommand(
        ListAssetTransactions(asset),
        ListAssetTransactions,
        [asset],
      )

      // Signature 2: [string, boolean]
      TestCommand(
        ListAssetTransactions(asset, verbose),
        ListAssetTransactions,
        [asset, verbose],
      )

      // Signature 3: [string, boolean, number]
      TestCommand(
        ListAssetTransactions(asset, verbose, count),
        ListAssetTransactions,
        [asset, verbose, count],
      )

      // Signature 4: [string, boolean, number, number]
      TestCommand(
        ListAssetTransactions(asset, verbose, count, start),
        ListAssetTransactions,
        [asset, verbose, count, start],
      )

      // Signature 5: [string, boolean, number, number, boolean]
      TestCommand(
        ListAssetTransactions(asset, verbose, count, start, localOrdering),
        ListAssetTransactions,
        [asset, verbose, count, start, localOrdering],
      )
    },
  )
})
