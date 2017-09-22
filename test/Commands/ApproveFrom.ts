import { ApproveFrom } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/ApproveFrom', function() {
  it(
    'ApproveFrom() should return a properly configured JSON-RPC request',
    function() {
      const address = 'address'
      const upgrade = 'upgrade'
      const approve = true

      // Signature 1: [string, string, boolean]
      TestCommand(
        ApproveFrom(address, upgrade, approve),
        ApproveFrom,
        [address, upgrade, approve],
      )
    },
  )
})
