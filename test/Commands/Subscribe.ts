import { Subscribe } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Subscribe', function() {
  it(
    'Subscribe() should return a properly configured JSON-RPC request',
    function() {
      const identifier = 'name'
      const list = ['name1', 'name2']
      const rescan = true

      // Signature 1: [string]
      TestCommand(
        Subscribe(identifier),
        Subscribe,
        [identifier],
      )

      // Signature 2: [string, boolean]
      TestCommand(
        Subscribe(identifier, rescan),
        Subscribe,
        [identifier, rescan],
      )

      // Signature 3: [string[]]
      TestCommand(
        Subscribe(list),
        Subscribe,
        [list],
      )

      // Signature 4: [string[], boolean]
      TestCommand(
        Subscribe(list, rescan),
        Subscribe,
        [list, rescan],
      )
    },
  )
})
