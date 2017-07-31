import * as http from 'http'
import * as https from 'https'
import * as Cmd from './Commands'
import { MultiChainError } from './MultiChainError'
import { RpcError } from './RpcError'
import { RpcRequest } from './RpcRequest'
import { RpcResponse } from './RpcResponse'

/**
 * Connection settings.
 */
export interface ConnectionSettings {
  /**
   * Protocol to use for the connection.
   * @default 'http'
   */
  readonly protocol?: 'http' | 'https'

  /**
   * IP address or hostname of the node to connect to.
   * @default 'localhost'
   */
  readonly host?: string

  /**
   * Port number of the node to connect to.
   * @default 8570
   */
  readonly port?: number

  /**
   * Username to use for authentication.
   * @default 'multichainrpc'
   */
  readonly username?: string

  /**
   * Password to use for authentication.
   */
  readonly password: string
}

/**
 * Call signatures supported by [[RpcClient]] instances.
 */
export interface RpcClientInstance {
  /**
   * Sends a [[AddMultiSigAddress]] command to the node.
   * @param request JSON-RPC request for the *addmultisigaddress* command.
   * @returns A promise of the JSON-RPC response to the *addmultisigaddress* command.
   */
  (request: Cmd.AddMultiSigAddressRequest): Promise<Cmd.AddMultiSigAddressResponse>

  /**
   * Sends a [[AddNode]] command to the node.
   * @param request JSON-RPC request for the *addnode* command.
   * @returns A promise of the JSON-RPC response to the *addnode* command.
   */
  (request: Cmd.AddNodeRequest): Promise<Cmd.AddNodeResponse>

  /**
   * Sends a [[AppendRawChange]] command to the node.
   * @param request JSON-RPC request for the *appendrawchange* command.
   * @returns A promise of the JSON-RPC response to the *appendrawchange* command.
   */
  (request: Cmd.AppendRawChangeRequest): Promise<Cmd.AppendRawChangeResponse>

  /**
   * Sends a [[AppendRawData]] command to the node.
   * @param request JSON-RPC request for the *appendrawdata* command.
   * @returns A promise of the JSON-RPC response to the *appendrawdata* command.
   */
  (request: Cmd.AppendRawDataRequest): Promise<Cmd.AppendRawDataResponse>

  /**
   * Sends a [[AppendRawExchange]] command to the node.
   * @param request JSON-RPC request for the *appendrawexchange* command.
   * @returns A promise of the JSON-RPC response to the *appendrawexchange* command.
   */
  (request: Cmd.AppendRawExchangeRequest): Promise<Cmd.AppendRawExchangeResponse>

  /**
   * Sends a [[AppendRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *appendrawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *appendrawtransaction* command.
   */
  (request: Cmd.AppendRawTransactionRequest): Promise<Cmd.AppendRawTransactionResponse>

  /**
   * Sends a [[BackupWallet]] command to the node.
   * @param request JSON-RPC request for the *backupwallet* command.
   * @returns A promise of the JSON-RPC response to the *backupwallet* command.
   */
  (request: Cmd.BackupWalletRequest): Promise<Cmd.BackupWalletResponse>

  /**
   * Sends a [[ClearMemPool]] command to the node.
   * @param request JSON-RPC request for the *clearmempool* command.
   * @returns A promise of the JSON-RPC response to the *clearmempool* command.
   */
  (request: Cmd.ClearMemPoolRequest): Promise<Cmd.ClearMemPoolResponse>

  /**
   * Sends a [[CombineUnspent]] command to the node.
   * @param request JSON-RPC request for the *combineunspent* command.
   * @returns A promise of the JSON-RPC response to the *combineunspent* command.
   */
  (request: Cmd.CombineUnspentRequest): Promise<Cmd.CombineUnspentResponse>

  /**
   * Sends a [[CompleteRawExchange]] command to the node.
   * @param request JSON-RPC request for the *completerawexchange* command.
   * @returns A promise of the JSON-RPC response to the *completerawexchange* command.
   */
  (request: Cmd.CompleteRawExchangeRequest): Promise<Cmd.CompleteRawExchangeResponse>

  /**
   * Sends a [[Create]] command to the node.
   * @param request JSON-RPC request for the *create* command.
   * @returns A promise of the JSON-RPC response to the *create* command.
   */
  (request: Cmd.CreateRequest): Promise<Cmd.CreateResponse>

  /**
   * Sends a [[CreateFrom]] command to the node.
   * @param request JSON-RPC request for the *createfrom* command.
   * @returns A promise of the JSON-RPC response to the *createfrom* command.
   */
  (request: Cmd.CreateFromRequest): Promise<Cmd.CreateFromResponse>

  /**
   * Sends a [[CreateKeyPairs]] command to the node.
   * @param request JSON-RPC request for the *createkeypairs* command.
   * @returns A promise of the JSON-RPC response to the *createkeypairs* command.
   */
  (request: Cmd.CreateKeyPairsRequest): Promise<Cmd.CreateKeyPairsResponse>

  /**
   * Sends a [[CreateMultiSig]] command to the node.
   * @param request JSON-RPC request for the *createmultisig* command.
   * @returns A promise of the JSON-RPC response to the *createmultisig* command.
   */
  (request: Cmd.CreateMultiSigRequest): Promise<Cmd.CreateMultiSigResponse>

  /**
   * Sends a [[CreateRawExchange]] command to the node.
   * @param request JSON-RPC request for the *createrawexchange* command.
   * @returns A promise of the JSON-RPC response to the *createrawexchange* command.
   */
  (request: Cmd.CreateRawExchangeRequest): Promise<Cmd.CreateRawExchangeResponse>

  /**
   * Sends a [[CreateRawSendFrom]] command to the node.
   * @param request JSON-RPC request for the *createrawsendfrom* command.
   * @returns A promise of the JSON-RPC response to the *createrawsendfrom* command.
   */
  (request: Cmd.CreateRawSendFromRequest): Promise<Cmd.CreateRawSendFromResponse>

  /**
   * Sends a [[CreateRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *createrawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *createrawtransaction* command.
   */
  (request: Cmd.CreateRawTransactionRequest): Promise<Cmd.CreateRawTransactionResponse>

  /**
   * Sends a [[DecodeRawExchange]] command to the node.
   * @param request JSON-RPC request for the *decoderawexchange* command.
   * @returns A promise of the JSON-RPC response to the *decoderawexchange* command.
   */
  (request: Cmd.DecodeRawExchangeRequest): Promise<Cmd.DecodeRawExchangeResponse>

  /**
   * Sends a [[DecodeRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *decoderawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *decoderawtransaction* command.
   */
  (request: Cmd.DecodeRawTransactionRequest): Promise<Cmd.DecodeRawTransactionResponse>

  /**
   * Sends a [[DisableRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *disablerawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *disablerawtransaction* command.
   */
  (request: Cmd.DisableRawTransactionRequest): Promise<Cmd.DisableRawTransactionResponse>

  /**
   * Sends a [[DumpPrivKey]] command to the node.
   * @param request JSON-RPC request for the *dumpprivkey* command.
   * @returns A promise of the JSON-RPC response to the *dumpprivkey* command.
   */
  (request: Cmd.DumpPrivKeyRequest): Promise<Cmd.DumpPrivKeyResponse>

  /**
   * Sends a [[DumpWallet]] command to the node.
   * @param request JSON-RPC request for the *dumpwallet* command.
   * @returns A promise of the JSON-RPC response to the *dumpwallet* command.
   */
  (request: Cmd.DumpWalletRequest): Promise<Cmd.DumpWalletResponse>

  /**
   * Sends a [[EncryptWallet]] command to the node.
   * @param request JSON-RPC request for the *encryptwallet* command.
   * @returns A promise of the JSON-RPC response to the *encryptwallet* command.
   */
  (request: Cmd.EncryptWalletRequest): Promise<Cmd.EncryptWalletResponse>

  /**
   * Sends a [[GetAddedNodeInfo]] command to the node.
   * @param request JSON-RPC request for the *getaddednodeinfo* command.
   * @returns A promise of the JSON-RPC response to the *getaddednodeinfo* command.
   */
  (request: Cmd.GetAddedNodeInfoRequest): Promise<Cmd.GetAddedNodeInfoResponse>

  /**
   * Sends a [[GetAddressBalances]] command to the node.
   * @param request JSON-RPC request for the *getaddressbalances* command.
   * @returns A promise of the JSON-RPC response to the *getaddressbalances* command.
   */
  (request: Cmd.GetAddressBalancesRequest): Promise<Cmd.GetAddressBalancesResponse>

  /**
   * Sends a [[GetAddressTransaction]] command to the node.
   * @param request JSON-RPC request for the *getaddresstransaction* command.
   * @returns A promise of the JSON-RPC response to the *getaddresstransaction* command.
   */
  (request: Cmd.GetAddressTransactionRequest): Promise<Cmd.GetAddressTransactionResponse>

  /**
   * Sends a [[GetAddresses]] command to the node.
   * @param request JSON-RPC request for the *getaddresses* command.
   * @returns A promise of the JSON-RPC response to the *getaddresses* command.
   */
  (request: Cmd.GetAddressesRequest): Promise<Cmd.GetAddressesResponse>

  /**
   * Sends a [[GetAssetTransaction]] command to the node.
   * @param request JSON-RPC request for the *getassettransaction* command.
   * @returns A promise of the JSON-RPC response to the *getassettransaction* command.
   */
  (request: Cmd.GetAssetTransactionRequest): Promise<Cmd.GetAssetTransactionResponse>

  /**
   * Sends a [[GetBlock]] command to the node.
   * @param request JSON-RPC request for the *getblock* command.
   * @returns A promise of the JSON-RPC response to the *getblock* command.
   */
  (request: Cmd.GetBlockRequest): Promise<Cmd.GetBlockResponse>

  /**
   * Sends a [[GetBlockHash]] command to the node.
   * @param request JSON-RPC request for the *getblockhash* command.
   * @returns A promise of the JSON-RPC response to the *getblockhash* command.
   */
  (request: Cmd.GetBlockHashRequest): Promise<Cmd.GetBlockHashResponse>

  /**
   * Sends a [[GetBlockchainInfo]] command to the node.
   * @param request JSON-RPC request for the *getblockchaininfo* command.
   * @returns A promise of the JSON-RPC response to the *getblockchaininfo* command.
   */
  (request: Cmd.GetBlockchainInfoRequest): Promise<Cmd.GetBlockchainInfoResponse>

  /**
   * Sends a [[GetBlockchainParams]] command to the node.
   * @param request JSON-RPC request for the *getblockchainparams* command.
   * @returns A promise of the JSON-RPC response to the *getblockchainparams* command.
   */
  (request: Cmd.GetBlockchainParamsRequest): Promise<Cmd.GetBlockchainParamsResponse>

  /**
   * Sends a [[GetInfo]] command to the node.
   * @param request JSON-RPC request for the *getinfo* command.
   * @returns A promise of the JSON-RPC response to the *getinfo* command.
   */
  (request: Cmd.GetInfoRequest): Promise<Cmd.GetInfoResponse>

  /**
   * Sends a [[GetMemPoolInfo]] command to the node.
   * @param request JSON-RPC request for the *getmempoolinfo* command.
   * @returns A promise of the JSON-RPC response to the *getmempoolinfo* command.
   */
  (request: Cmd.GetMemPoolInfoRequest): Promise<Cmd.GetMemPoolInfoResponse>

  /**
   * Sends a [[GetMultiBalances]] command to the node.
   * @param request JSON-RPC request for the *getmultibalances* command.
   * @returns A promise of the JSON-RPC response to the *getmultibalances* command.
   */
  (request: Cmd.GetMultiBalancesRequest): Promise<Cmd.GetMultiBalancesResponse>

  /**
   * Sends a [[GetNetworkInfo]] command to the node.
   * @param request JSON-RPC request for the *getnetworkinfo* command.
   * @returns A promise of the JSON-RPC response to the *getnetworkinfo* command.
   */
  (request: Cmd.GetNetworkInfoRequest): Promise<Cmd.GetNetworkInfoResponse>

  /**
   * Sends a [[GetNewAddress]] command to the node.
   * @param request JSON-RPC request for the *getnewaddress* command.
   * @returns A promise of the JSON-RPC response to the *getnewaddress* command.
   */
  (request: Cmd.GetNewAddressRequest): Promise<Cmd.GetNewAddressResponse>

  /**
   * Sends a [[GetPeerInfo]] command to the node.
   * @param request JSON-RPC request for the *getpeerinfo* command.
   * @returns A promise of the JSON-RPC response to the *getpeerinfo* command.
   */
  (request: Cmd.GetPeerInfoRequest): Promise<Cmd.GetPeerInfoResponse>

  /**
   * Sends a [[GetRawMemPool]] command to the node.
   * @param request JSON-RPC request for the *getrawmempool* command.
   * @returns A promise of the JSON-RPC response to the *getrawmempool* command.
   */
  (request: Cmd.GetRawMemPoolRequest): Promise<Cmd.GetRawMemPoolResponse>

  /**
   * Sends a [[GetRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *getrawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *getrawtransaction* command.
   */
  (request: Cmd.GetRawTransactionRequest): Promise<Cmd.GetRawTransactionResponse>

  /**
   * Sends a [[GetRuntimeParams]] command to the node.
   * @param request JSON-RPC request for the *getruntimeparams* command.
   * @returns A promise of the JSON-RPC response to the *getruntimeparams* command.
   */
  (request: Cmd.GetRuntimeParamsRequest): Promise<Cmd.GetRuntimeParamsResponse>

  /**
   * Sends a [[GetStreamItem]] command to the node.
   * @param request JSON-RPC request for the *getstreamitem* command.
   * @returns A promise of the JSON-RPC response to the *getstreamitem* command.
   */
  (request: Cmd.GetStreamItemRequest): Promise<Cmd.GetStreamItemResponse>

  /**
   * Sends a [[GetTotalBalances]] command to the node.
   * @param request JSON-RPC request for the *gettotalbalances* command.
   * @returns A promise of the JSON-RPC response to the *gettotalbalances* command.
   */
  (request: Cmd.GetTotalBalancesRequest): Promise<Cmd.GetTotalBalancesResponse>

  /**
   * Sends a [[GetTxOut]] command to the node.
   * @param request JSON-RPC request for the *gettxout* command.
   * @returns A promise of the JSON-RPC response to the *gettxout* command.
   */
  (request: Cmd.GetTxOutRequest): Promise<Cmd.GetTxOutResponse>

  /**
   * Sends a [[GetTxOutData]] command to the node.
   * @param request JSON-RPC request for the *gettxoutdata* command.
   * @returns A promise of the JSON-RPC response to the *gettxoutdata* command.
   */
  (request: Cmd.GetTxOutDataRequest): Promise<Cmd.GetTxOutDataResponse>

  /**
   * Sends a [[GetWalletInfo]] command to the node.
   * @param request JSON-RPC request for the *getwalletinfo* command.
   * @returns A promise of the JSON-RPC response to the *getwalletinfo* command.
   */
  (request: Cmd.GetWalletInfoRequest): Promise<Cmd.GetWalletInfoResponse>

  /**
   * Sends a [[GetWalletTransaction]] command to the node.
   * @param request JSON-RPC request for the *getwallettransaction* command.
   * @returns A promise of the JSON-RPC response to the *getwallettransaction* command.
   */
  (request: Cmd.GetWalletTransactionRequest): Promise<Cmd.GetWalletTransactionResponse>

  /**
   * Sends a [[Grant]] command to the node.
   * @param request JSON-RPC request for the *grant* command.
   * @returns A promise of the JSON-RPC response to the *grant* command.
   */
  (request: Cmd.GrantRequest): Promise<Cmd.GrantResponse>

  /**
   * Sends a [[GrantFrom]] command to the node.
   * @param request JSON-RPC request for the *grantfrom* command.
   * @returns A promise of the JSON-RPC response to the *grantfrom* command.
   */
  (request: Cmd.GrantFromRequest): Promise<Cmd.GrantFromResponse>

  /**
   * Sends a [[GrantWithData]] command to the node.
   * @param request JSON-RPC request for the *grantwithdata* command.
   * @returns A promise of the JSON-RPC response to the *grantwithdata* command.
   */
  (request: Cmd.GrantWithDataRequest): Promise<Cmd.GrantWithDataResponse>

  /**
   * Sends a [[GrantWithDataFrom]] command to the node.
   * @param request JSON-RPC request for the *grantwithdatafrom* command.
   * @returns A promise of the JSON-RPC response to the *grantwithdatafrom* command.
   */
  (request: Cmd.GrantWithDataFromRequest): Promise<Cmd.GrantWithDataFromResponse>

  /**
   * Sends a [[Help]] command to the node.
   * @param request JSON-RPC request for the *help* command.
   * @returns A promise of the JSON-RPC response to the *help* command.
   */
  (request: Cmd.HelpRequest): Promise<Cmd.HelpResponse>

  /**
   * Sends a [[ImportAddress]] command to the node.
   * @param request JSON-RPC request for the *importaddress* command.
   * @returns A promise of the JSON-RPC response to the *importaddress* command.
   */
  (request: Cmd.ImportAddressRequest): Promise<Cmd.ImportAddressResponse>

  /**
   * Sends a [[ImportPrivKey]] command to the node.
   * @param request JSON-RPC request for the *importprivkey* command.
   * @returns A promise of the JSON-RPC response to the *importprivkey* command.
   */
  (request: Cmd.ImportPrivKeyRequest): Promise<Cmd.ImportPrivKeyResponse>

  /**
   * Sends a [[ImportWallet]] command to the node.
   * @param request JSON-RPC request for the *importwallet* command.
   * @returns A promise of the JSON-RPC response to the *importwallet* command.
   */
  (request: Cmd.ImportWalletRequest): Promise<Cmd.ImportWalletResponse>

  /**
   * Sends a [[Issue]] command to the node.
   * @param request JSON-RPC request for the *issue* command.
   * @returns A promise of the JSON-RPC response to the *issue* command.
   */
  (request: Cmd.IssueRequest): Promise<Cmd.IssueResponse>

  /**
   * Sends a [[IssueFrom]] command to the node.
   * @param request JSON-RPC request for the *issuefrom* command.
   * @returns A promise of the JSON-RPC response to the *issuefrom* command.
   */
  (request: Cmd.IssueFromRequest): Promise<Cmd.IssueFromResponse>

  /**
   * Sends a [[IssueMore]] command to the node.
   * @param request JSON-RPC request for the *issuemore* command.
   * @returns A promise of the JSON-RPC response to the *issuemore* command.
   */
  (request: Cmd.IssueMoreRequest): Promise<Cmd.IssueMoreResponse>

  /**
   * Sends a [[IssueMoreFrom]] command to the node.
   * @param request JSON-RPC request for the *issuemorefrom* command.
   * @returns A promise of the JSON-RPC response to the *issuemorefrom* command.
   */
  (request: Cmd.IssueMoreFromRequest): Promise<Cmd.IssueMoreFromResponse>

  /**
   * Sends a [[ListAddressTransactions]] command to the node.
   * @param request JSON-RPC request for the *listaddresstransactions* command.
   * @returns A promise of the JSON-RPC response to the *listaddresstransactions* command.
   */
  (request: Cmd.ListAddressTransactionsRequest): Promise<Cmd.ListAddressTransactionsResponse>

  /**
   * Sends a [[ListAddresses]] command to the node.
   * @param request JSON-RPC request for the *listaddresses* command.
   * @returns A promise of the JSON-RPC response to the *listaddresses* command.
   */
  (request: Cmd.ListAddressesRequest): Promise<Cmd.ListAddressesResponse>

  /**
   * Sends a [[ListAssetTransactions]] command to the node.
   * @param request JSON-RPC request for the *listassettransactions* command.
   * @returns A promise of the JSON-RPC response to the *listassettransactions* command.
   */
  (request: Cmd.ListAssetTransactionsRequest): Promise<Cmd.ListAssetTransactionsResponse>

  /**
   * Sends a [[ListAssets]] command to the node.
   * @param request JSON-RPC request for the *listassets* command.
   * @returns A promise of the JSON-RPC response to the *listassets* command.
   */
  (request: Cmd.ListAssetsRequest): Promise<Cmd.ListAssetsResponse>

  /**
   * Sends a [[ListBlocks]] command to the node.
   * @param request JSON-RPC request for the *listblocks* command.
   * @returns A promise of the JSON-RPC response to the *listblocks* command.
   */
  (request: Cmd.ListBlocksRequest): Promise<Cmd.ListBlocksResponse>

  /**
   * Sends a [[ListLockUnspent]] command to the node.
   * @param request JSON-RPC request for the *listlockunspent* command.
   * @returns A promise of the JSON-RPC response to the *listlockunspent* command.
   */
  (request: Cmd.ListLockUnspentRequest): Promise<Cmd.ListLockUnspentResponse>

  /**
   * Sends a [[ListPermissions]] command to the node.
   * @param request JSON-RPC request for the *listpermissions* command.
   * @returns A promise of the JSON-RPC response to the *listpermissions* command.
   */
  (request: Cmd.ListPermissionsRequest): Promise<Cmd.ListPermissionsResponse>

  /**
   * Sends a [[ListStreamBlockItems]] command to the node.
   * @param request JSON-RPC request for the *liststreamblockitems* command.
   * @returns A promise of the JSON-RPC response to the *liststreamblockitems* command.
   */
  (request: Cmd.ListStreamBlockItemsRequest): Promise<Cmd.ListStreamBlockItemsResponse>

  /**
   * Sends a [[ListStreamItems]] command to the node.
   * @param request JSON-RPC request for the *liststreamitems* command.
   * @returns A promise of the JSON-RPC response to the *liststreamitems* command.
   */
  (request: Cmd.ListStreamItemsRequest): Promise<Cmd.ListStreamItemsResponse>

  /**
   * Sends a [[ListStreamKeyItems]] command to the node.
   * @param request JSON-RPC request for the *liststreamkeyitems* command.
   * @returns A promise of the JSON-RPC response to the *liststreamkeyitems* command.
   */
  (request: Cmd.ListStreamKeyItemsRequest): Promise<Cmd.ListStreamKeyItemsResponse>

  /**
   * Sends a [[ListStreamKeys]] command to the node.
   * @param request JSON-RPC request for the *liststreamkeys* command.
   * @returns A promise of the JSON-RPC response to the *liststreamkeys* command.
   */
  (request: Cmd.ListStreamKeysRequest): Promise<Cmd.ListStreamKeysResponse>

  /**
   * Sends a [[ListStreamPublisherItems]] command to the node.
   * @param request JSON-RPC request for the *liststreampublisheritems* command.
   * @returns A promise of the JSON-RPC response to the *liststreampublisheritems* command.
   */
  (request: Cmd.ListStreamPublisherItemsRequest): Promise<Cmd.ListStreamPublisherItemsResponse>

  /**
   * Sends a [[ListStreamPublishers]] command to the node.
   * @param request JSON-RPC request for the *liststreampublishers* command.
   * @returns A promise of the JSON-RPC response to the *liststreampublishers* command.
   */
  (request: Cmd.ListStreamPublishersRequest): Promise<Cmd.ListStreamPublishersResponse>

  /**
   * Sends a [[ListStreams]] command to the node.
   * @param request JSON-RPC request for the *liststreams* command.
   * @returns A promise of the JSON-RPC response to the *liststreams* command.
   */
  (request: Cmd.ListStreamsRequest): Promise<Cmd.ListStreamsResponse>

  /**
   * Sends a [[ListUnspent]] command to the node.
   * @param request JSON-RPC request for the *listunspent* command.
   * @returns A promise of the JSON-RPC response to the *listunspent* command.
   */
  (request: Cmd.ListUnspentRequest): Promise<Cmd.ListUnspentResponse>

  /**
   * Sends a [[ListWalletTransactions]] command to the node.
   * @param request JSON-RPC request for the *listwallettransactions* command.
   * @returns A promise of the JSON-RPC response to the *listwallettransactions* command.
   */
  (request: Cmd.ListWalletTransactionsRequest): Promise<Cmd.ListWalletTransactionsResponse>

  /**
   * Sends a [[LockUnspent]] command to the node.
   * @param request JSON-RPC request for the *lockunspent* command.
   * @returns A promise of the JSON-RPC response to the *lockunspent* command.
   */
  (request: Cmd.LockUnspentRequest): Promise<Cmd.LockUnspentResponse>

  /**
   * Sends a [[Pause]] command to the node.
   * @param request JSON-RPC request for the *pause* command.
   * @returns A promise of the JSON-RPC response to the *pause* command.
   */
  (request: Cmd.PauseRequest): Promise<Cmd.PauseResponse>

  /**
   * Sends a [[Ping]] command to the node.
   * @param request JSON-RPC request for the *ping* command.
   * @returns A promise of the JSON-RPC response to the *ping* command.
   */
  (request: Cmd.PingRequest): Promise<Cmd.PingResponse>

  /**
   * Sends a [[PrepareLockUnspent]] command to the node.
   * @param request JSON-RPC request for the *preparelockunspent* command.
   * @returns A promise of the JSON-RPC response to the *preparelockunspent* command.
   */
  (request: Cmd.PrepareLockUnspentRequest): Promise<Cmd.PrepareLockUnspentResponse>

  /**
   * Sends a [[PrepareLockUnspentFrom]] command to the node.
   * @param request JSON-RPC request for the *preparelockunspentfrom* command.
   * @returns A promise of the JSON-RPC response to the *preparelockunspentfrom* command.
   */
  (request: Cmd.PrepareLockUnspentFromRequest): Promise<Cmd.PrepareLockUnspentFromResponse>

  /**
   * Sends a [[Publish]] command to the node.
   * @param request JSON-RPC request for the *publish* command.
   * @returns A promise of the JSON-RPC response to the *publish* command.
   */
  (request: Cmd.PublishRequest): Promise<Cmd.PublishResponse>

  /**
   * Sends a [[PublishFrom]] command to the node.
   * @param request JSON-RPC request for the *publishfrom* command.
   * @returns A promise of the JSON-RPC response to the *publishfrom* command.
   */
  (request: Cmd.PublishFromRequest): Promise<Cmd.PublishFromResponse>

  /**
   * Sends a [[Resume]] command to the node.
   * @param request JSON-RPC request for the *resume* command.
   * @returns A promise of the JSON-RPC response to the *resume* command.
   */
  (request: Cmd.ResumeRequest): Promise<Cmd.ResumeResponse>

  /**
   * Sends a [[Revoke]] command to the node.
   * @param request JSON-RPC request for the *revoke* command.
   * @returns A promise of the JSON-RPC response to the *revoke* command.
   */
  (request: Cmd.RevokeRequest): Promise<Cmd.RevokeResponse>

  /**
   * Sends a [[RevokeFrom]] command to the node.
   * @param request JSON-RPC request for the *revokefrom* command.
   * @returns A promise of the JSON-RPC response to the *revokefrom* command.
   */
  (request: Cmd.RevokeFromRequest): Promise<Cmd.RevokeFromResponse>

  /**
   * Sends a [[Send]] command to the node.
   * @param request JSON-RPC request for the *send* command.
   * @returns A promise of the JSON-RPC response to the *send* command.
   */
  (request: Cmd.SendRequest): Promise<Cmd.SendResponse>

  /**
   * Sends a [[SendAsset]] command to the node.
   * @param request JSON-RPC request for the *sendasset* command.
   * @returns A promise of the JSON-RPC response to the *sendasset* command.
   */
  (request: Cmd.SendAssetRequest): Promise<Cmd.SendAssetResponse>

  /**
   * Sends a [[SendAssetFrom]] command to the node.
   * @param request JSON-RPC request for the *sendassetfrom* command.
   * @returns A promise of the JSON-RPC response to the *sendassetfrom* command.
   */
  (request: Cmd.SendAssetFromRequest): Promise<Cmd.SendAssetFromResponse>

  /**
   * Sends a [[SendFrom]] command to the node.
   * @param request JSON-RPC request for the *sendfrom* command.
   * @returns A promise of the JSON-RPC response to the *sendfrom* command.
   */
  (request: Cmd.SendFromRequest): Promise<Cmd.SendFromResponse>

  /**
   * Sends a [[SendRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *sendrawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *sendrawtransaction* command.
   */
  (request: Cmd.SendRawTransactionRequest): Promise<Cmd.SendRawTransactionResponse>

  /**
   * Sends a [[SendWithData]] command to the node.
   * @param request JSON-RPC request for the *sendwithdata* command.
   * @returns A promise of the JSON-RPC response to the *sendwithdata* command.
   */
  (request: Cmd.SendWithDataRequest): Promise<Cmd.SendWithDataResponse>

  /**
   * Sends a [[SendWithDataFrom]] command to the node.
   * @param request JSON-RPC request for the *sendwithdatafrom* command.
   * @returns A promise of the JSON-RPC response to the *sendwithdatafrom* command.
   */
  (request: Cmd.SendWithDataFromRequest): Promise<Cmd.SendWithDataFromResponse>

  /**
   * Sends a [[SetLastBlock]] command to the node.
   * @param request JSON-RPC request for the *setlastblock* command.
   * @returns A promise of the JSON-RPC response to the *setlastblock* command.
   */
  (request: Cmd.SetLastBlockRequest): Promise<Cmd.SetLastBlockResponse>

  /**
   * Sends a [[SetRuntimeParam]] command to the node.
   * @param request JSON-RPC request for the *setruntimeparam* command.
   * @returns A promise of the JSON-RPC response to the *setruntimeparam* command.
   */
  (request: Cmd.SetRuntimeParamRequest): Promise<Cmd.SetRuntimeParamResponse>

  /**
   * Sends a [[SignMessage]] command to the node.
   * @param request JSON-RPC request for the *signmessage* command.
   * @returns A promise of the JSON-RPC response to the *signmessage* command.
   */
  (request: Cmd.SignMessageRequest): Promise<Cmd.SignMessageResponse>

  /**
   * Sends a [[SignRawTransaction]] command to the node.
   * @param request JSON-RPC request for the *signrawtransaction* command.
   * @returns A promise of the JSON-RPC response to the *signrawtransaction* command.
   */
  (request: Cmd.SignRawTransactionRequest): Promise<Cmd.SignRawTransactionResponse>

  /**
   * Sends a [[Stop]] command to the node.
   * @param request JSON-RPC request for the *stop* command.
   * @returns A promise of the JSON-RPC response to the *stop* command.
   */
  (request: Cmd.StopRequest): Promise<Cmd.StopResponse>

  /**
   * Sends a [[Subscribe]] command to the node.
   * @param request JSON-RPC request for the *subscribe* command.
   * @returns A promise of the JSON-RPC response to the *subscribe* command.
   */
  (request: Cmd.SubscribeRequest): Promise<Cmd.SubscribeResponse>

  /**
   * Sends a [[Unsubscribe]] command to the node.
   * @param request JSON-RPC request for the *unsubscribe* command.
   * @returns A promise of the JSON-RPC response to the *unsubscribe* command.
   */
  (request: Cmd.UnsubscribeRequest): Promise<Cmd.UnsubscribeResponse>

  /**
   * Sends a [[ValidateAddress]] command to the node.
   * @param request JSON-RPC request for the *validateaddress* command.
   * @returns A promise of the JSON-RPC response to the *validateaddress* command.
   */
  (request: Cmd.ValidateAddressRequest): Promise<Cmd.ValidateAddressResponse>

  /**
   * Sends a [[VerifyMessage]] command to the node.
   * @param request JSON-RPC request for the *verifymessage* command.
   * @returns A promise of the JSON-RPC response to the *verifymessage* command.
   */
  (request: Cmd.VerifyMessageRequest): Promise<Cmd.VerifyMessageResponse>

  /**
   * Sends a [[WalletLock]] command to the node.
   * @param request JSON-RPC request for the *walletlock* command.
   * @returns A promise of the JSON-RPC response to the *walletlock* command.
   */
  (request: Cmd.WalletLockRequest): Promise<Cmd.WalletLockResponse>

  /**
   * Sends a [[WalletPassphrase]] command to the node.
   * @param request JSON-RPC request for the *walletpassphrase* command.
   * @returns A promise of the JSON-RPC response to the *walletpassphrase* command.
   */
  (request: Cmd.WalletPassphraseRequest): Promise<Cmd.WalletPassphraseResponse>

  /**
   * Sends a [[WalletPassphraseChange]] command to the node.
   * @param request JSON-RPC request for the *walletpassphrasechange* command.
   * @returns A promise of the JSON-RPC response to the *walletpassphrasechange* command.
   */
  (request: Cmd.WalletPassphraseChangeRequest): Promise<Cmd.WalletPassphraseChangeResponse>
}

/**
 * Creates a JSON-RPC client to send commands to MultiChain.
 * @param settings Connection settings.
 * @returns A JSON-RPC client.
 */
export function RpcClient(settings: ConnectionSettings): RpcClientInstance {
  const options: http.RequestOptions = {
    protocol: `${ settings.protocol || 'http' }:`,
    host: settings.host || 'localhost',
    port: settings.port || 8570,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    auth: `${ settings.username || 'multichainrpc' }:${ settings.password }`,
  }

  const SendRequest = options.protocol === 'http:' ? http.request : https.request

  return (request: RpcRequest) => {
    return new Promise<RpcResponse>((resolve, reject) => {
      function HandleMessage(message: http.IncomingMessage) {
        let body = ''

        message
          .setEncoding('utf8')
          .on('data', chunk => body += chunk)
          .on('error', reject)
          .on('end', () => HandleResponse(message, body))
      }

      function HandleResponse(message: http.IncomingMessage, body: string) {
        let response: RpcResponse

        try {
          response = JSON.parse(body)
        } catch (error) {
          reject(new RpcError(Number(message.statusCode), String(message.statusMessage), message.headers, body))
          return
        }

        if (response.error !== null) {
          reject(new MultiChainError(response))
          return
        }

        resolve(response)
      }

      SendRequest(options, HandleMessage)
        .on('error', reject)
        .end(JSON.stringify(request))
    })
  }
}
