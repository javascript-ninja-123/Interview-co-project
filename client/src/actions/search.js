import {
  SEARCH_TUTOR,
  FETCH_TUTORS,
  SEACH_TUTOR_FUFILLED,
  SEARCH_TUTOR_FAILED,
  FETCH_TUTORS_FUFILLED,
  FETCH_TUTORS_FAILED
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


export const fetchTutors = () => ({
  type:FETCH_TUTORS,
  payload:{
    url:'https://jsonplaceholder.typicode.com/users'
  }
})


export const fetchTutorsFufilled = res => ({
  type:FETCH_TUTORS_FUFILLED,
  payload:res
})

export const fetchTutorsFailed = err => ({
  type: FETCH_TUTORS_FAILED,
  payload:err
})
