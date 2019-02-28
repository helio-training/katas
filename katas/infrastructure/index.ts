export const DEFAULT_PLACEHOLDER = false

function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

export interface IKataHelpers {
  isDefaultAnswer(answer: any): boolean
  is(value: any, type: string): boolean

  isNumber(value: any): value is number
  isString(value: any): value is string
}

interface IEqualityHelpers {
  is(value: any, type: string): boolean
}

interface Infrastructure {}

const Infrastructure: Infrastructure = {}

export default {}

export const Helpers: IKataHelpers = {
  isDefaultAnswer(answer) {
    return answer === DEFAULT_PLACEHOLDER
  },

  is(value, type) {
    return typeof value.toLowerCase() === type
  },

  isNumber(value: any): value is number {
    return typeof value === 'number'
  },

  isString(value: any): value is string {
    return typeof value === 'string'
  },
}
