import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './Button/Button';
import { Component } from 'react';
import { fetchImages } from '../services/fetchImages';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page)
        .then(resp => {
          this.setState(({ images }) => ({
            images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
            totalImages: resp.totalHits,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  hendleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1, isLoading: true }));
  };

  handleSubmit = query => {
    this.setState({ query, isLoading: true });
  };

  reanderButtonOnLOader = () => {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      this.state.images.length !== 0 &&
        this.state.images.length < this.state.totalImages && (
          <Button onClick={this.hendleLoadMore} />
        )
    );
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {this.reanderButtonOnLOader()}
      </div>
    );
  }
}
