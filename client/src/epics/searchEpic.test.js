import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import {
  SEARCH_TUTOR,
  SEACH_TUTOR_FUFILLED,
  SEARCH_TUTOR_FAILED
} from '../actions/type';
import {findTutorEpic$} from './searchEpic';



const mockResponse = {
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: {
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
geo: {
lat: "-37.3159",
lng: "81.1496"
}
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company: {
name: "Romaguera-Crona",
catchPhrase: "Multi-layered client-server neural-net",
bs: "harness real-time e-markets"
}
};


const store = null; // not needed for this epic
const action$ = ActionsObservable.of({type: SEARCH_TUTOR, payload: {input:'1', url: 'https://jsonplaceholder.typicode.com/users'}});

describe('searchEpic', () => {
  it('dispatches the correct actions when it is successful', () => {
    const ajaxCenter = {
      getData:() => Observable.of(mockResponse)
    }

     findTutorEpic$(action$,store,{ajaxCenter})
    .toArray()
    .subscribe(action => {
      expect(action).toEqual([
          { type: SEACH_TUTOR_FUFILLED, payload:mockResponse }
       ])
    })
  })




  it('should dispatch an error when authenticating has failed', async () => {
    const ajaxCenter = {
      getData:() => Observable.throw('save failed')
    }
    const result = await findTutorEpic$(action$,store,{ajaxCenter})
    .toArray()
    .toPromise()

    expect(result).toEqual([
        { type: SEARCH_TUTOR_FAILED, payload:'save failed' }
     ])
  })
})
