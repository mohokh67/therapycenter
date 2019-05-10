import React from 'react';

const style = {
  cursor: 'pointer',
  fontWeight: 'bold'
};

export const UserUpdate = props => {
  return (
    <>
    <p>Click<span onClick={() => props.setName('Habib')} style={style}> here </span>to update name</p>
    <br /><br />
    </>
  );
}
