
import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({
    handleClickGood,
    handleClickNeutral,
    handleClickBad, stateValue}) => {

    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    //     total: 0
    // }

        return (
            <div>
                <div className='reviewsContainer'>
                    <h2 className="reviewsContainer__title">Please leave feedback</h2>
                    <ul className={css.list}>
                        <li className="reviewsContainer__item">
                            <button className={css.btn} onClick={handleClickGood}>GOOD</button>
                        </li>
                        <li className="reviewsContainer__item">
                            <button className={css.btn} onClick={handleClickNeutral}>NEUTRAL</button>
                        </li>
                        <li className="reviewsContainer__item">
                            <button className={css.btn} onClick={handleClickBad}>BAD</button>
                        </li>
                    </ul>
                </div>
            </div>
            
        )
}


//  onClick={handleClick}