import React from 'react';
import PropTypes from 'prop-types';

// Components
import ReactPlayer from 'react-player';

class Video extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    block: PropTypes.object
  }

  static defaultProps = {
    item: {},
    block: {}
  }

  render() {
    const { block } = this.props;
    const { url } = this.props.item.content;

    return (
      <div className="cw-wysiwyg-video">
        <ReactPlayer
          {...block.options}
          url={url}
        />
      </div>
    );
  }
}

export default Video;
