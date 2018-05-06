import {
  SEARCH_TUTOR,
  SEACH_TUTOR_FUFILLED,
  SEARCH_TUTOR_FAILED
} from './type';


export const searchTutor = serchedInput => ({
  type:SEARCH_TUTOR,
  payload:{
    input:serchedInput,
    url:'https://jsonplaceholder.typicode.com/users'
  }
})


export const searchTutorFufilled = res => ({
  type:SEACH_TUTOR_FUFILLED,
  payload:res
})


export const searchTutorFailed = err => ({
  type:SEARCH_TUTOR_FAILED,
  payload:err
})
