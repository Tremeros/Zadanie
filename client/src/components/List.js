import React from 'react';
import {connect} from 'react-redux';
import {Alert} from './Alert';
import {ListItem} from './ListItem';

const _List = (props) => {
    const list = props.records.map(item => <ListItem key={item.id} item={item}/>)
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
                {props.error && <Alert msg={props.error}/>}
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