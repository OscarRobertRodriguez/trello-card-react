
import React from 'react';
import PropTypes from 'prop-types';
import List from './List';





const ListGroup = ({lists}) => {
  return (
    <div className="lists__container">
      {lists.map(list => {
        return <List list={list} key={list.id}/>
      })}
    </div>
  )
}


ListGroup.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListGroup; 




