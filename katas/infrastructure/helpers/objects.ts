import { IObjectHelpers } from './objects'

export interface IObjectHelpers {
  is(value: any, type: string): boolean
}

export const Objects: IObjectHelpers = {
  is(value, type) {
    return typeof value.toLowerCase() === type
  },
}
