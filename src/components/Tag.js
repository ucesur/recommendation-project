import React from 'react';
import Chip from '@material-ui/core/Chip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Tag = ({id, text, onAction:removeTag, basic}) => {

  return (
    <>
    {
      basic ? (
        <Chip label={text} variant="outlined"/>
      ):(
        <Chip label={text} onDelete={() => {removeTag(id)}}
          deleteIcon={<HighlightOffIcon />} variant="outlined"
        />)
    }
    </>
  );
}

export default Tag
