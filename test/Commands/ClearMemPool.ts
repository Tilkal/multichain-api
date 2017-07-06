import { ClearMemPool } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ClearMemPool()', function() {
  it(
    'should return a properly configured JSON-RPC request for the clearmempool API command',
    function() {
      // Signature 1: undefined
      TestCommand(
        ClearMemPool(),
        ClearMemPool,
      )
    },
  )
})
