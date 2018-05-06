import {Observable} from 'rxjs'
import {
SEARCH_TUTOR,
FETCH_TUTORS
} from '../actions/type';
import {
  searchTutorFufilled,
  searchTutorFailed,
  fetchTutorsFufilled,
  fetchTutorsFailed
} from '../actions'




export const findTutorEpic$ = (action$,store,{ajaxCenter}) =>
action$.ofType(SEARCH_TUTOR)
.switchMap(({payload}) => ajaxCenter.getData(payload.url,payload.input))
.map((res)=> {
  return  searchTutorFufilled(res)
})
.catch(err => Observable.of(searchTutorFailed(err)))


export const fetchTutorsEpic$ = (action$,store,{ajaxCenter}) =>
action$.ofType(FETCH_TUTORS)
.switchMap(({payload}) => ajaxCenter.getAllData(payload.url))
.map(res => fetchTutorsFufilled(res))
.catch(err => Observable.of(fetchTutorsFailed(err)))
