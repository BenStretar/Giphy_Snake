const favoriteReducer = (state={
    title: 'DEFAULT',
    image_url: '',
    categories: []
  }, action) => {
    console.log(action.payload)
    switch (action.type) {
      case 'SELECT_IMAGE': return action.payload
      default: return state;
    }
  }

export default favoriteReducer;