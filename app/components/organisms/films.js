import React from 'react'
import Slider from 'react-slick';

const settings = {
  arrows: true,
  dots: false,
  autoplay: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
  { breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 2,
      arrows: false,
    }
  }]
}

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class Films extends React.Component {
  handleImageLoad= () => {
    console.log('yup')
    if (imagesLoaded(this.movie_item)) return this.props.onLoad()
  }

  render() {
    return (
      <Slider {...settings}>
        {this.props.films.map(film =>
          <div className="m__movie-item" key={film.id} ref={el => { this.movie_item = el }}>
            <div className="item-container" onMouseEnter={this.props.onMouseEnter}>
              <img src={film.images.image[0].src} onLoad={this.handleImageLoad}/>

              <aside>
                <p>{film.title}</p>
              </aside>
            </div>

            <p>{film.title}</p>
          </div>
        )} 
      </Slider>
    )
  }
}

export default Films