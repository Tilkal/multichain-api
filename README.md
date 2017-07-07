# MultiChain API

[![Build Status](https://travis-ci.org/Tilkal/multichain-api.svg?branch=master)](https://travis-ci.org/Tilkal/multichain-api)
[![codecov](https://codecov.io/gh/Tilkal/multichain-api/branch/master/graph/badge.svg)](https://codecov.io/gh/Tilkal/multichain-api)

**MultiChain API** is an unofficial [MultiChain](http://www.multichain.com/) client for *Node.js* written in *TypeScript*.

## Features

* `Promise`-based functional API
* Optimized for serverless architecture

## Installation

```shell
npm install --save multichain-api
```

## Examples

*TypeScript* example:

```typescript
import { GetBlock } from 'multichain-api/Commands/GetBlock'
import { RpcClient } from 'multichain-api/RpcClient'

const client = RpcClient({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8570,
  user: 'multichainrpc'
  password: '...'
})

client(GetBlock(42))
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

*JavaScript* example:

```javascript
const GetBlock = require('multichain-api/Commands/GetBlock').GetBlock
const RpcClient = require('multichain-api/RpcClient').RpcClient

const client = RpcClient({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8570,
  user: 'multichainrpc'
  password: '...'
})

client(GetBlock(42))
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

## Resources

* [Website](https://tilkal.github.io/multichain-api/)
* [API Documentation](https://tilkal.github.io/multichain-api/docs/)

## License

[MIT](LICENSE)
