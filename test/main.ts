import { expect } from 'chai'
import * as main from '../src/main'

describe('/main', function() {
  it(
    'should return a module with the correct shape',
    function() {
      expect(main).to.have.property('Commands').and.to.be.an('object')
      expect(main).to.have.property('RpcClient').and.to.be.a('function')
      expect(main).to.have.property('RpcError').and.to.be.a('function')
    },
  )
})
