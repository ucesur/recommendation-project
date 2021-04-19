import React from 'react';

const Tag = ({id, text, onAction:removeTag}) => {
  return (
    <>
        {text}
        <button type="button" onClick={() => {removeTag(id); }}>+</button>
    </>
  );
}

export default Tag
