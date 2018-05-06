import React from 'react';
import '../../../setupTest'
import {shallow} from 'enzyme';
import {Search} from './Search';
import { Button, Checkbox, Form } from 'semantic-ui-react'


describe('Search component', () => {
  const mockClick = jest.fn()
  const search = shallow(<Search onClick={mockClick}/>);
  it('it has a state,input,', () => {
    expect(search.state('input')).toBe('')
  })
  describe('onchange input', () => {
    const testString='Sungmin Yi'
    beforeEach(() => {
      search.find('input').simulate('change',{target:{value:testString}})
    })
    it('change input value while typing', () => {
      expect(search.state('input')).toBe(testString)
    })
  })
  describe('click button', () => {
    beforeEach(() => {
      search.find(Button).simulate('click')
    })

    it('there is a button', () => {
      expect(search.find(Button).exists()).toBe(true)
    })

    it('onClick is called', () => {
       expect(mockClick).toHaveBeenCalled();
    })


    it('setSate input ', () => {
      expect(search.state('input')).toBe('');
    })
    afterEach(() => {
      search.setState({input:''})
    })
  })
})
