import { Component } from "react"
import css from "./Reviews.module.css"

export class Reviews extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleClick = (event) => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1 
            }
        })
    }

    render(){
        return (
            <div>
                <div className='reviewsContainer'>
                    <h2 className="reviewsContainer__title">Please leave feedback</h2>
                    <ul className={css.list}>
                        <li className="reviewsContainer__item">
                            <button className={css.btn} onClick={this.handleClick}>GOOD</button>
                        </li>
                        <li className="reviewsContainer__item">
                            <button className={css.btn} onClick={this.handleClick}>NEUTRAL</button>
                        </li>
                        <li className="reviewsContainer__item">
                            <button className={css.btn} onClick={this.handleClick}>BAD</button>
                        </li>
                    </ul>
                </div>
                <div className="reviews-results__container">
                    <ul className={css.list}>
                        <li className="reviews-results__item">Good: {this.state.good}</li>
                        <li className="reviews-results__item">Neutral: {this.state.neutral}</li>
                        <li className="reviews-results__item">Bad: {this.state.bad}</li>
                    </ul>
                </div>
            </div>
            
        )
    } 
}


//  onClick={handleClick}