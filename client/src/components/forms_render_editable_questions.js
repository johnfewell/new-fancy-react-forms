import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import FormQuestionEditable from "./form_question_editable";

class FormsRenderEditableQuestions extends Component {
  componentDidUpdate() {
    if (this.bottom !== undefined) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.bottom.scrollIntoView({ behavior: "smooth" });
  }

  createQuestionGroup() {
    return this.props.form.questions.map((question, i) => (
      <FormQuestionEditable question={question} key={i} index={i} />
    ));
  }

  render() {
    if (this.props.form == null || this.props.form.questions == null) {
      return <Loader active inline="centered" />;
    } else {
      return (
        <div>
          <div
            ref={top => {
              this.top = top;
            }}
          />
          {this.createQuestionGroup()}
          <div
            ref={bottom => {
              this.bottom = bottom;
            }}
          />
        </div>
      );
    }
  }
}

export default FormsRenderEditableQuestions;
