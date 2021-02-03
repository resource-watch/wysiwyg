import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_BLOCKS } from 'components/Wysiwyg/constants';

// Provider
import WysiwygProvider from 'components/Wysiwyg/WysiwygProvider';

// Components
import Content from 'components/Wysiwyg/Content/Content';
import Icons from 'components/Wysiwyg/UI/Icons/Icons';
import Backdrop from 'components/Wysiwyg/UI/Backdrop/Backdrop';

class Wysiwyg extends React.Component {
  static propTypes = {
    /** id: Will handle re-renders */
    id: PropTypes.string,
    /** items: Initial state of wysiwyg [Check item types](#wysiwyg-items) */
    items: PropTypes.array,
    /** blocks: Different types of blocks handled by wysiwyg [Check block types](#wysiwyg-blocks) */
    blocks: PropTypes.object,
    /** function is called each time there is change in state of wysiwyg. */
    onChange: PropTypes.func,
    /** function is called each time there is an upload of an image. It must return a promise */
    onUploadImage: PropTypes.func,
    /** bool */
    readOnly: PropTypes.bool
  }

  static defaultProps = {
    id: undefined,
    items: [],
    blocks: DEFAULT_BLOCKS,
    readOnly: false,
    onChange: null,
    onUploadImage: null
  }

  state = {
    items: this.props.items || [],
    blocks: { ...DEFAULT_BLOCKS, ...this.props.blocks },
    readOnly: this.props.readOnly,
    editionMode: false,
    cursor: null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      // Set items
      this.setItems(nextProps.items);

      // // Set blocks
      // this.setBlocks({ ...DEFAULT_BLOCKS, ...nextProps.blocks });
    }
    if (nextProps.readOnly !== this.state.readOnly) {
      this.setState({ readOnly: nextProps.readOnly });
    }
  }

  // Blocks
  setBlocks = (blocks) => {
    this.setState({
      blocks: { ...this.state.blocks, ...blocks }
    });
  }

  // Toolbar
  setCursor = (cursor) => {
    this.setState({ cursor });
  }

  setEditionMode = (mode) => {
    this.setState({
      editionMode: mode
    });
  }

  // Items
  setItems = (items) => {
    this.setState({ items }, () => {
      this.props.onChange && this.props.onChange(this.state.items);
    });
  }

  addItem = (item, index) => {
    const items = [...this.state.items];
    const cursor = index || this.state.cursor;
    items.splice(cursor, 0, item);

    this.setItems(items);
  }

  updateItem = (item) => {
    const items = [...this.state.items];
    const index = items.findIndex(i => i.id === item.id);

    items[index] = item;

    this.setItems(items);
  }

  removeItem = (item) => {
    const items = [...this.state.items];
    const index = items.findIndex(i => i.id === item.id);

    items.splice(index, 1);

    this.setItems(items);
  }

  render() {
    return (
      <div
        className="cw-wysiwyg"
        onMouseLeave={() => {
          !this.state.editionMode && this.setCursor(null);
        }}
      >
        <Icons />

        <WysiwygProvider
          {...this.state}
          setToolbar={this.setToolbar}
          setCursor={this.setCursor}
          setEditionMode={this.setEditionMode}
          setItems={this.setItems}
          addItem={this.addItem}
          updateItem={this.updateItem}
          removeItem={this.removeItem}
          onUploadImage={this.props.onUploadImage}
        >
          <Content />
        </WysiwygProvider>

        <Backdrop isActive={this.state.editionMode} onClick={() => this.setEditionMode(false)} />
      </div>
    );
  }
}

export default Wysiwyg;
