import { expect } from 'chai'
import * as Commands from '../../src/Commands'

describe('/Commands', function() {
  const commandList = [
    'AddMultiSigAddress',
    'AddNode',
    'AppendRawChange',
    'AppendRawData',
    'AppendRawExchange',
    'AppendRawTransaction',
    'BackupWallet',
    'ClearMemPool',
    'CombineUnspent',
    'CompleteRawExchange',
    'Create',
    'CreateFrom',
    'CreateKeyPairs',
    'CreateMultiSig',
    'CreateRawExchange',
    'CreateRawSendFrom',
    'CreateRawTransaction',
    'DecodeRawExchange',
    'DecodeRawTransaction',
    'DisableRawTransaction',
    'DumpPrivKey',
    'DumpWallet',
    'EncryptWallet',
    'GetAddedNodeInfo',
    'GetAddressBalances',
    'GetAddresses',
    'GetAddressTransaction',
    'GetAssetTransaction',
    'GetBlock',
    'GetBlockchainInfo',
    'GetBlockchainParams',
    'GetBlockHash',
    'GetInfo',
    'GetMemPoolInfo',
    'GetMultiBalances',
    'GetNetworkInfo',
    'GetNewAddress',
    'GetPeerInfo',
    'GetRawMemPool',
    'GetRawTransaction',
    'GetRuntimeParams',
    'GetStreamItem',
    'GetTotalBalances',
    'GetTxOut',
    'GetTxOutData',
    'GetWalletInfo',
    'GetWalletTransaction',
    'Grant',
    'GrantFrom',
    'GrantWithData',
    'GrantWithDataFrom',
    'Help',
    'ImportAddress',
    'ImportPrivKey',
    'ImportWallet',
    'Issue',
    'IssueFrom',
    'IssueMore',
    'IssueMoreFrom',
    'ListAddresses',
    'ListAddressTransactions',
    'ListAssets',
    'ListAssetTransactions',
    'ListBlocks',
    'ListLockUnspent',
    'ListPermissions',
    'ListStreamBlockItems',
    'ListStreamItems',
    'ListStreamKeyItems',
    'ListStreamKeys',
    'ListStreamPublisherItems',
    'ListStreamPublishers',
    'ListStreams',
    'ListUnspent',
    'ListWalletTransactions',
    'LockUnspent',
    'Pause',
    'Ping',
    'PrepareLockUnspent',
    'PrepareLockUnspentFrom',
    'Publish',
    'PublishFrom',
    'Resume',
    'Revoke',
    'RevokeFrom',
    'Send',
    'SendAsset',
    'SendAssetFrom',
    'SendFrom',
    'SendRawTransaction',
    'SendWithData',
    'SendWithDataFrom',
    'SetLastBlock',
    'SetRuntimeParam',
    'SignMessage',
    'SignRawTransaction',
    'Stop',
    'Subscribe',
    'Unsubscribe',
    'ValidateAddress',
    'VerifyMessage',
    'WalletLock',
    'WalletPassphrase',
    'WalletPassphraseChange',
  ]

  it(
    'should return a module with the correct shape',
    function() {
      for (const command of commandList) {
        expect(Commands).to.have.property(command).and.to.be.a('function')
      }
    },
  )

  for (const command of commandList) {
    require(`./${ command }`)
  }
})
