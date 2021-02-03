import React from 'react';
import PropTypes from 'prop-types';

import { withContext } from 'recompose';

class WysiwygProvider extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className="cw-wysiwyg-provider">
        {React.Children.map(this.props.children, (child) => {
          return child;
        })}
      </div>
    );
  }
}

export default withContext({
  blocks: PropTypes.object,
  items: PropTypes.array,
  readOnly: PropTypes.bool,
  cursor: PropTypes.number,
  editionMode: PropTypes.bool,
  setToolbar: PropTypes.func,
  setCursor: PropTypes.func,
  setEditionMode: PropTypes.func,
  setItems: PropTypes.func,
  addItem: PropTypes.func,
  updateItem: PropTypes.func,
  removeItem: PropTypes.func,
  onUploadImage: PropTypes.func
},
  props => ({
    blocks: props.blocks,
    items: props.items,
    readOnly: props.readOnly,
    cursor: props.cursor,
    editionMode: props.editionMode,
    setToolbar: props.setToolbar,
    setCursor: props.setCursor,
    setEditionMode: props.setEditionMode,
    setItems: props.setItems,
    addItem: props.addItem,
    updateItem: props.updateItem,
    removeItem: props.removeItem,
    onUploadImage: props.onUploadImage
  })
)(WysiwygProvider);
