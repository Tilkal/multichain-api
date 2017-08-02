import { Help } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Help', function() {
  it(
    'Help() should return a properly configured JSON-RPC request',
    function() {
      const command = 'help'

      // Signature 1: undefined
      TestCommand(
        Help(),
        Help,
      )

      // Signature 2: [string]
      TestCommand(
        Help(command),
        Help,
        [command],
      )
    },
  )
})
