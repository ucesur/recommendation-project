import React, { useState, useEffect } from 'react';
import '../styles/inputtag.css';
import Tag from './Tag'

const InputTag = ({onChange:setKeyword}) => {

  const [tags, setTags] = useState([]);
  const [input, setInput] = useState();

  const onKeyDown = (e) => {
    let val = e.target.value;
    if ((e.key === ' ' || e.key === ',') && val) {
      val = val.replace(/\s/g, '').replace(',','');
      setInput('');
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase()) ||
          val === '' ||
          val === ',') {
        return;
      }
      setTags([...tags,val]);
    }
    else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
    else if (e.key === 'Enter') {
      val = val.replace(/\s/g, '').replace(',','');
      if (val) {
        if (!tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          setTags([...tags,val]);
          setInput('');
        }
      }
    }
  }

  const onChange = (e) => {
    let val = e.target.value;
    val = val.replace(/\s/g, '').replace(',','');
    console.log(val);
    setInput(val)
  }

  useEffect(() => {setKeyword(tags)}, [tags]);

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
            <Tag id={i} text={tag} onAction={removeTag}/>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input value={input} type="text" style={BarStyling}
                 onKeyDown={onKeyDown} onChange={onChange}/>
        </li>
      </ul>
    </div>
    );
}

export default InputTag
