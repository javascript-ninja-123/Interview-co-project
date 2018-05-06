import searchReducer from './reducer_search';

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

describe('search reducer test', () => {
  describe('fetch tutor', () => {
    it('tutors fetch initiated', () => {
      const action = {type:FETCH_TUTORS}
      const state = {...INITIAL_STATE, loading:true}
      expect(searchReducer(INITIAL_STATE,action)).toEqual(state)
    })

    it('tutor fetch success', () => {
      const mockData = {name:'Sungmin Yi'};
      const action = {type:FETCH_TUTORS_FUFILLED, payload:mockData }
      const state = {...INITIAL_STATE, loading:false,tutorList:mockData }
      expect(searchReducer(INITIAL_STATE, action)).toEqual(state)
    })

    it('tutor fetch failed', () => {
      const mockData = {error:'it failed'};
      const action = {type:FETCH_TUTORS_FAILED, payload:mockData };
      const state = {...INITIAL_STATE, loading:false, error:mockData }
      expect(searchReducer(INITIAL_STATE,action)).toEqual(state)
    })
  })


  describe('search tutor', () => {
    it('tutor search initiated', () => {
      const action = {type:SEARCH_TUTOR};
      const state = {...INITIAL_STATE, loading:true};
      expect(searchReducer(INITIAL_STATE,action)).toEqual(state);
    })
    it('tutor search succeed', () => {
      const mockData = {name:'Sungmin Yi'}
      const action = {type:SEACH_TUTOR_FUFILLED, payload:mockData };
      const state = {...INITIAL_STATE, loading:false,tutorList:[mockData]}
      expect(searchReducer(INITIAL_STATE,action)).toEqual(state)
    })
    it('tutor search failed', () => {
      const mockData = {error:'failed'};
      const action = {type:SEARCH_TUTOR_FAILED, payload: mockData};
      const state = {...INITIAL_STATE, loading:false, error:mockData };
      expect(searchReducer(INITIAL_STATE,action)).toEqual(state);
    })
  })
})
