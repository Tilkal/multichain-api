import { CombineUnspent } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/CombineUnspent', function() {
  it(
    'CombineUnspent() should return a properly configured JSON-RPC request',
    function() {
      const address = 'address'
      const minConfirmations = 1
      const maxTransactions = 100
      const minInputs = 2
      const maxInputs = 100
      const maxTime = 15

      // Signature 1: undefined
      TestCommand(
        CombineUnspent(),
        CombineUnspent,
      )

      // Signature 2: [string]
      TestCommand(
        CombineUnspent(address),
        CombineUnspent,
        [address],
      )

      // Signature 3: [string, number]
      TestCommand(
        CombineUnspent(address, minConfirmations),
        CombineUnspent,
        [address, minConfirmations],
      )

      // Signature 4: [string, number, number]
      TestCommand(
        CombineUnspent(address, minConfirmations, maxTransactions),
        CombineUnspent,
        [address, minConfirmations, maxTransactions],
      )

      // Signature 5: [string, number, number, number]
      TestCommand(
        CombineUnspent(address, minConfirmations, maxTransactions, minInputs),
        CombineUnspent,
        [address, minConfirmations, maxTransactions, minInputs],
      )

      // Signature 6: [string, number, number, number, number]
      TestCommand(
        CombineUnspent(address, minConfirmations, maxTransactions, minInputs, maxInputs),
        CombineUnspent,
        [address, minConfirmations, maxTransactions, minInputs, maxInputs],
      )

      // Signature 7: [string, number, number, number, number, number]
      TestCommand(
        CombineUnspent(address, minConfirmations, maxTransactions, minInputs, maxInputs, maxTime),
        CombineUnspent,
        [address, minConfirmations, maxTransactions, minInputs, maxInputs, maxTime],
      )
    },
  )
})
