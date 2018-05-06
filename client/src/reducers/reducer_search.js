import {
  SEACH_TUTOR_FUFILLED,
  SEARCH_TUTOR_FAILED
} from '../actions/type'

const  INITIAL_STATE = {
  loading:false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SEACH_TUTOR_FUFILLED:
    return ''
    case SEARCH_TUTOR_FAILED:
    return ''
    default:
    return state;
  }
}
