import React from 'react';
import { connect } from 'react-redux';
import { filterList } from '../actions/index'

const mapDispatchToProps = dispatch => {
  return { filterList: filter => dispatch(filterList(filter)) };
};

class Filter extends React.Component {
  constructor(){
    super();
    this.state = {
      filters: {
        name: ''
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleClick(event){
    event.preventDefault();
    var { filters } = this.state
    this.props.filterList({filters});
  };

  handleChange(event) {
    this.setState({
      filters: {
        [event.currentTarget.name]: event.currentTarget.value
      }
    })
  }

  render(){

    return (
      <div>
        <div className='example'>
          <input type="text" name="name" value={this.state.filters['name']} onChange={this.handleChange} />
          <button name='show random' onClick={ this.handleClick }>
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div>
          <div className='form-group'>
            <label>Distinction</label>
            <input key={Math.random(1000)} type="checkbox" name="distinction" checked={this.state.filters['distinction']} onChange={(event) => { this.onChange(event)} } />

            <label>Fail</label>
            <input key={Math.random(1000)} type="checkbox" name="fail" checked={this.state.filters['fail']} onChange={(event) => { this.onChange(event)} } />
          </div>
          <div className='form-group'>
            <label>First Class</label>
            <input key={Math.random(1000)} type="checkbox" name="first_class" checked={this.state.filters['first_class']} onChange={(event) => { this.onChange(event)} } />

            <label>Second Class</label>
            <input key={Math.random(1000)} type="checkbox" name="second_class" checked={this.state.filters['second_class']} onChange={(event) => { this.onChange(event)} } />
          </div>
        </div>
      </div>
    );
  };
}

export default connect(null, mapDispatchToProps)(Filter);

