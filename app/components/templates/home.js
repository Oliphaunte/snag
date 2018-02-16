import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
// Store //
import { connect } from 'react-redux';
import { itemsFetch } from '@/app/store/actions/items';

import Films from "@/app/components/organisms/films"
import Loader from '@/app/components/organisms/loader'

const api_url = "http://www.snagfilms.com/apis/films.json?limit=10"

class Home extends React.Component {
  static propTypes = {
    films: PropTypes.array,
    isLoading: PropTypes.bool,
  }

  componentDidMount() {
    this.props.fetchData(api_url)
  }

  findLast() {
    let elements = document.getElementsByClassName('slick-active')
    let last = document.getElementsByClassName('last-of-type')

    if (last.length !== 0) {
      last[0].classList.remove('last-of-type')
    }

    return elements[elements.length - 1].classList.add('last-of-type')
  }

  renderLoader() {
    const {films} = this.props
    
    if (this.props.isLoading) {
      return <Loader />
    }

    return <Films onMouseEnter={this.findLast} films={films} />
  }

  render() {
    return (
      <main className="t__home-page">
        <div className="o__movies-grid">
          {this.renderLoader()}
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.items,
    isLoading: state.itemsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetch(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
