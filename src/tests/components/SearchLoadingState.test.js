import React from 'react';
import { shallow } from 'enzyme';
import SearchLoadingState from '../../components/SearchLoadingState';

test('should render loading state correctly', () => {
    const wrapper = shallow(<SearchLoadingState />);
    expect(wrapper).toMatchSnapshot();
});