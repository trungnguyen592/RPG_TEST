import React from 'react';
import '../styles/Character.css';


const Character = ({ name, points }) => {
    const renderPoints = () => {
        let blocks = [];
        for (let i = 0; i < points; i++) {
            blocks.push(<div key={i} className="point-block"></div>);
        }
        return blocks;
    };

    return (
        <div className="character">
            <h3>{name}</h3>
            <div className="points-container">
                {renderPoints()}
            </div>
        </div>
    );
};

export default Character;
