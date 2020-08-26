import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addRecord} from '../actions/records';


class _Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            language: '',
            description: '',
            initRelease: ''
        }
    }

    onChangehandle = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }
   
      submitForm = async (e) => {
          e.preventDefault();

          const record = {
            name: this.state.name,
            language: this.state.language,
            description: this.state.description,
            initRelease: this.state.initRelease
          }

          this.props.addRecord(record);
      }

    render() {
       return (
        <div className='ui segment'>
        <form className='ui form' onSubmit={this.submitForm}>
                <div className='field'>
                  <label>Name</label>
                  <input type='text' name='name' value={this.state.text} onChange={this.onChangehandle}/>
                </div>
                <div className='field'>
                  <label>Language</label>
                  <input type='text' name='language' value={this.state.text} onChange={this.onChangehandle}/>
                </div>
                <div className='field'>
                  <label>Description</label>
                  <input type='text' name='description' value={this.state.text} onChange={this.onChangehandle}/>
                </div>
                <div className='field'>
                  <label>Init release</label>
                  <input type='text' name='initRelease' value={this.state.text} onChange={this.onChangehandle}/>
                </div>
                <input type='submit' className='ui button'/>
            </form>
    </div>
       )
    }
}

_Form.propTypes = {
  addRecord: PropTypes.func.isRequired
}

export const Form = connect(null, {addRecord})(_Form);