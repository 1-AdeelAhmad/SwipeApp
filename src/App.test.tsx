import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('App', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('renders the provider on top level', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(component).toHaveLength(1);
  });
});
