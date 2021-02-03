import React from 'react';
import PropTypes from 'prop-types';

// Components
import Icon from 'components/Wysiwyg/UI/Icon/Icon';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    onClickClose: PropTypes.func
  }

  static defaultProps = {
    children: [],
    onClickClose: null
  }

  render() {
    return (
      <div className="cw-modal">
        <div className="modal-container">
          <button
            className="cw-button -close -small -round modal-close"
            onClick={this.props.onClickClose}
          >
            <Icon name="icon-close" />
          </button>
          <div className="modal-content">
            {React.Children.map(this.props.children, (child) => {
              return child;
            })}
          </div>
        </div>
        <button className="modal-backdrop cw-button -clean" onClick={this.props.onClickClose} />
      </div>
    );
  }
}

export default Modal;
