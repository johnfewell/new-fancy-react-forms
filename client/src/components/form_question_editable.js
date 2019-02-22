import React from "react";
import { Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

const FormQuestionEditable = props => {
  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder="Type your answer here..." type={type} />
      </div>
    </div>
  );

  const questionLabel = (
    <div>
      {props.index + 1} <i aria-hidden="true" class="arrow right small icon" />{" "}
      {props.question.content}
    </div>
  );

  return (
    <div>
      <div className="borderless form-group-padding question" key={props.index}>
        <div className="ui huge form">
          <div className="equal width fields">
            <div className="field">
              <Field
                name={props.question.id.toString()}
                type="text"
                component={renderField}
                label={questionLabel}
              />
            </div>
          </div>
          <Divider hidden />
        </div>
      </div>
    </div>
  );
};

export default FormQuestionEditable;
