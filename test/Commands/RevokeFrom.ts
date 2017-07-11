import { RevokeFrom } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/RevokeFrom', function() {
  it(
    'RevokeFrom() should return a properly configured JSON-RPC request',
    function() {
      const from = 'address1'
      const to = 'address2'
      const permissions = 'connect,send,receive,issue,mine,admin,activate'
      const quantity = 10
      const nativeAmount = 10
      const comment = 'comment'
      const recipient = 'recipient'

      // Signature 1: [string, string, string, number]
      TestCommand(
        RevokeFrom(from, to, permissions, quantity),
        RevokeFrom,
        [from, to, permissions, quantity],
      )

      // Signature 2: [string, string, string, number, number]
      TestCommand(
        RevokeFrom(from, to, permissions, quantity, nativeAmount),
        RevokeFrom,
        [from, to, permissions, quantity, nativeAmount],
      )

      // Signature 3: [string, string, string, number, number, string]
      TestCommand(
        RevokeFrom(from, to, permissions, quantity, nativeAmount, comment),
        RevokeFrom,
        [from, to, permissions, quantity, nativeAmount, comment],
      )

      // Signature 4: [string, string, string, number, number, string, string]
      TestCommand(
        RevokeFrom(from, to, permissions, quantity, nativeAmount, comment, recipient),
        RevokeFrom,
        [from, to, permissions, quantity, nativeAmount, comment, recipient],
      )
    },
  )
})
