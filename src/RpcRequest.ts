/**
 * JSON-RPC request.
 * @param T Type of the `params` property.
 */
export interface RpcRequest<T extends any[] | undefined = any[] | undefined> {
  /**
   * Name of the method to invoke.
   */
  readonly method: string

  /**
   * List of arguments to invoke the method with, if any.
   */
  readonly params?: T

  /**
   * Request identifier.
   */
  readonly id: number | string | null
}
