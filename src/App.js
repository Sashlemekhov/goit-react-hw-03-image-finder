import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Loader from './Components/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class App extends Component {
  state = {
    searchQuery: null,
    isLoading: false,
    page: 1,
    error: null,
    hits: [],
    totalHits: ''
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.state.searchQuery;
    if (prevSearchQuery !== nextSearchQuery) {
      this.getImageData();
    };
  };

  getImageData = () => {
    const { searchQuery, page } = this.state;

    const apiKey = '19936431-665ecc9218a1e5c693259ad16';

    this.setState({ isLoading: true });
    
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(prevState => ({
            hits: [...prevState.hits, ...result.hits],
            page: prevState.page + 1,
            totalHits: result.totalHits
          }));
        },
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  onSubmit = (data) => {
    if (!data) {
      toast.warn('Please, enter any data');
      return;
    };

    this.setState({ searchQuery: data, hits: [], page: 1 });
  };


  render() {
    const { hits, isLoading, totalHits, page } = this.state;
    return (
      <>
        
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery imageData={hits} >
          
        </ImageGallery>
        {(hits.length > 0) && (((totalHits / 12) + 1) > page) && <Button loadMore={this.getImageData} />}
        {isLoading && <Loader />}
      </>
    );
  };
};

export default App;
