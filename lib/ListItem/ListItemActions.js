import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Recompose
import { getContext } from 'recompose';

// Components
import Icon from 'components/Wysiwyg/UI/Icon/Icon';

class ListItemActions extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    className: PropTypes.string,
    removeItem: PropTypes.func
  }

  static defaultProps = {
    item: {},
    prov: {},
    className: '',
    removeItem: null
  }

  render() {
    const { item, className } = this.props;
    const classNames = classnames({
      [className]: !!className
    });

    return (
      <div className={`cw-wysiwyg-item-actions ${classNames}`}>
        <ul className="item-actions">
          <li>
            <button
              type="button"
              className="cw-button -close -round -small"
              onClick={() => { this.props.removeItem(item); }}
            >
              <Icon name="icon-delete" />
            </button>
          </li>
        </ul>

      </div>
    );
  }
}

export default getContext({
  removeItem: PropTypes.func
})(ListItemActions);
