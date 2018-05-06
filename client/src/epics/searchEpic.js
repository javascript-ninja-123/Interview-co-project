import {Observable} from 'rxjs'
import {
SEARCH_TUTOR
} from '../actions/type';
import {
  searchTutorFufilled,
  searchTutorFailed
} from '../actions'




export const findTutorEpic$ = (action$,store,{ajaxCenter}) =>
action$.ofType(SEARCH_TUTOR)
.switchMap(({payload}) => ajaxCenter.getData(payload.url,payload.input))
.map((res)=> {
  return  searchTutorFufilled(res)
})
.catch(err => Observable.of(searchTutorFailed(err)))
