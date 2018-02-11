import React  from 'react'
import ReactDOM          from 'react-dom'

import Films  from "@/app/components/organisms/films"
import Loader from '@/app/components/organisms/loader'

const api_route = "http://www.snagfilms.com/apis/films.json?limit=10"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.findLast = this.findLast.bind(this)
    this.state = {
      films: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    fetch(api_route)
      .then(res => res.json())
      .then(data => this.setState({ 
        films: data.films.film,
        isLoading: false,
      }) )
      .catch(err => {
        this.setState({ isLoading: false })
        console.error(err)
      });
  }

  findLast() {
    let elements = document.getElementsByClassName('slick-active')
    let last = document.getElementsByClassName('last-of-type')

    if (last.length !== 0) {
      last[0].classList.remove('last-of-type')
    }

    return elements[elements.length-1].classList.add('last-of-type')
  }

  renderLoader() {
    const { films } = this.state

    if (this.state.isLoading) {
      return <Loader />
    } else {
      return <Films onMouseEnter={this.findLast} films={films}/>
    }
  }

  render() {
    return(
      <main className="t__home-page">
        <div className="o__movies-grid">
          {this.renderLoader()}
        </div>
      </main>
    )
  }
}

export default Home
