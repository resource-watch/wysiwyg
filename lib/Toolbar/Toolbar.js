import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import upperFirst from 'lodash/upperFirst';

// Recompose
import { getContext } from 'recompose';

// Motion
import { Transition } from 'react-transition-group';

// Popper
import { Manager, Target, Popper, Arrow } from 'react-popper';

// Components
import Icon from 'components/Wysiwyg/UI/Icon/Icon';
import Modal from 'components/Wysiwyg/UI/Modal/Modal';

class Toolbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    blocks: PropTypes.object,
    editionMode: PropTypes.bool,
    exclude: PropTypes.array,

    onAdd: PropTypes.func,
    setEditionMode: PropTypes.func
  }

  static defaultProps = {
    className: '',
    blocks: {},
    editionMode: false,
    exclude: [],
    onAdd: null,
    setEditionMode: null
  }

  state = {
    opened: false,
    tooltip: null,
    edition: null
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.editionMode !== nextProps.editionMode && !nextProps.editionMode) {
      this.triggerClose();
    }
  }

  /**
   * UI EVENTS
   * - triggerToggleOptions
   * - triggerAddBlock
  */
  triggerToggleOptions = () => {
    this.setState({ opened: true });
  }

  triggerAddBlock = (block) => {
    const { blocks } = this.props;

    // Check if block has EditionComponent to fill
    if (blocks[block] && blocks[block].EditionComponent) {
      this.setState({ tooltip: block, edition: block });
      this.props.setEditionMode && this.props.setEditionMode(true);
    } else {
      this.props.onAdd && this.props.onAdd({
        id: Date.now(),
        type: block
      });

      this.triggerClose();
    }
  }

  triggerSubmitBlock = (block, content) => {
    this.props.onAdd && this.props.onAdd({
      id: Date.now(),
      type: block,
      content
    });

    this.triggerClose();
  }

  // Helpers
  triggerClose = () => {
    // Close options
    this.setState({ opened: false, tooltip: null, edition: null });

    this.props.setEditionMode && this.props.setEditionMode(false);
  }

  render() {
    const { blocks, editionMode, exclude, className } = this.props;
    const { opened, tooltip, edition } = this.state;

    const classNames = classnames({
      '-edition': edition,
      [className]: !!className
    });

    return (
      <div className={`cw-wysiwyg-toolbar ${classNames}`}>
        <div className="toolbar-handler">

          {/* Add button */}
          <Transition in={(!opened)} timeout={150}>
            {status => (
              <div className={`toolbar-handler-button -${status}`}>
                <button
                  type="button"
                  className="cw-button -primary"
                  onClick={() => this.triggerToggleOptions()}
                >
                  Add
                  <Icon name="icon-add" />
                </button>
              </div>
            )}
          </Transition>

          {/* Toolbar buttons */}
          <Transition in={(opened)} timeout={150}>
            {status => (
              <ul className={`toolbar-handler-list -${status}`}>
                {/* Map blocks to set the buttons (filtered thanks to exclude prop) */}
                {Object.keys(blocks).filter(block => !exclude.includes(block)).map((block) => {
                  const btnClassNames = classnames({
                    '-active': block === edition
                  });

                  return (
                    <li
                      key={block}
                      onMouseLeave={() => {
                        if (!edition && !editionMode) {
                          this.setState({ tooltip: null });
                        }
                      }}
                    >
                      <Manager>
                        {/* Block button */}
                        <Target>
                          <button
                            type="button"
                            className={`cw-button -small -round -primary ${btnClassNames}`}
                            onClick={() => this.triggerAddBlock(block)}
                            onMouseEnter={() =>
                              !editionMode && this.setState({ tooltip: block, edition: null })
                            }
                          >
                            <Icon name={blocks[block].icon || `icon-${block}`} />
                          </button>
                        </Target>

                        {/* Info tooltip */}
                        {block === tooltip && !edition &&
                          <Popper placement="top" className="cw-tooltip">
                            {blocks[block].label || upperFirst(block)}
                            <Arrow className="tooltip-arrow" />
                          </Popper>
                        }

                        {/* Edition mode tooltip */}
                        {block === tooltip && block === edition && blocks[block].renderer === 'tooltip' &&
                          <Popper
                            className="cw-tooltip -light"
                            placement="bottom"
                            modifiers={{
                              preventOverflow: {
                                boundariesElement: 'viewport'
                              }
                            }}
                          >
                            {React.createElement(
                              blocks[block].EditionComponent,
                              {
                                block: blocks[block],
                                onSubmit: content => this.triggerSubmitBlock(block, content)
                              }
                            )}
                            <Arrow className="tooltip-arrow" />
                          </Popper>
                        }

                        {/* Edition mode without tooltip */}
                        {block === tooltip && block === edition && blocks[block].renderer === 'modal' &&
                          createPortal(
                            <Modal
                              onClickClose={this.triggerClose}
                            >
                              {React.createElement(
                                blocks[block].EditionComponent,
                                {
                                  block: blocks[block],
                                  onSubmit: content => this.triggerSubmitBlock(block, content)
                                }
                              )}
                            </Modal>
                          , document.body)
                        }
                      </Manager>
                    </li>
                  );
                })}

                {/* Close button */}
                <li key="close">
                  <button
                    type="button"
                    className="cw-button -small -round -close"
                    onClick={this.triggerClose}
                  >
                    <Icon name="icon-close" />
                  </button>
                </li>
              </ul>
            )}
          </Transition>
        </div>
      </div>
    );
  }
}

export default getContext({
  blocks: PropTypes.object,
  editionMode: PropTypes.bool,
  setEditionMode: PropTypes.func
})(Toolbar);
