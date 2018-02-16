export function itemsError(state = false, action) {
  switch (action.type) {
    case 'ITEMS_ERROR':
      return action.isError
    default:
      return state
  }
}

export function itemsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_SUCCESS':
      return action.data['films']['film']
    default:
      return state
  }
}