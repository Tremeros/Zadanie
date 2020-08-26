import React from 'react';
import {connect} from 'react-redux';
import {deleteRecord} from '../actions/records';

const _ListItem = ({deleteRecord, item: {id, name, language, description, initRelease}}) => {

    
  
    return (        
            <tr key={id}>
                <td>{name}</td>
                <td>{language}</td>
                <td>{description}</td>
                <td>{initRelease}</td>
                <td><button className='ui button' onClick={() => deleteRecord(id)}>Delete</button></td>
            </tr>
        
    )
}

ListItem.propTypes = {
    deleteRecord: PropTypes.func.isRequired
}

export const ListItem = connect(null, {deleteRecord})(_ListItem);