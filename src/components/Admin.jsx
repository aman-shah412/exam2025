import React from 'react'
import "../appCSS/admin.css"
import Navbar from './Navbar'
import { FaPlus, FaCalendarAlt, FaMinusCircle, FaArchive, FaTimesCircle, FaCheckCircle, FaRegQuestionCircle, FaSlidersH } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import SecondaryNavbar from './SecondaryNavbar';

function Admin() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className='admin-main-content-box'>
                <Navbar />
                <div className='admin-content'>
                    <SecondaryNavbar title={"Administration"} handleHomeClick={handleHomeClick} />
                    <div className='admin-lower-grid d-flex justify-content-start align-items-center'>
                        <div className='admin-lower-grid-content'>
                            <div className='left-grid-lower d-flex flex-column justify-content-start align-items-start'>
                                <div>
                                    <button className='admin-create-btn'>
                                        <FaPlus />
                                        <span>Create Exam</span>
                                    </button>
                                </div>
                                <div className='mt-4'>
                                    <button className='admin-overview-btn'>Overview</button>
                                </div>
                                <div className='mt-4' style={{ width: "100%" }}>
                                    <input className='admin-search-exam' type="text" placeholder='Search' />
                                </div>
                                <div className='mt-4 d-flex align-items-center'>
                                    <FaCalendarAlt />
                                    <span className='ms-3'>OPEN EXAMS</span>
                                    <FaMinusCircle className='ms-3' />
                                </div>
                                <div className='mt-3 d-flex align-items-center'>
                                    <FaRegPenToSquare />
                                    <span className='ms-3'>DRAFT EXAMS</span>
                                    <FaMinusCircle className='ms-3' />
                                </div>
                                <div className='mt-3 d-flex align-items-center'>
                                    <FaArchive />
                                    <span className='ms-3'>CLOSED EXAMS</span>
                                    <FaMinusCircle className='ms-3' />
                                </div>
                            </div>
                            <div className='center-grid-lower d-flex justify-content-between align-items-center'>
                                <div className='exam-type-tile d-flex flex-column justify-content-between'>
                                    <h5>Classroom</h5>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Live proctoring</span>
                                        <FaTimesCircle size={30} color='#AE4C4C' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Web Camera</span>
                                        <FaTimesCircle size={30} color='#AE4C4C' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Mobile Camera</span>
                                        <FaTimesCircle size={30} color='#AE4C4C' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Screen Sharing</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div style={{ fontSize: "18px" }}>
                                        <button className='select-btn'>Select</button>
                                    </div>
                                </div>
                                <div className='exam-type-tile d-flex flex-column justify-content-between'>
                                    <h5>Record & Review</h5>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Live proctoring</span>
                                        <FaTimesCircle size={30} color='#AE4C4C' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Web Camera</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Mobile Camera (optional)</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Screen Sharing</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div style={{ fontSize: "18px" }}>
                                        <button className='select-btn'>Select</button>
                                    </div>
                                </div>
                                <div className='exam-type-tile d-flex flex-column justify-content-between'>
                                    <h5>Live Proctoring</h5>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Live proctoring</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Web Camera</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Mobile Camera (optional)</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                        <span>Screen Sharing</span>
                                        <FaCheckCircle size={30} color='#6CB98D' />
                                    </div>
                                    <div style={{ fontSize: "18px" }}>
                                        <button className='select-btn'>Select</button>
                                    </div>
                                </div>
                            </div>
                            <div className='right-grid-lower d-flex justify-content-start align-items-start'>
                                <div className='steps-content-grid'>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <h5>Step 1 - Exam Type</h5>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <FaRegQuestionCircle size={70} color='red' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <FaSlidersH size={50} color='#555555' />
                                        <p className='text-center'>Some exams require only screensharing others may need a live proctor, choose accordingly.</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='steps-completion-grid'>
                                            <div className="steps-filled"></div>
                                            <div className="steps-pending"></div>
                                            <div className="steps-pending"></div>
                                            <div className="steps-pending"></div>
                                            <div className="steps-pending"></div>
                                        </div>
                                        <span className='bold-text'>1 of 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
