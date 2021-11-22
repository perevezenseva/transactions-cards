import {useStaticRendering} from 'mobx-react'
import config from './config';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

export class Store {
  [key: string]: any
  constructor(initialState: any = {}) {
    for (const k in config) {
      if (config.hasOwnProperty(k)) {
        this[k] = new config[k](initialState[k])
      }
    }
  }
}

let store: any = null

export function initializeStore(initialState = {}) {
  if (isServer) {
    return new Store(initialState)
  }
  if (store === null) {
    store = new Store(initialState)
  }

  return store
}
