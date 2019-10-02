import React from 'react';
import PropTypes from 'prop-types';


const Header = ({title}) => {
  return (
    <header>
      <h3 className='list-title'>{title}</h3>
      <i className='fa fa-ellipsis-h ellipsis'></i>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;  

