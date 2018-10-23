export const initialState = {
    performers: [],
}

const performerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERFORMERS':
      return Object.assign({}, state, {
        performers: action.payload
      });
    default:
      return state
  }
}

export default performerReducer
