import { ListStreamItems } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListStreamItems', function() {
  it(
    'ListStreamItems() should return a properly configured JSON-RPC request',
    function() {
      const stream = 'stream'
      const verbose = true
      const count = 10
      const start = 0
      const localOrdering = false

      // Signature 1: [string]
      TestCommand(
        ListStreamItems(stream),
        ListStreamItems,
        [stream],
      )

      // Signature 2: [string, boolean]
      TestCommand(
        ListStreamItems(stream, verbose),
        ListStreamItems,
        [stream, verbose],
      )

      // Signature 3: [string, boolean, number]
      TestCommand(
        ListStreamItems(stream, verbose, count),
        ListStreamItems,
        [stream, verbose, count],
      )

      // Signature 4: [string, boolean, number, number]
      TestCommand(
        ListStreamItems(stream, verbose, count, start),
        ListStreamItems,
        [stream, verbose, count, start],
      )

      // Signature 5: [string, boolean, number, number, boolean]
      TestCommand(
        ListStreamItems(stream, verbose, count, start, localOrdering),
        ListStreamItems,
        [stream, verbose, count, start, localOrdering],
      )
    },
  )
})
