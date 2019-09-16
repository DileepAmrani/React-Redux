const intialState = {
  name: 'Dileep',
  count: 0
}

const reducer = (state = intialState, action) => {
  console.log('Action ====>', action)
  switch (action.type) {
    case "INCREASE":
      console.log("In",state)
      return{
        count : state.count + 1
      }
    case "DECREASE":
      console.log('DECREASE Function is runing');
      if(state.count === 0){
        state.count = 0
      }
      else{
        return{
          count: state.count - 1
        }
      }
    default: {
      return state
    }
  }
}


export default reducer