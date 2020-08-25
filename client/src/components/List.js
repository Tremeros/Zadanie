import React from 'react';
import {connect} from 'react-redux';
import {Alert} from './Alert';
import {ListItem} from './ListItem';

const _List = ({records, error}) => {
    const list = records.map(item => <ListItem key={item.id} item={item}/>)
    return (
        
        <div>
            <table className='ui celled table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Description</th>
                    <th>initRelease</th>
                </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
                {error && <Alert msg={error}/>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
       records: state.records.records,
       error: state.records.error
    }
   }

export const List = connect(mapStateToProps)(_List);