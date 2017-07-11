import { AppendRawChange } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/AppendRawChange', function() {
  it(
    'AppendRawChange() should return a properly configured JSON-RPC request',
    function() {
      const transaction = 'transaction'
      const address = 'address'
      const fee = 1

      // Signature 1: [string, string]
      TestCommand(
        AppendRawChange(transaction, address),
        AppendRawChange,
        [transaction, address],
      )

      // Signature 2: [string, string, number]
      TestCommand(
        AppendRawChange(transaction, address, fee),
        AppendRawChange,
        [transaction, address, fee],
      )
    },
  )
})
