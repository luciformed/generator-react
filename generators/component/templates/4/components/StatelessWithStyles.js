import React from 'react';
import PropTypes from "prop-types";

import { compose, mapProps, setDisplayName } from 'recompose';

import { Logger } from 'components/shared/util';

import styles from '<%= style.webpackPath %>';

const logger = Logger('<<%= component.displayName %>/>');

const withPropsLogger = mapProps(logger.prepend("props"));

const <%= component.className %> = compose(
    withPropsLogger,
    setDisplayName('<%= component.displayName %>Base'))(
    () => (
      <div className={styles.root}>
        Please edit <%= component.path %><%= component.fileName %> to update this component!
      </div>
));

<%= component.className %>.displayName = '<%= component.displayName %>';
<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
