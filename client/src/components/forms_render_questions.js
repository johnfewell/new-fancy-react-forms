import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import FormGroupShow from "./form_group_show";
import ReactDOM from "react-dom";

class FormsRenderQuestions extends Component {
  componentWillUpdate() {
    // only scroll to bottom after a new question has been added, not on initial page load
    if (this.bottom !== undefined) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.bottom.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    if (this.props.form == null || this.props.form.questions == null) {
      return <Loader active inline="centered" />;
    } else {
      return this.props.form.questions.map((question, i) => (
        <div>
          <div
            ref={top => {
              this.top = top;
            }}
          />
          <FormGroupShow question={question} key={i} index={i} />
          <div
            ref={bottom => {
              this.bottom = bottom;
            }}
          />
        </div>
      ));
    }
  }
}

export default FormsRenderQuestions;
