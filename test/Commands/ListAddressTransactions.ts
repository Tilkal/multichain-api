import { ListAddressTransactions } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListAddressTransactions', function() {
  it(
    'ListAddressTransactions() should return a properly configured JSON-RPC request',
    function() {
      const address = 'address'
      const count = 10
      const skip = 0
      const verbose = false

      // Signature 1: [string]
      TestCommand(
        ListAddressTransactions(address),
        ListAddressTransactions,
        [address],
      )

      // Signature 2: [string, number]
      TestCommand(
        ListAddressTransactions(address, count),
        ListAddressTransactions,
        [address, count],
      )

      // Signature 3: [string, number, number]
      TestCommand(
        ListAddressTransactions(address, count, skip),
        ListAddressTransactions,
        [address, count, skip],
      )

      // Signature 4: [string, number, number, boolean]
      TestCommand(
        ListAddressTransactions(address, count, skip, verbose),
        ListAddressTransactions,
        [address, count, skip, verbose],
      )
    },
  )
})
