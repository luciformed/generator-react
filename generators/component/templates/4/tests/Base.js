import React from 'react';
import { shallow, mount } from 'enzyme';
import <%= component.className %> from '<%= component.webpackPath %>';
import styles from '<%= style.webpackPath %>';

describe('<<%= component.className %> />', () => {

  let props;
  let mountedComponent;

  const render = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<<%= component.className %> {...props} />);

    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {};
    mountedComponent = undefined;
  });

  describe('when rendering the component', () => {

    it('should have a className of "<%= style.className %>"', () => {
      expect(render().hasClass(styles.root)).toBe(true);
    });
  });
});


