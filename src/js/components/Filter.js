import React from 'react';
import { connect } from 'react-redux';
import { filterList } from '../actions/index'

const mapDispatchToProps = dispatch => {
  return { filterList: list => dispatch(filterList(list)) };
};

class Filter extends React.Component {
  constructor(){
    super();
    this.state = {
      list: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.state.list.push(123)
    this.props.filterList({foo_list: [Math.random()]});
  };

  render(){

    return (
      <div>
        Hello
        <button name='show random' onClick={ this.handleClick }>Save</button>
      </div>
    );
  };
}

export default connect(null, mapDispatchToProps)(Filter);

