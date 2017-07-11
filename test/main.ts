import { expect } from 'chai'
import * as Commands from '../src/Commands'
import * as main from '../src/main'
import { RpcClient } from '../src/RpcClient'
import { RpcError } from '../src/RpcError'

describe('/main', function() {
  it(
    'should return a module with the correct shape',
    function() {
      expect(main).to.have.property('Commands', Commands)
      expect(main).to.have.property('RpcClient', RpcClient)
      expect(main).to.have.property('RpcError', RpcError)
    },
  )
})
