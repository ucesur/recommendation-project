import React, { useState } from 'react';
import '../styles/inputtag.css';

const InputTag = ({onChange:setKeyword}) => {

  const [tags, setTags] = useState([]);

  const onKeyDown = (e) => {
    let val = e.target.value;
    if ((e.key === ' ' || e.key === ',') && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        e.target.value=null;
        return;
      }
      setTags([...tags,val]);
      e.target.value=null;
    }
    else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
    else if (e.key === 'Enter' && tags.length > 0) {
      if (val) {
        if (!tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          setTags([...tags,val]);
          e.target.value=null;
        }
      }
      console.log(val);
      setKeyword(val);
    }
  }

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i,1);
    setTags(newTags);
  }

  const BarStyling = {background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        { tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => {removeTag(i); }}>+</button>
          </li>
        ))}
        <li className="input-tag__tags__input"><input type="text" style={BarStyling} onKeyDown={onKeyDown}/></li>
      </ul>
    </div>
    );
}


export default InputTag
