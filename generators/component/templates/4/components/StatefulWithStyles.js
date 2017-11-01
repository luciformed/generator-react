import React from 'react';
import PropTypes from "prop-types";
import styles from '<%= style.webpackPath %>';

class <%= component.className %> extends <%= component.classBase %> {

  render() {
    return (
      <div className={styles.root}>
        Please edit <%= component.path %><%= component.fileName %> to update this component!
      </div>
    );
  }
}

<%= component.className %>.displayName = '<%= component.displayName %>';
<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
