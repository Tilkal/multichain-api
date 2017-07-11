import { SendAsset } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/SendAsset', function() {
  it(
    'SendAsset() should return a properly configured JSON-RPC request',
    function() {
      const to = 'address'
      const asset = 'asset'
      const quantity = 10
      const nativeAmount = 10
      const comment = 'comment'
      const recipient = 'recipient'

      // Signature 1: [string, string, number]
      TestCommand(
        SendAsset(to, asset, quantity),
        SendAsset,
        [to, asset, quantity],
      )

      // Signature 2: [string, string, number, number]
      TestCommand(
        SendAsset(to, asset, quantity, nativeAmount),
        SendAsset,
        [to, asset, quantity, nativeAmount],
      )

      // Signature 3: [string, string, number, number, string]
      TestCommand(
        SendAsset(to, asset, quantity, nativeAmount, comment),
        SendAsset,
        [to, asset, quantity, nativeAmount, comment],
      )

      // Signature 4: [string, string, number, number, string, string]
      TestCommand(
        SendAsset(to, asset, quantity, nativeAmount, comment, recipient),
        SendAsset,
        [to, asset, quantity, nativeAmount, comment, recipient],
      )
    },
  )
})
