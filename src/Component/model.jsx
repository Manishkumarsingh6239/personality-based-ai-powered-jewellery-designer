import { usePollinationsImage } from '@pollinations/react';

const GeneratedImageComponent = ({ query, onLoad }) => {
  const imageUrl = usePollinationsImage(query, {
    width: 850,
    height: 700,
    seed: 42,
    model: 'flux',
    nologo: true,
    enhance: true
  });

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Generated Jewelry"
          className="jewelry-image"
          onLoad={onLoad}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GeneratedImageComponent;