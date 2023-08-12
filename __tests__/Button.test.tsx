//@ts-ignore
import renderer from 'react-test-renderer';
import React = require('react');
import {Button} from '../src/Components/Button';
describe('Snapshot', () => {
  it('to match snapshot', () => {
    const component = renderer.create(
      <Button text={'Test'} backgroundColor={'white'} callback={() => {}} />,
    );

    const match = component.toJSON();
    expect(match).toMatchSnapshot();
  });
});
