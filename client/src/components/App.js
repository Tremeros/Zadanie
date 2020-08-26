import React from 'react';
import {connect} from 'react-redux';
import {getRecords} from '../actions/records';
import {List} from './List';
import {Form} from './Form';
import {Alert} from './Alert';

class _App extends React.Component {
   

   async componentDidMount() {
    await this.props.getRecords();
   }
 

    render() {

       
        return (
            <div className='ui container'>
                <h1 className='ui header'>Hi there</h1>
                <Form/>
                {this.props.error ? <Alert error={this.props.error}/> : <List /> }
            </div>
        )
    }
}

App.propTypes = {
    records: PropTypes.array,isRequired,
    error: PorpTypes.array.isRequired,
    getRecords: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
      records: state.records.records,
      error: state.records.error
    }
   }

export const App = connect(mapStateToProps, {getRecords})(_App);