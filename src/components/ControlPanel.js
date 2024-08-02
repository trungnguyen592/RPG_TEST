import React from 'react';

const ControlPanel = ({ onRace, onReset, showReset }) => {
    return (
        <div>
            <button onClick={onRace}>Race</button>
            {showReset && <button onClick={onReset}>Reset</button>}
        </div>
    );
};

export default ControlPanel;
