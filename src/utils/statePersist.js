import config from './config'
import { getDiffTimeInDays } from './Utilities'
export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null)
      return undefined
    const state = JSON.parse(serializedData)
    if (getDiffTimeInDays(state.lastSession) > 1)
      return undefined
    if (state.DEV_AMBIENT === config.DEV_AMBIENT)
      return state
    clearState()
    return undefined
  }
  catch (error) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
  }
  catch (error) {
    // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
  }
}

export const clearState = () => {
  saveState(null)
}