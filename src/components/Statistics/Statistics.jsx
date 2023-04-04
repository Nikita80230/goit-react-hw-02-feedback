import css from "./Statistics.module.css"

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
 return (<div className="reviews-results__container">
                    <ul className={css.list}>
                        <li className="reviews-results__item">Good: {good}</li>
                        <li className="reviews-results__item">Neutral: {neutral}</li>
                        <li className="reviews-results__item">Bad: {bad}</li>
                        <li className="reviews-results__item">Total: {total}</li>
                        <li className="reviews-results__item">Positive feedback: {positiveFeedback}%</li>
                    </ul>
    </div>)
}