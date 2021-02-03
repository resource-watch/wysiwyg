import React from 'react';
import PropTypes from 'prop-types';

// Recompose
import { getContext } from 'recompose';

// Drag and drop
import { arrayMove } from 'react-sortable-hoc';

import List from 'components/Wysiwyg/List/List';

class Content extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    setItems: PropTypes.func,
    setCursor: PropTypes.func
  }

  static defaultProps = {
    items: [],
    setItems: null,
    setCursor: null
  }

  /**
   * UI EVENTS
   * - onSortStart
   * - onSortEnd
   * @param  {Object} drag
   * @return void
  */
  onSortEnd = ({ oldIndex, newIndex }) => {
    // Reorder items
    const items = [...this.props.items];

    this.props.setItems(arrayMove(items, oldIndex, newIndex));
    this.props.setCursor(newIndex);
  }

  render() {
    return (
      <List
        useDragHandle
        helperClass="-isDragging"
        onSortEnd={this.onSortEnd}
      />
    );
  }
}

export default getContext({
  items: PropTypes.array,
  setItems: PropTypes.func,
  setCursor: PropTypes.func
})(Content);
