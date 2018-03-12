# MultiChain API

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://badge.fury.io/js/multichain-api.svg)](https://www.npmjs.com/package/multichain-api)
[![Build Status](https://travis-ci.org/Tilkal/multichain-api.svg?branch=master)](https://travis-ci.org/Tilkal/multichain-api)
[![Code Coverage](https://codecov.io/gh/Tilkal/multichain-api/branch/master/graph/badge.svg)](https://codecov.io/gh/Tilkal/multichain-api)

**MultiChain API** is an unofficial [MultiChain](http://www.multichain.com/) client for *Node.js* written in *TypeScript*.

> 💡 The `alpha` status only denotes that the unit tests are incomplete, but the client should be fully functional.

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
  username: 'multichainrpc'
  password: '...'
})

client(GetBlock(42))
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

*JavaScript* example:

```javascript
const { GetBlock } = require('multichain-api/Commands/GetBlock')
const { RpcClient } = require('multichain-api/RpcClient')

const client = RpcClient({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8570,
  username: 'multichainrpc'
  password: '...'
})

client(GetBlock(42))
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

## Resources

* [Wiki](https://github.com/Tilkal/multichain-api/wiki)
* [API Documentation](https://tilkal.github.io/multichain-api/)

## License

[MIT](LICENSE)
