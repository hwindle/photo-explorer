import React from 'react';
import ImageContainer from '../components/ImageContainer/ImageContainer';

const RandomImage = () => {
  return (
    <section>
      <h2>Random Image</h2>
      <ImageContainer searchWord={'none'} gallery={false} />
    </section>
  );
};

export default RandomImage;