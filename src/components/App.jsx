import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './Button/Button';
import { useEffect, useState } from 'react';
import { fetchImages } from '../services/fetchImages';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function resImages() {
      try {
        const resp = await fetchImages(query, page);
        setImages(prevImages =>
          page === 1 ? [...resp.hits] : [...prevImages, ...resp.hits]
        );
        setTotalImages(resp.totalHits);
      } finally {
        setIsLoading(false);
      }
    }
    resImages();
  }, [page, query]);

  const hendleLoadMore = () => {
    setPage(page => page + 1);
    setIsLoading(true);
  };

  const handleSubmit = e => {
    setQuery(e);
    setImages([]);
    setPage(1);
  };

  const reanderButtonOnLOader = () => {
    return isLoading ? (
      <Loader />
    ) : (
      images.length !== 0 && images.length < totalImages && (
        <Button onClick={hendleLoadMore} />
      )
    );
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {reanderButtonOnLOader()}
    </div>
  );
};
