import { SendAssetFrom } from '../../src/Commands'
import { TestCommand } from '../test-helpers'

describe('/SendAssetFrom', function() {
  it(
    'SendAssetFrom() should return a properly configured JSON-RPC request',
    function() {
      const from = 'address1'
      const to = 'address2'
      const asset = 'asset'
      const quantity = 10
      const nativeAmount = 10
      const comment = 'comment'
      const recipient = 'recipient'

      // Signature 1: [string, string, string, number]
      TestCommand(
        SendAssetFrom(from, to, asset, quantity),
        SendAssetFrom,
        [from, to, asset, quantity],
      )

      // Signature 2: [string, string, string, number, number]
      TestCommand(
        SendAssetFrom(from, to, asset, quantity, nativeAmount),
        SendAssetFrom,
        [from, to, asset, quantity, nativeAmount],
      )

      // Signature 3: [string, string, string, number, number, string]
      TestCommand(
        SendAssetFrom(from, to, asset, quantity, nativeAmount, comment),
        SendAssetFrom,
        [from, to, asset, quantity, nativeAmount, comment],
      )

      // Signature 4: [string, string, string, number, number, string, string]
      TestCommand(
        SendAssetFrom(from, to, asset, quantity, nativeAmount, comment, recipient),
        SendAssetFrom,
        [from, to, asset, quantity, nativeAmount, comment, recipient],
      )
    },
  )
})
