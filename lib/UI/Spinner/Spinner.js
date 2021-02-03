import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Spinner extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    isLoading: false,
    className: ''
  };

  render() {
    const { isLoading, className } = this.props;
    const classNames = classnames({
      '-loading': isLoading,
      [className]: !!className
    });

    return (
      <div className={`cw-spinner ${classNames}`}>
        <div className="spinner-box">
          <div className="icon" />
        </div>
        <div className="spinner-box">
          <div className="icon-2" />
        </div>
      </div>
    );
  }
}


export default Spinner;
