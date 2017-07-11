import { ListLockUnspent } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ListLockUnspent', function() {
  it(
    'ListLockUnspent() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        ListLockUnspent(),
        ListLockUnspent,
      )
    },
  )
})
