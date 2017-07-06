import { DecodeRawExchange } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/DecodeRawExchange()', function() {
  it(
    'should return a properly configured JSON-RPC request for the decoderawexchange API command',
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
