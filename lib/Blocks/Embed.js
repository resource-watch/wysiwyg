import React from 'react';
import PropTypes from 'prop-types';

class Embed extends React.Component {
  static propTypes = {
    item: PropTypes.object
  }

  static defaultProps = {
    item: {}
  }

  render() {
    const { src, width, height } = this.props.item.content;

    return (
      <div className="cw-wysiwyg-embed">
        <iframe
          frameBorder="0"
          src={src}
          width={width || '100%'}
          height={height || '400px'}
        />
      </div>
    );
  }
}

export default Embed;
