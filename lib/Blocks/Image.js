import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  static propTypes = {
    item: PropTypes.object
  }

  static defaultProps = {
    item: {}
  }

  render() {
    const { src, alt } = this.props.item.content;
    return (
      <div className="cw-wysiwyg-image">
        <img
          src={src}
          alt={alt}
        />
      </div>
    );
  }
}

export default Image;
