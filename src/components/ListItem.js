import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from "./common";
import {connect} from 'react-redux';
import {employeeEdit} from "../actions";

class ListItem extends Component {
  onRowPress() {
    this.props.employeeEdit(this.props.employee);
  }

  render() {
    const {name} = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, {employeeEdit})(ListItem);