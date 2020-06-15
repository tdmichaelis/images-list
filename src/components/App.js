import React from 'react'
import unsplash from '../services/unsplash'

// components
import SearchBar from './SearchBar'
import ImageCard from './ImageCard'
//styles
import '../styles.css'

// import Ex, { test1, testFunction } from './example'

class App extends React.Component {
  state = {
    images: []
  }

  handleSearchInput = async (term) => {
    // /search/photos
    // 5lOuz6LQzm8KwbCaYmyz3dGOoCP4I9aKFXrUkRvh7O0

    // fetch('https://api.unsplash.com/search/photos?query=cars&client_id=5lOuz6LQzm8KwbCaYmyz3dGOoCP4I9aKFXrUkRvh7O0')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })

    try {
      let { data } = await unsplash.get('/search/photos?query=' + term)
      if (data.results) {
        this.setState({
          images: data.results
        })
      }
    } catch(e) {
      return Promise.reject(e)
    }
    
  }
  renderImageList = () => {
    return this.state.images.map(image => {
      return (
        <ImageCard image={image} key={image.id} />
      )
    })
  }
  // [
  //   <ImageCard image={image} />,
  //   <ImageCard image={image} />,
  //   <ImageCard image={image} />,
  //   <ImageCard image={image} />
  // ]

  render() {
    // console.log(Ex, test1, testFunction)
    return (
      <div className="images-list-app">
        <SearchBar handleSearchInput={this.handleSearchInput} />
        <div className="images-container">
          {this.renderImageList()}
        </div>
      </div>
    )
  }
}

export default App