import {
  SEARCH_TUTOR,
  SEACH_TUTOR_FUFILLED,
  SEARCH_TUTOR_FAILED,
  FETCH_TUTORS,
  FETCH_TUTORS_FUFILLED,
  FETCH_TUTORS_FAILED
} from '../actions/type'

const  INITIAL_STATE = {
  loading:false,
  tutorList:[],
  error:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_TUTORS:
    return {...state, loading:true};
    case FETCH_TUTORS_FUFILLED:
    return {...state, loading:false, tutorList:action.payload}
    case FETCH_TUTORS_FAILED:
    return {...state, error:action.payload};
    case SEARCH_TUTOR:
    return {...state, loading:true}
    case SEACH_TUTOR_FUFILLED:
    return {...state, loading:false, tutorList:[action.payload]}
    case SEARCH_TUTOR_FAILED:
    return {...state, error:action.payload}
    default:
    return state;
  }
}
