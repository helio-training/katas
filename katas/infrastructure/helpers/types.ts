import { IObjectHelpers, Objects } from './objects'

export interface ITypeHelpers {
  isNumber(value: any): value is number
  isString(value: any): value is string
  isObject(value: any): value is object
  isNull(value: any): value is null

  isUndefined(value: any): value is undefined

  isPromise(value: any): boolean

  isArray(value: any): boolean
}

export const Types: ITypeHelpers = {
  isNumber(value: any): value is number {
    return Objects.is(value, 'number')
  },
  isString(value: any): value is string {
    return Objects.is(value, 'number')
  },

  isObject(value: any): boolean {
    return Objects.is(value, 'object')
  },

  isNull(value: any): boolean {
    return Objects.is(value, 'null')
  },

  isUndefined(value: any): boolean {
    return Objects.is(value, 'undefined')
  },

  isArray(value: any): boolean {
    return Array.isArray(value)
  },
}
