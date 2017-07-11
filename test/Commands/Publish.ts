import { Publish } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Publish', function() {
  it(
    'Publish() should return a properly configured JSON-RPC request',
    function() {
      const stream = 'stream'
      const key = 'key'
      const data = 'data'

      // Signature 1: [string, string, string]
      TestCommand(
        Publish(stream, key, data),
        Publish,
        [stream, key, data],
      )
    },
  )
})
