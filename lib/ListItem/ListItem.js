import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Recompose
import { getContext } from 'recompose';

// Motion
import { Transition } from 'react-transition-group';

// Drag and drop
import { SortableElement } from 'react-sortable-hoc';

// Components
import Toolbar from 'components/Wysiwyg/Toolbar/Toolbar';
import ListItemDrag from 'components/Wysiwyg/ListItem/ListItemDrag';
import ListItemActions from 'components/Wysiwyg/ListItem/ListItemActions';
import ListItemContent from 'components/Wysiwyg/ListItem/ListItemContent';

class ListItem extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    cursor: PropTypes.number,
    position: PropTypes.number,
    readOnly: PropTypes.bool,
    addItem: PropTypes.func,
    setCursor: PropTypes.func
  }

  static defaultProps = {
    item: {},
    cursor: 0,
    position: 0,
    readOnly: false,
    addItem: null,
    setCursor: null
  }

  /**
   * UI EVENTS
   * - onAddItem
  */
  onAddItem = (payload) => {
    this.props.addItem(payload);
  }

  /**
   * HELPERS
   * - getClasses
   * - getContentClasses
  */
  getClasses = () => {
    const { item, cursor, position, readOnly } = this.props;
    const isCurrent = (position === cursor) && !readOnly;

    return classnames({
      '-isDragging': false,
      '-isHover': isCurrent,
      '-isReadOnly': readOnly,
      [`-${item.type}`]: !!item.type
    });
  }

  getContentClasses = () => {
    const { item, cursor, position, readOnly } = this.props;
    const isCurrent = (position === cursor) && !readOnly;

    return classnames({
      '-isDragging': false,
      '-isHover': isCurrent,
      '-isReadOnly': readOnly,
      [`-${item.type}`]: !!item.type
    });
  }

  render() {
    const { item, cursor, position, readOnly } = this.props;

    const isCurrent = (position === cursor) && !readOnly;

    return (
      <li
        className={`cw-wysiwyg-list-item ${this.getClasses()}`}
        onMouseOver={() => {
          this.props.setCursor(position);
        }}
      >
        {/* Toolbar */}
        {isCurrent &&
          <Toolbar onAdd={this.onAddItem} />
        }

        <div
          className="list-item-container"
        >
          {/* Drag handler */}
          {!readOnly &&
            <Transition in={isCurrent} timeout={150}>
              {status => (
                <ListItemDrag
                  item={item}
                  className={`-${status}`}
                />
              )}
            </Transition>
          }

          {/* Block Actions */}
          {!readOnly &&
            <Transition in={isCurrent} timeout={150}>
              {status => (
                <ListItemActions
                  item={item}
                  className={`-${status}`}
                />
              )}
            </Transition>
          }

          {/* Content */}
          <ListItemContent
            item={item}
            className={this.getContentClasses()}
          />
        </div>
      </li>
    );
  }
}

export default SortableElement(getContext({
  cursor: PropTypes.number,
  readOnly: PropTypes.bool,
  addItem: PropTypes.func,
  setCursor: PropTypes.func
})(ListItem));
