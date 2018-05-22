import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    filter_params: state.foo_list
  }
}

class List extends React.Component {
  render(){
    return (
      <div>
        { this.props.filter_params }
      </div>
      );
  }
}

export default connect(mapStateToProps)(List);

