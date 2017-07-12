import { GetInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetInfo', function() {
  it(
    'GetInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetInfo(),
        GetInfo,
      )
    },
  )
})
