import React from 'react';
import '../../../setupTest'
import {shallow} from 'enzyme';
import {CARD} from './Card';
import { Button, Card, Image } from 'semantic-ui-react'


describe('Card component', () => {
  const mockClick1= jest.fn();
  const mockClick2 = jest.fn();
  const card = shallow(<CARD onClick1={mockClick1} onClick2={mockClick2}/>)


  describe('HTML', () => {
    it('There are two cards', () => {
      expect(card.find(Button)).toHaveLength(2)
    })
  })

  describe('Card calls click1', () => {
    beforeEach(() => {
      card.find(Button).first().simulate('click')
    })
    it('should call mockClick1', () => {
      expect(mockClick1).toHaveBeenCalled()
    })
  })

  describe('Card calls click2', () => {
    beforeEach(() => {
      card.find(Button).last().simulate('click')
    })
    it('should call mockClick2', () => {
      expect(mockClick2).toHaveBeenCalled()
    })
  })
})
