import { GetMemPoolInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetMemPoolInfo', function() {
  it(
    'GetMemPoolInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetMemPoolInfo(),
        GetMemPoolInfo,
      )
    },
  )
})
