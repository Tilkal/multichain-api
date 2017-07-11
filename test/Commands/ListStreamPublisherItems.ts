import { ListStreamPublisherItems } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListStreamPublisherItems', function() {
  it(
    'ListStreamPublisherItems() should return a properly configured JSON-RPC request',
    function() {
      const stream = 'stream'
      const address = 'address'
      const verbose = true
      const count = 10
      const start = 0
      const localOrdering = false

      // Signature 1: undefined
      TestCommand(
        ListStreamPublisherItems(),
        ListStreamPublisherItems,
      )

      // Signature 2: [string]
      TestCommand(
        ListStreamPublisherItems(stream),
        ListStreamPublisherItems,
        [stream],
      )

      // Signature 3: [string, string]
      TestCommand(
        ListStreamPublisherItems(stream, address),
        ListStreamPublisherItems,
        [stream, address],
      )

      // Signature 4: [string, string, boolean]
      TestCommand(
        ListStreamPublisherItems(stream, address, verbose),
        ListStreamPublisherItems,
        [stream, address, verbose],
      )

      // Signature 5: [string, string, boolean, number]
      TestCommand(
        ListStreamPublisherItems(stream, address, verbose, count),
        ListStreamPublisherItems,
        [stream, address, verbose, count],
      )

      // Signature 6: [string, string, boolean, number, number]
      TestCommand(
        ListStreamPublisherItems(stream, address, verbose, count, start),
        ListStreamPublisherItems,
        [stream, address, verbose, count, start],
      )

      // Signature 7: [string, string, boolean, number, number, boolean]
      TestCommand(
        ListStreamPublisherItems(stream, address, verbose, count, start, localOrdering),
        ListStreamPublisherItems,
        [stream, address, verbose, count, start, localOrdering],
      )
    },
  )
})
