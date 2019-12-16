import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow, mount, be } from 'enzyme';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

test('Click Yesterday button', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Yesterday'));
});

test('Click Tomorrow Button', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText('Tomorrow'));
})

describe('App renders correctly', () => {
  it ('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});