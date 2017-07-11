import { SetLastBlock } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/SetLastBlock', function() {
  it(
    'SetLastBlock() should return a properly configured JSON-RPC request',
    function() {
      const hash = 'hash'
      const height = 0

      // Signature 1: [string]
      TestCommand(
        SetLastBlock(hash),
        SetLastBlock,
        [hash],
      )

      // Signature 2: [number]
      TestCommand(
        SetLastBlock(height),
        SetLastBlock,
        [height],
      )
    },
  )
})
