import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';

const SmallPhotoCard = ({photo, id}) => {
  function srcset(photo, size, rows = 1, cols = 1) {
    return {
      src: `${photo}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${photo}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <ImageListItem key={id} cols={photo?.cols || 4} rows={photo?.rows || 1}>
      <img
        {...srcset(photo?.imageUrl, 121, photo?.rows, photo?.cols)}
        alt={photo?.description}
        title={photo?.name}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default SmallPhotoCard;