import { GetRuntimeParams } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetRuntimeParams', function() {
  it(
    'GetRuntimeParams() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetRuntimeParams(),
        GetRuntimeParams,
      )
    },
  )
})
