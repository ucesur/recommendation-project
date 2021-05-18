import React, { useState, useEffect } from 'react';
import Tag from './Tag'
import { TextField, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
    setInput(val)
  }

  useEffect(() => {setKeyword(tags)}, [tags]);

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i,1);
    setTags(newTags);
  }

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minHeight: (tags.length>0) ? '0vh' : '100vh',
      width: "100%",
      alignItems: (tags.length>0) ? 'flex' : 'center',
      flexDirection: 'column',
      display: "flex",
      justifyContent: (tags.length>0) ? 'flex-start' : 'center',
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Box display="flex" flexDirection="row"  padding={1}>
        { tags.map((tag, i) => (
            <Tag id={i} text={tag} onAction={removeTag} basic={false}/>
        ))}
        <TextField  className={classes.textField} id="outlined-basic"
                   variant="outlined" value={input}
                   onKeyDown={onKeyDown} onChange={onChange}/>
      </Box>
    </div>
    );
}

export default InputTag
