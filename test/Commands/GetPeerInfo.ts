import { GetPeerInfo } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/GetPeerInfo', function() {
  it(
    'GetPeerInfo() should return a properly configured JSON-RPC request',
    function() {
      // Signature 1: undefined
      TestCommand(
        GetPeerInfo(),
        GetPeerInfo,
      )
    },
  )
})
