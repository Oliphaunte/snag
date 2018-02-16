export function itemsError(bool) {
  return {
    type: 'ITEMS_ERROR',
    isError: bool
  }
}

export function itemsLoading(bool) {
  return {
    type: 'ITEMS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchSuccess(data) {
  return {
    type: 'ITEMS_FETCH_SUCCESS',
    data
  }
}

export function itemsFetch(url) {
  return (dispatch) => {
    dispatch(itemsLoading(true))

    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(itemsFetchSuccess(data)) )
      .then(() => dispatch(itemsLoading(false)) )
      .catch(err => dispatch(itemsError(true)) );
  }

}