import React from 'react';
import '../../setupTest'
import {shallow} from 'enzyme';
import Header from './Header';


describe('Header', () => {
  const header = shallow(<Header/>);

  describe('HTML(static)', () => {
    it('contains navbar', () => {
      expect(header.find('.navbar-brand').exists()).toBe(true)
    })
    it('contas state', () => {
      expect(header.state().isOpen).toEqual(false)
    })
  })
})
