import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from "./common";
import {connect} from 'react-redux';
import {employeeCreate} from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  console.log("mapStateToProps", name, phone, shift);
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate);