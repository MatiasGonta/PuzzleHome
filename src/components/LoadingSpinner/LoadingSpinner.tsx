import React from 'react';

interface LoadingSpinnerInterface { }

const LoadingSpinner: React.FC<LoadingSpinnerInterface> = () => {
    return (
        <div className="spinner-container">
            <img
                className="spinner-container__img"
                src="/src/assets/puzzleshome-logo.png"
                alt="Puzzle Home logo"
            />
            <h2 className="spinner-container__title">Puzzle Home</h2>
            <div className="spinner">
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
                <div className="spinner__box"></div>
            </div>
        </div>
    )
}

export default LoadingSpinner