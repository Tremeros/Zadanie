import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getRecords} from '../actions/records';
import {List} from './List';
import {Form} from './Form';
import {Alert} from './Alert';
import {Loading} from './Loading';

class _App extends React.Component {
   

   componentDidMount() {
     this.props.getRecords();
   }
 
    render() {       
        return (
            <div className='ui container'>
                <h1 className='ui header'>Hi there</h1>
                 <Form/>
                 <Alert error={this.props.error}/>
                 {this.props.loading ? <Loading /> : <List />}                
            </div>
        )
    }
}

_App.propTypes = {
    records: PropTypes.array.isRequired,
    error: PropTypes.array.isRequired,
    getRecords: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

const mapStateToProps = state => {
    return {
      records: state.records.records,
      error: state.records.error,
      loading: state.records.loading
    }
   }

export const App = connect(mapStateToProps, {getRecords})(_App);