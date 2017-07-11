import { Unsubscribe } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Unsubscribe', function() {
  it(
    'Unsubscribe() should return a properly configured JSON-RPC request',
    function() {
      const identifier = 'name'
      const list = ['name1', 'name2']

      // Signature 1: [string]
      TestCommand(
        Unsubscribe(identifier),
        Unsubscribe,
        [identifier],
      )

      // Signature 2: [string[]]
      TestCommand(
        Unsubscribe(list),
        Unsubscribe,
        [list],
      )
    },
  )
})
