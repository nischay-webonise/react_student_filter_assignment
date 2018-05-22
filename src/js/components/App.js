import React from 'react';
// import { connect } from 'react-redux';
import Filter from '../components/Filter';
import List from '../components/List';

// const mapDispatchToProps = dispatch => {
//   return filterList => dispatch(filterList);
// };

// const mapStateToProps = state => {
//   return filter_params => state.list;
// }

class App extends React.Component {
  // constructor(){
  //   super(props);
  //   this.state = {
  //     list: []
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(){
  //   this.props.filterList(Math.random(10000000));
  // };

  // render(){
  //   return (
  //     <div>
  //       <button name='show random' onClick={ handleClick } />
  //       { filter_params }
  //     </div>
  //   );
  // };

  render(){
    return (
      <div>
        <Filter />
        <List />
      </div>
    );
  };

}

// connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
