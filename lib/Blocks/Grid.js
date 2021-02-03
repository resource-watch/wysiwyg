import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Recompose
import { getContext } from 'recompose';

// Components
import Icon from 'components/Wysiwyg/UI/Icon/Icon';

// Blocks
import Toolbar from 'components/Wysiwyg/Toolbar/Toolbar';

class Grid extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    blocks: PropTypes.object,
    readOnly: PropTypes.bool,
    editionMode: PropTypes.bool,
    setEditionMode: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    item: {},
    blocks: {},
    readOnly: false,
    editionMode: false,
    setEditionMode: null
  }

  state = {
    // Change it
    content: this.props.item.content || [null, null],
    edition: null
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.editionMode !== nextProps.editionMode && !nextProps.editionMode) {
      this.triggerClose();
    }
  }

  /**
   * UI EVENTS
   * - triggerAdd
   * - triggerChange
   * - triggerEdit
   * - triggerRemove
   * - triggerClose
   * - triggerSubmit
  */
  triggerAdd = (payload, i) => {
    const content = [...this.state.content];

    if (!content[i]) {
      content[i] = [];
    }

    if (!Array.isArray(content[i])) {
      content[i] = [content[i]];
    }

    content[i].push(payload);

    this.setState({ content }, () => {
      this.props.onChange && this.props.onChange({ content });
    });
  }

  triggerChange = (payload, i, j) => {
    const content = [...this.state.content];
    content[i][j] = { ...content[i][j], ...payload };

    this.setState({ content }, () => {
      this.props.onChange && this.props.onChange({ content });
    });
  }

  triggerSubmit = (payload, i) => {
    const content = [...this.state.content];
    content[i] = { ...content[i], ...payload };

    this.setState({ content }, () => {
      this.triggerClose();
      this.props.onChange && this.props.onChange({ content });
    });
  }

  triggerEdit = (block, i) => {
    this.setState({ edition: block + i });
    this.props.setEditionMode && this.props.setEditionMode(true);
  }

  triggerRemove = (i, j = null) => {
    const content = [...this.state.content];
    if (j !== null) {
      content[i][j] = null;
    } else {
      content[i] = null;
    }

    this.setState({ content }, () => {
      this.props.onChange && this.props.onChange({ content });
    });
  }

  triggerClose = () => {
    // Close options
    this.setState({ edition: null });

    this.props.setEditionMode && this.props.setEditionMode(false);
  }

  render() {
    const { blocks, readOnly } = this.props;
    const { content } = this.state;

    const gridClassNames = classnames({
      'small-12': true,
      'medium-6': content.length === 2,
      'medium-4': content.length === 3
    });

    const columnItemClasses = classnames({
      'wysiwyg-grid-column__item': true,
      'wysiwyg-grid-column__item--with-actions': !readOnly
    });

    return (
      <div className="cw-wysiwyg-grid">
        <div className="wysiwyg-grid-row row">
          {content.map(((item, i) => {
            const items = Array.isArray(item) ? item : [item];
            return (
              <div key={i} className={`column ${gridClassNames}`}>
                <div className="wysiwyg-grid-column">
                  {items.map(((element, j) => {
                    if (!element) {
                      return null;
                    }
                    return (
                      <div key={element.id} className={columnItemClasses}>
                        {React.createElement(
                          blocks[element.type].Component,
                          {
                            item: element,
                            readOnly,
                            block: blocks[element.type],
                            onChange: payload => this.triggerChange(payload, i, j)
                          }
                        )}
                        <div className="wysiwyg-grid-column-actions -inline">
                          <ul>
                            <li>
                              <button
                                type="button"
                                className="cw-button -small -round -close"
                                onClick={() => this.triggerRemove(i, j)}
                              >
                                <Icon name="icon-delete" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  }))}
                  {!readOnly &&
                    <div className="wysiwyg-grid-placeholder">
                      <Toolbar
                        className="-no-cursor"
                        exclude={['grid']}
                        onAdd={payload => this.triggerAdd(payload, i)}
                      />
                    </div>
                  }
                  {/* Actions */}
                  {!readOnly &&
                    <div className="wysiwyg-grid-column-actions">
                      <ul>
                        <li>
                          <button
                            type="button"
                            className="cw-button -small -round -close"
                            onClick={() => this.triggerRemove(i)}
                          >
                            <Icon name="icon-close" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  }
                </div>
              </div>
            );
          }))}
        </div>
      </div>
    );
  }
}

export default getContext({
  blocks: PropTypes.object,
  readOnly: PropTypes.bool,
  editionMode: PropTypes.bool,
  setEditionMode: PropTypes.func
})(Grid);
