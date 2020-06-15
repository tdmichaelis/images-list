import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
    this.state = {
      height: 0
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      this.setState({
        height: this.imageRef.current.clientHeight
      })
    })
  }

  render() {
    let { alt_description, urls } = this.props.image
    return (
      <img style={{ gridRowEnd: `span ${this.state.height}`}} ref={this.imageRef} alt={alt_description} src={urls.small} />
    )
  }
}

export default ImageCard