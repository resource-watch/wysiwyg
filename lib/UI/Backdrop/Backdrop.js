import React from 'react';
import PropTypes from 'prop-types';

class Backdrop extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    isActive: false,
    onClick: null
  }

  render() {
    const { isActive } = this.props;

    if (!isActive) { return null; }

    return (
      /* eslint-disable */
      <div
        className="cw-wysiwyg-backdrop"
        onClick={this.props.onClick}
        role="button"
      />
      /* eslint-enable */
    );
  }
}

export default Backdrop;
