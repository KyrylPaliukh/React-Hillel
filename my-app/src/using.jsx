import React, { useState } from 'react';

const Collapse = ({ text, opened }) => {
    const [isOpen, setIsOpen] = useState(opened);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <p>
                <a className="btn btn-primary" href="#" data-bs-toggle="collapse" onClick={handleToggle} aria-expanded={!isOpen}>
                    Link with href
                </a>
            </p>
            <div className={`collapse${isOpen ? ' show' : ''}`}>
                <div className="card card-body">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
