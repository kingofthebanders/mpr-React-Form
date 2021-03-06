import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class Confirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        description,
        beats,
        goals,
        audience,
        hypothesis,
        lifecycle,
        topicType,
        format
      }
    } = this.props;

    return (
      <div>
        <h1 className="ui centered">Confirm your Details</h1>
        <p>
          Click Confirm if the following details have been correctly entered
        </p>
        <List>
          <List.Item>
            {/* <List.Icon name="users" /> */}
            <List.Content>Description: {description}</List.Content>
          </List.Item>
          <List.Item>
            {/* <List.Icon name="users" /> */}
            <List.Content>Beats:</List.Content>
          </List.Item>
          {beats.map(beat => (
            <List.Item>
              <List.Content>- {beat}</List.Content>
            </List.Item>
          ))}
          <List.Item>
            {/* <List.Icon name="mail" /> */}
            <List.Content>Goals: {goals}</List.Content>
          </List.Item>
          <List.Item>
            {/* <List.Icon name="mail" /> */}
            <List.Content>Audience: {audience}</List.Content>
          </List.Item>
          <List.Item>
            {/* <List.Icon name="calendar" /> */}
            <List.Content>Hypothesis {hypothesis}</List.Content>
          </List.Item>
          <List.Item>
            {/* <List.Icon name="calendar" /> */}
            <List.Content>Lifecycle {lifecycle}</List.Content>
          </List.Item>
          <List.Item>
            {/* <List.Icon name="marker" /> */}
            <List.Content>TopicType:</List.Content>
          </List.Item>
          {topicType.map(topic => (
            <List.Item>
              <List.Content>- {topic}</List.Content>
            </List.Item>
          ))}
          <List.Item>
            {/* <List.Icon name="mail" /> */}
            <List.Content>Format:</List.Content>
          </List.Item>
          {format.map(f => (
            <List.Item>
              <List.Content>- {f}</List.Content>
            </List.Item>
          ))}
        </List>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Confirm</Button>
      </div>
    );
  }
}

export default Confirmation;
