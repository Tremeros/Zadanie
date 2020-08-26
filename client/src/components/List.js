import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Alert} from './Alert';
import {ListItem} from './ListItem';


const _List = ({records, error, getRecodrs}) => {

    

    const list = records.map(item => <ListItem key={item.id} item={item}/>)
    
    return (
        console.log(records),
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
        </div>
    )
}

_List.propTypes = {
    records: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
       records: state.records.records
    }
   }

export const List = connect(mapStateToProps)(_List);