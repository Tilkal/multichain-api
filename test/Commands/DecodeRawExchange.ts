import { DecodeRawExchange } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DecodeRawExchange', function() {
  it(
    'DecodeRawExchange() should return a properly configured JSON-RPC request',
    function() {
      const transaction = 'transaction'
      const verbose = false

      // Signature 1: [string]
      TestCommand(
        DecodeRawExchange(transaction),
        DecodeRawExchange,
        [transaction],
      )

      // Signature 2: [string, boolean]
      TestCommand(
        DecodeRawExchange(transaction, verbose),
        DecodeRawExchange,
        [transaction, verbose],
      )
    },
  )
})
