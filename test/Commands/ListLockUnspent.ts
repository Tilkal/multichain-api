import { ListLockUnspent } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListLockUnspent()', function() {
  it(
    'should return a properly configured JSON-RPC request for the listlockunspent API command',
    function() {
      // Signature 1: undefined
      TestCommand(
        ListLockUnspent(),
        ListLockUnspent,
      )
    },
  )
})
