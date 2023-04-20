// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  clickOnLeftArrow = () => {
    const {count} = this.state
    console.log('clicked')

    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  clickOnRightArrow = () => {
    const {count} = this.state
    console.log('rightclicked')

    if (count === 3) {
      this.setState({count: 3})
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {count} = this.state
    const imageDetails = reviewsList[count]

    const {imgUrl, username, description, companyName} = imageDetails

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Reviews</h1>

          <div className="carousel-container">
            <div>
              <button
                type="button"
                data-testid="leftArrow"
                onClick={this.clickOnLeftArrow}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
            </div>
            <div className="description-container">
              <img src={imgUrl} className="image" alt={username} />
              <p className="username">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <div>
              <button
                type="button"
                data-testid="rightArrow"
                onClick={this.clickOnRightArrow}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
