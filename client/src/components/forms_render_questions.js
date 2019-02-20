import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import FormGroupShow from "./form_group_show";
import ReactDOM from "react-dom";

class FormsRenderQuestions extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    if (this.props.form == null || this.props.form.questions == null) {
      return <Loader active inline="centered" />;
    } else {
      return this.props.form.questions.map((question, i) => (
        <div>
          <FormGroupShow question={question} key={i} index={i} />
          <div
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      ));
    }
  }
}

export default FormsRenderQuestions;
