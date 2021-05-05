import React from 'react';
import Chip from '@material-ui/core/Chip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Tag = ({id, text, onAction:removeTag}) => {
  return (
    <>
      <Chip
        label={text}
        onDelete={() => {removeTag(id)}}
        deleteIcon={<HighlightOffIcon />}
        variant="outlined"
      />
    </>
  );
}

export default Tag
