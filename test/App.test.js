import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import App from '../src/components/App';


describe('Testing <App />', () => {
  const renderer = ReactTestUtils.createRenderer();

  beforeEach(() => {
    renderer.render(<App />);
  });

  it('renders a react app without crashing', () => {
    const AppElement = renderer._instance._currentElement.type;
    expect(typeof AppElement === 'function').toBeTruthy();
  });

  it('renders more than one child', () => {
    const result = renderer.getRenderOutput();
    const childsAmmount = result.props.children.length;
    expect(childsAmmount).toBeGreaterThan(1);
  });
});
