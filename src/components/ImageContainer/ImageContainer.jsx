import React from 'react';
import Container from '@mui/material/Container';
import SmallPhotoCard from '../SmallPhotoCard/SmallPhotoCard';
import BigImage from '../BigImage/BigImage';
import ImageList from '@mui/material/ImageList';

const ImageContainer = ({searchWord, gallery}) => {
  let url = 'http://localhost:3055/';

  if (searchWord && (searchWord.length > 15 || searchWord.length <= 2)) {
    return (<h2>search term too small</h2>);
  } else {
    url = 'http://localhost:3055/searchImage?title=' + searchWord;
  }


  return (
    <Container maxWidth="md">
      {gallery ? <ImageList
        sx={{ width: '100%', height: 'auto' }}
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
          {imageData.map((image) => (<SmallPhotoCard photo={image} />))}
        </ImageList>
      : <BigImage photo={imageData} />}
    </Container>
  );
};

export default ImageContainer;