import { PublishFrom } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/PublishFrom()', function() {
  it(
    'should return a properly configured JSON-RPC request for the publishfrom API command',
    function() {
      const from = 'address'
      const stream = 'stream'
      const key = 'key'
      const data = 'data'

      // Signature 1: [string, string, string, string]
      TestCommand(
        PublishFrom(from, stream, key, data),
        PublishFrom,
        [from, stream, key, data],
      )
    },
  )
})
