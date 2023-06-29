import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
    handleOptionClick,
    stateValue,
}) => {

    const onOptionClick = event => {
        handleOptionClick(event.target.name);
    };

    return (
        <div>
            <div className="reviewsContainer">
                <h2 className="reviewsContainer__title">Please leave feedback</h2>
                <ul className={css.list}>
                    <li className="reviewsContainer__item">
                        <button
                            name='good'
                            className={css.btn}
                            onClick={event => onOptionClick(event)}
                        >
                            GOOD
                        </button>
                    </li>
                    <li className="reviewsContainer__item">
                        <button
                            name='neutral'
                            className={css.btn}
                            onClick={event => onOptionClick(event)}
                        >
                            NEUTRAL
                        </button>
                    </li>
                    <li className="reviewsContainer__item">
                        <button
                            name='bad'
                            className={css.btn}
                            onClick={event => onOptionClick(event)}
                        >
                            BAD
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

//  onClick={handleClick}
