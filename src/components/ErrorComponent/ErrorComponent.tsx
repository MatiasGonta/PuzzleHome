import React from 'react'
import { Link } from 'react-router-dom';
import { PuzzleHomeBadge } from '../PuzzleHomeBadge';

interface ErrorComponentInterface {
    error: string;
}

const ErrorComponent: React.FC<ErrorComponentInterface> = ({ error }) => {
    return (
        <div className="error-container">
            <PuzzleHomeBadge />

            <div className="error">
                <div className="error__head">
                    <div className="error__head__wrapper">
                        <div className="error__head__wrapper__circle"></div>
                        <div className="error__head__wrapper__circle"></div>
                        <div className="error__head__wrapper__circle"></div>
                    </div>
                </div>

                <div className="error__icon">
                    <svg width="100%" height="100%" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                </div>

                <div className="error__info">
                    <h1 className="error__info__title">Error</h1>
                    <p className="error__info__message">{error}</p>
                    <Link to='/' className="puzzle-home-button">
                        <span>Return to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent