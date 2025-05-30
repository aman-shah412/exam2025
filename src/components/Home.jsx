import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../appCSS/home.css"
import Navbar from './Navbar'
import { FaTachometerAlt, FaRegEye, FaUserSecret, FaWpexplorer, FaArchive, FaRegListAlt } from "react-icons/fa";


function Home() {

    const [institute, setInstitute] = useState("Demo")
    const [isReviewerOn, setIsReviewerOn] = useState(true);
    const [isProctorOn, setIsProctorOn] = useState(false);

    const handleChangeSelector = (e) => {
        setInstitute(e.target.value)
    }

    const handleChangeInstitute = () => {
        console.log(institute);
    }

    const toggleReviewSwitch = () => {
        setIsReviewerOn(!isReviewerOn);
    };

    const toggleProctorSwitch = () => {
        setIsProctorOn(!isProctorOn);
    };

    return (
        <>
            <Navbar />
            <div className="container home-main-div">
                <p className='text-center m-0'>Choose Institute</p>
                <div className='institue-selector-div text-center'>
                    <select className="institue-selector" value={institute} onChange={(e) => { handleChangeSelector(e) }}>
                        <option value="Demo">Demo</option>
                        <option value="Howard University">Howard University</option>
                        <option value="American University">American University</option>
                        <option value="Houston Baptist University">Houston Baptist University</option>
                    </select>

                    <button className='change-btn' onClick={handleChangeInstitute}>Change</button>
                </div>
                <p className='text-center m-0'>{institute}</p>

                <div className='superuser-panel'>
                    <div className='top-layer'>
                        <div className='box-container'>
                            <Link to="/administration" style={{ textDecoration: "none" }}>
                                <div className='box-container-content'>
                                    <h6>Administration</h6>
                                    <FaTachometerAlt size={70} />
                                </div>
                            </Link>
                        </div>
                        <div className='box-container'>
                            <Link to="/reviewer" style={{ textDecoration: "none" }}>
                                <div className='box-container-content'>
                                    <h6>  Reviewer </h6>
                                    <FaRegEye size={70} />
                                </div>
                            </Link>

                            <div className='switch-div'>
                                <span>Global Reviewer</span>
                                <div className={`switch ${isReviewerOn ? 'on' : 'off'}`} onClick={toggleReviewSwitch}>
                                    <span className="switch-text">{isReviewerOn ? 'Yes' : 'No'}</span>
                                    <div className="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className='box-container'>
                            <Link to="/proctor" style={{ textDecoration: "none" }}>
                                <div className='box-container-content'>
                                    <h6> Proctor</h6>
                                    <FaUserSecret size={70} />
                                </div>
                            </Link>

                            <div className='switch-div'>
                                <span>Global Proctoring</span>
                                <div className={`switch ${isProctorOn ? 'on' : 'off'}`} onClick={toggleProctorSwitch}>
                                    <span className="switch-text">{isProctorOn ? 'Yes' : 'No'}</span>
                                    <div className="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className='box-container'>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <div className='box-container-content'>
                                    <h6> Observatory </h6>
                                    <FaWpexplorer size={70} />
                                </div>
                            </Link>
                        </div>
                        <div className='box-container'>
                            <Link to="/backoffice" style={{ textDecoration: "none" }}>
                                <div className='box-container-content'>
                                    <h6> BackOffice</h6>
                                    <FaArchive size={70} />
                                </div>
                            </Link>
                        </div>
                        <div className='box-container'>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <div className='box-container-content'>
                                    <h6>  Auditor</h6>
                                    <FaRegListAlt size={70} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home