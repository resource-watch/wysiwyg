import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Wysiwyg/UI/Icon/Icon';

class GridEdition extends React.Component {
  static propTypes = {
    block: PropTypes.object,
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    block: {}
  }

  MODEL = this.props.block.model

  triggerSubmit = (columns) => {
    const content = Array(columns).fill();

    if (this.props.onSubmit) this.props.onSubmit(content);
  }

  render() {
    return (
      <div className="cw-wysiwyg-grid-edition">
        <div className="grid-edition-row">
          <div className="grid-edition-column">
            <button
              className="cw-button -clean -full"
              onClick={() => this.triggerSubmit(2)}
            >
              <div className="grid-edition-placeholder">
                <span className="-small-6" />
                <span className="-small-6" />
              </div>
            </button>
          </div>

          <div className="grid-edition-column">
            <button
              className="cw-button -clean -full"
              onClick={() => this.triggerSubmit(3)}
            >
              <div className="grid-edition-placeholder">
                <span className="-small-4" />
                <span className="-small-4" />
                <span className="-small-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GridEdition;
