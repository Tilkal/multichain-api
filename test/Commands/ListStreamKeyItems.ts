import { ListStreamKeyItems } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListStreamKeyItems', function() {
  it(
    'ListStreamKeyItems() should return a properly configured JSON-RPC request',
    function() {
      const stream = 'stream'
      const key = 'key'
      const verbose = true
      const count = 10
      const start = 0
      const localOrdering = false

      // Signature 1: [string, string]
      TestCommand(
        ListStreamKeyItems(stream, key),
        ListStreamKeyItems,
        [stream, key],
      )

      // Signature 2: [string, string, boolean]
      TestCommand(
        ListStreamKeyItems(stream, key, verbose),
        ListStreamKeyItems,
        [stream, key, verbose],
      )

      // Signature 3: [string, string, boolean, number]
      TestCommand(
        ListStreamKeyItems(stream, key, verbose, count),
        ListStreamKeyItems,
        [stream, key, verbose, count],
      )

      // Signature 4: [string, string, boolean, number, number]
      TestCommand(
        ListStreamKeyItems(stream, key, verbose, count, start),
        ListStreamKeyItems,
        [stream, key, verbose, count, start],
      )

      // Signature 5: [string, string, boolean, number, number, boolean]
      TestCommand(
        ListStreamKeyItems(stream, key, verbose, count, start, localOrdering),
        ListStreamKeyItems,
        [stream, key, verbose, count, start, localOrdering],
      )
    },
  )
})
