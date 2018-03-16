import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {createPressed} from "./actions"

const styles = {
  headerRightStyle: {
    fontSize: 20,
    color: '#007aff',
    paddingRight: 15
  }
};

class _HeaderButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.createPressed()}>
        <Text style={styles.headerRightStyle}>Add</Text>
      </TouchableOpacity>
    );
  }
}

const HeaderButton = connect(null, {createPressed})(_HeaderButton);

const RouterComponent = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: "Please Login"
    }
  },
  List: {
    screen: EmployeeList,
    navigationOptions: {
      title: "Employee List",
      headerRight: <HeaderButton/>
    }
  },
  Create: {
    screen: EmployeeCreate,
    navigationOptions: {
      title: "Create Employee"
    }
  },
  Edit: {
    screen: EmployeeEdit,
    navigationOptions: {
      title: "Edit Employee"
    }
  }
}, {
  initialRouteName: 'Login'
});

export default RouterComponent;