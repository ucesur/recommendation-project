import React from 'react';

const Tag = ({id, text, onAction:removeTag}) => {
  return (
    <div>
      {text}
      <button type="button" onClick={() => {removeTag(id); }}>+</button>
    </div>
  );
}

export default Tag
