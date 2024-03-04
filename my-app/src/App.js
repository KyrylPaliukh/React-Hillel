import React, { useState } from 'react';

function Collapse({ text, opened }) {
    const [isOpen, setIsOpen] = useState(opened);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <p>
                <a className="btn btn-primary" href="#" onClick={handleToggle} role="button" aria-expanded={isOpen ? 'true' : 'false'}>
                    Link with href
                </a>
            </p>
            <div className={`collapse ${isOpen ? 'show' : ''}`}>
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Collapse;

