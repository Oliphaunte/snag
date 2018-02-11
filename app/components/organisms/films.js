import React from 'react'
import Slider from 'react-slick';

class Films extends React.Component {
  render() {
    let settings = {
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

    return (
      <Slider {...settings}>
        {this.props.films.map(film =>
          <div className="m__movie-item" key={film.id}>
            <div className="item-container" onMouseEnter={this.props.onMouseEnter}>
              <img src={film.images.image[0].src} />

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