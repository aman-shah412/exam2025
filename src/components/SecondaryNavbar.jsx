import React from 'react'
import "../appCSS/secondarynavbar.css"

function SecondaryNavbar({title, handleHomeClick}) {
    return (
        <div className='mini-nav d-flex justify-content-start align-items-center'>
            <div className='common-grid'>
                <div className='left-grid bold-text d-flex justify-content-start align-items-center'>
                    {title}
                </div>
                <div className='center-grid d-flex justify-content-start align-items-center'>
                    <button className='home-btn bold-text' onClick={handleHomeClick}>Home</button>
                </div>
                <div className='right-grid bold-text d-flex justify-content-start align-items-center'>
                    Your institute currently has no tokens.
                </div>
            </div>
        </div>
    )
}

export default SecondaryNavbar
