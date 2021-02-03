import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import mapValues from 'lodash/mapValues';

import validate from 'validate.js';

import { Form } from 'react-form';

class ImageEdition extends React.Component {
  static propTypes = {
    block: PropTypes.object,
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    block: {}
  }

  VALIDATIONS = mapValues(this.props.block.model, m => m.validations)

  MODEL = this.props.block.model

  triggerSubmit = (values) => {
    if (this.props.onSubmit) this.props.onSubmit(values);
  }

  triggerValidateError = (values) => {
    const errors = {};
    const errorValidations = validate(values, this.VALIDATIONS);

    // Map throuhg the model keys to set the errors
    Object.keys(this.MODEL).map(k => errors[k] = errorValidations && errorValidations[k]);

    return errors;
  }

  render() {
    return (
      <div className="cw-wysiwyg-edition">
        <Form
          defaultValues={mapValues(this.MODEL, m => m.defaultValue)}
          onSubmit={this.triggerSubmit}
          validateError={this.triggerValidateError}
        >
          {(formApi) => {
            const { touched, errors } = formApi;

            return (
              <form
                id="form"
                className="cw-form"
                autoComplete="off"
                onSubmit={formApi.submitForm}
              >
                <fieldset className="cw-fieldset">
                  {Object.keys(this.MODEL).map((f) => {
                    const fieldClassNames = classnames({
                      [`-${this.MODEL[f].type}`]: !!this.MODEL[f].type
                    });

                    return (
                      <div key={this.MODEL[f].id} className={`cw-field ${fieldClassNames}`}>
                        <label
                          className="label"
                          htmlFor={this.MODEL[f].id}
                        >
                          {this.MODEL[f].label}
                        </label>

                        {React.createElement(
                          this.MODEL[f].Component,
                          {
                            field: this.MODEL[f].id,
                            id: this.MODEL[f].id,
                            options: this.MODEL[f].options || {}
                          }
                        )}

                        {!!touched[f] && !!errors[f] && errors[f].map((e, i) => <div key={i} className="error">{e}</div>)}
                      </div>
                    );
                  })}
                </fieldset>

                <div className="form-actions">
                  <button
                    type="button"
                    className="cw-button -primary"
                    onClick={formApi.submitForm}
                  >
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default ImageEdition;
