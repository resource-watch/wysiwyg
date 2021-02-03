import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from 'css/index.scss';
import Icons from './icons';

console.log('styles', styles);

class Wrapper extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          position: 'relative',
          minHeight: 40,
        }}
        className="styleguide-wrapper"
      >
        {/* eslint-disable-next-line react/no-danger */}
        <style dangerouslySetInnerHTML={{ __html: styles }} />

        <Icons />

        {children}
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
