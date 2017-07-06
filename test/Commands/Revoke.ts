import { Revoke } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/Revoke()', function() {
  it(
    'should return a properly configured JSON-RPC request for the revoke API command',
    function() {
      const to = 'address2'
      const permissions = 'connect,send,receive,issue,mine,admin,activate'
      const quantity = 10
      const nativeAmount = 10
      const comment = 'comment'
      const recipient = 'recipient'

      // Signature 1: [string, string, number]
      TestCommand(
        Revoke(to, permissions, quantity),
        Revoke,
        [to, permissions, quantity],
      )

      // Signature 2: [string, string, number, number]
      TestCommand(
        Revoke(to, permissions, quantity, nativeAmount),
        Revoke,
        [to, permissions, quantity, nativeAmount],
      )

      // Signature 3: [string, string, number, number, string]
      TestCommand(
        Revoke(to, permissions, quantity, nativeAmount, comment),
        Revoke,
        [to, permissions, quantity, nativeAmount, comment],
      )

      // Signature 4: [string, string, number, number, string, string]
      TestCommand(
        Revoke(to, permissions, quantity, nativeAmount, comment, recipient),
        Revoke,
        [to, permissions, quantity, nativeAmount, comment, recipient],
      )
    },
  )
})
