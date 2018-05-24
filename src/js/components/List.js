import React from 'react';
import { connect } from 'react-redux';
import results from '../results.json';

const mapStateToProps = state => {
  return {
    filter_params: state.filters
  }
}

class List extends React.Component {
  calculate_percentage(student_marks){
    var sum = 0, percentage;
    Object.keys(student_marks).forEach(function(m){ sum += student_marks[m];});
    return parseInt(sum/3);
  }

  filter_student_name(student, val){
    return (val === undefined) || (val['name'] === '') || (student.firstName === val['name'] || student.lastName === val['name'])
  }

  filter_student_marks(student, val){
    return (val === undefined) || (val['name'] === '') || (student.firstName === val['name'] || student.lastName === val['name'])
  }


  render(){
    var { filter_params } = this.props; //shorthand notation :: this.props.filter_params
    var results_filter_by_name = results.filter((student) => {
      return this.filter_student_name(student, filter_params);
    });
    var new_results = results_filter_by_name.filter((student) => {
      return this.filter_student_marks(student, filter_params);
    });
    return (
      <div>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Percentage</th>
          </thead>
          <tbody>
            {
              new_results.map((student) => {
                return (
                  <tr key={Math.random()}>
                    <td key={Math.random()}>{ student.firstName }</td>
                    <td key={Math.random()}>{ student.lastName }</td>
                    <td key={Math.random()}>{ this.calculate_percentage(student.marks) }</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);

