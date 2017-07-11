import { AddNode } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/AddNode', function() {
  it(
    'AddNode() should return a properly configured JSON-RPC request',
    function() {
      const host = '192.168.0.1:8570'

      // Signature 1: [string, 'add']
      TestCommand(
        AddNode(host, 'add'),
        AddNode,
        [host, 'add'],
      )

      // Signature 2: [string, 'remove']
      TestCommand(
        AddNode(host, 'remove'),
        AddNode,
        [host, 'remove'],
      )

      // Signature 3: [string, 'onetry']
      TestCommand(
        AddNode(host, 'onetry'),
        AddNode,
        [host, 'onetry'],
      )
    },
  )
})
