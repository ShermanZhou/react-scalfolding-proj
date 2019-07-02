import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loadPlan } from './/actions/plan.action';
class App extends React.Component{

  componentDidMount(){
    if (this.plan == null) {
      this.props.loadPlan();
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.props.plan && this.props.plan.map(t =>
            (<div key={t.day}>{t.day} {t.value}</div>)
          )
        }
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    plan: state.plan.data
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    loadPlan: () => dispatch(loadPlan())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
