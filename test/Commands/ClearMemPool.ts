import { ClearMemPool } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ClearMemPool', function() {
  it(
    'ClearMemPool() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        ClearMemPool(),
        ClearMemPool,
      )
    },
  )
})
