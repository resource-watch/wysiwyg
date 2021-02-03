import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  static propTypes = {
    /** Name of the icon definition. Check it in icons.js */
    name: PropTypes.string.isRequired,
    className: PropTypes.oneOf(['', '-tiny', '-smaller', '-small', '-medium', '-big', '-huge'])
  }

  static defaultProps = {
    name: '',
    className: ''
  }

  render() {
    const { name, className } = this.props;
    return (
      <svg className={`cw-icon ${className || ''}`}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
}

export default Icon;
