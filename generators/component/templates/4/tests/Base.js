import React from 'react';
import { shallow, mount } from 'enzyme';
import <%= component.className %> from '<%= component.webpackPath %>';

describe('<<%= component.className %> />', function () {

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

  describe('when rendering the component', function () {

    it('should have a className of "<%= style.className %>"', function () {
      expect(render().hasClass('<%= style.className %>')).toBe(true);
    });
  });
});


