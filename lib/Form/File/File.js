// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Recompose
import { getContext } from 'recompose';

// Field
import { FormField } from 'react-form';

// Components
import Dropzone from 'react-dropzone';
import Spinner from 'components/Wysiwyg/UI/Spinner/Spinner';


class File extends React.Component {
  static propTypes = {
    fieldApi: PropTypes.object,
    options: PropTypes.object,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onUploadImage: PropTypes.func
  }

  state = {
    accepted: [],
    rejected: [],
    dropzoneActive: false,
    loading: false
  };

  /**
   * DROPZONE EVENTS
   * - onDragEnter
   * - onDragLeave
   * - onDrop
  */
  onDragEnter = () => {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave = () => {
    this.setState({
      dropzoneActive: false
    });
  }

  onDrop = (accepted, rejected) => {
    const {
      fieldApi,
      onChange
    } = this.props;

    this.setState({
      accepted,
      rejected,
      dropzoneActive: false
    }, () => {
      if (this.state.accepted.length) {
        if (this.props.onUploadImage) {
          this.setState({ loading: true });

          this.props.onUploadImage(this.state.accepted)
            .then((value) => {
              this.setState({ loading: false });
              fieldApi.setValue(value);

              if (onChange) {
                onChange(value);
              }
            })
            .catch((e) => {
              console.error(e);

              this.setState({
                accepted: [],
                rejected: [
                  { error: e.toString() }
                ],
                loading: false
              });
            });
        }
      }
    });
  }

  /**
   * HELPERS
   * - getRejectedErrors
  */
  getRejectedErrors() {
    const { rejected } = this.state;
    const { options } = this.props;

    return rejected.map((r) => {
      if (r.error) {
        return r.error;
      }

      if (r.size > options.maxSize) {
        return `Image is over ${options.maxSize / 1000000} MB`;
      }

      if (!options.accept.includes(r.type)) {
        return `Image is not ${options.accept.join(', ')}`;
      }

      return 'Unexpected error';
    });
  }

  /**
   * UI EVENTS
   * - triggerBrowseOrCancel
  */
  triggerBrowseOrCancel = () => {
    const {
      fieldApi,
      onChange
    } = this.props;

    const { accepted } = this.state;

    if (accepted.length) {
      fieldApi.setValue('');

      if (onChange) {
        onChange('');
      }

      this.setState({ accepted: [], rejected: [], loading: false });
    } else {
      this.dropzone.open();
    }
  }

  render() {
    const { accepted, loading, dropzoneActive } = this.state;

    const {
      fieldApi,
      onChange,
      onBlur,
      onUploadImage,
      ...rest
    } = this.props;

    const errors = this.getRejectedErrors();

    return (
      <div className="cw-file">
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          className="file-dropzone"
          {...this.props.options}
          disabled={!onUploadImage}
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
        >
          {dropzoneActive &&
            <div className="dropzone-active">
              Drop files...
            </div>
          }

          <input
            {...rest}
            value={fieldApi.getValue() || ''}
            onChange={(e) => {
              fieldApi.setValue(e.target.value);
              if (onChange) {
                onChange(e.target.value, e);
              }
            }}
            onBlur={(e) => {
              fieldApi.setTouched();
              if (onBlur) {
                onBlur(e);
              }
            }}
            readOnly={!!accepted.length}
          />

          <Spinner className="-light -small" isLoading={loading} />

          {this.props.onUploadImage &&
            <button
              type="button"
              className="cw-button -primary -compressed"
              onClick={this.triggerBrowseOrCancel}
            >
              {(accepted.length) ? 'Cancel' : 'Browse file'}
            </button>
          }

          {!!errors.length &&
            <div className="error">
              {errors.map(e => e)}
            </div>
          }
        </Dropzone>
      </div>
    );
  }
}

export default getContext({
  onUploadImage: PropTypes.func
})(FormField(File));
