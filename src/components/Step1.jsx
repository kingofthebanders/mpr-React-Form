import React, { Component } from "react";
import {
  Form,
  Button,
  Radio,
  Select,
  TextArea,
  Checkbox
} from "semantic-ui-react";

class Step1 extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <Form color="green">
        <h1 className="ui centered">Step 1</h1>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        <Form.Field
          style={{ minHeight: 300 }}
          control={TextArea}
          label="Story Description"
          placeholder="Tell us a bit about the story idea..."
          value={values.description}
          onChange={this.props.handleChange("description")}
        />
        {/* <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field> */}
        {/* <Form.Field>
          <Select
            label="Gender"
            options={options}
            placeholder="Gender"
            name="gender"
            value={values.gender}
            onChange={this.props.handleDropDownChange}
          />
        </Form.Field> */}

        {/* <Form.Field>
          <h5>What Beat is this Story in?</h5>
          Selected value: <b>{values.radioValue}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Health Care"
            value="Health Care"
            checked={values.beats.includes("Health Care")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Housing"
            value="Housing"
            checked={values.beats.includes("Housing")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Politics"
            value="Politics"
            checked={values.beats.includes("Politics")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Elections"
            value="Elections"
            checked={values.beats.includes("Elections")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Policy"
            value="Policy"
            checked={values.beats.includes("Policy")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Aging"
            value="Aging"
            checked={values.beats.includes("Aging")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Water"
            value="Water"
            checked={values.beats.includes("Water")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Weather"
            value="Weather"
            checked={values.beats.includes("Weather")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Climate Change (weather)"
            value="Climate Change (weather)"
            checked={values.beats.includes("Climate Change (weather)")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Climate Change (other)"
            value="Climate Change (other)"
            checked={values.beats.includes("Climate Change (other)")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Agriculture"
            value="Agriculture"
            checked={values.beats.includes("Agriculture")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Race and Immigration"
            value="Race and Immigration"
            checked={values.beats.includes("Race and Immigration")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Criminal Justice/Disparities"
            value="Criminal Justice/Disparities"
            checked={values.beats.includes("Criminal Justice/Disparities")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Opiods"
            value="Opiods"
            checked={values.beats.includes("Opiods")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Public Safety"
            value="Public Safety"
            checked={values.beats.includes("Public Safety")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Courts"
            value="Courts"
            checked={values.beats.includes("Courts")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Police"
            value="Police"
            checked={values.beats.includes("Police")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Outdoors/Recreation"
            value="Outdoors/Recreation"
            checked={values.beats.includes("Outdoors/Recreation")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Arts and Culture"
            value="Arts and Culture"
            checked={values.beats.includes("Arts and Culture")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="k-12 Eduction (racial)"
            value="k-12 Eduction (racial)"
            checked={values.beats.includes("k-12 Eduction (racial)")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Sports"
            value="Sports"
            checked={values.beats.includes("Sports")}
            onChange={this.props.handleCheckBoxGroupChange}
          />
        </Form.Field> */}

        {/* <Form.Group>
          <Form.Input
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={this.props.handleDropDownChange}
          />
          <Form.Input
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={this.props.handleDropDownChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
        <Form.Field>
          Selected value: <b>{values.radioValue}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label="Choose this"
            name="radioGroup"
            value="this"
            checked={values.radioValue === "this"}
            onChange={this.props.handleRadioChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Or that"
            name="radioGroup"
            value="that"
            checked={values.radioValue === "that"}
            onChange={this.props.handleRadioChange}
          />
        </Form.Field> */}
        {/* <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.TextArea
          label="Tell us a bit about the story idea"
          placeholder="Text here..."
          onChange={this.props.handleChange("description")}
          defaultValue={values.description}
        /> */}
      </Form>
    );
  }
}

export default Step1;
