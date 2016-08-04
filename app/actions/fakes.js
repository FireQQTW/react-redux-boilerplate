import { createAction } from 'redux-actions'
import { fakeApi } from '../API/fakes'

export const getFake = createAction('get fake', fakeApi.getFake2)
