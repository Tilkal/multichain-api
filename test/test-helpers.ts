import { expect } from 'chai'
import { CommandSignature } from '../src/Commands'
import { RpcRequest } from '../src/RpcRequest'

export function TestCommand(result: RpcRequest, command: CommandSignature, args?: any[]) {
  expect(result.method).to.equal(command.name.toLowerCase())

  if (args === undefined) {
    expect(result).to.not.have.property('params')
  } else {
    expect(result).to.have.property('params')
    expect(result.params).to.have.same.deep.ordered.members(args)
  }
}
