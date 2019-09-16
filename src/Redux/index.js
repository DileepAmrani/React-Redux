import { createStore } from 'redux'
import reducer from '../Redux/reducer'

const store = createStore(reducer)
export default store