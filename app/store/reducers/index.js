import { combineReducers }  from 'redux'

import { items, itemsError, itemsLoading} from './items'

const rootReducer = combineReducers({
  items,
  itemsError,
  itemsLoading,
})

export default rootReducer