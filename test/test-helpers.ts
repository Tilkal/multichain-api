import { expect } from 'chai'
import { Commands, RpcRequest } from '../src/main'

export function TestCommand(result: RpcRequest, command: Commands.Signature, args?: any[]) {
  expect(result.method).equals(command.name.toLowerCase())

  if (args === undefined) {
    expect(result).to.not.have.property('params')
  } else {
    expect(result).to.have.property('params')
    expect(result.params).to.have.same.deep.ordered.members(args)
  }
}
