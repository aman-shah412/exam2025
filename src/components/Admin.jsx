import React, { useState } from 'react'
import "../appCSS/admin.css"
import Navbar from './Navbar'
// import { FaPlus, FaCalendarAlt, FaMinusCircle, FaArchive, FaTimesCircle, FaCheckCircle, FaRegQuestionCircle, FaSlidersH } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as FIIcons from "react-icons/fi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import SecondaryNavbar from './SecondaryNavbar';
import AdminStep2 from './AdminStep2';
import AdminStep3 from './AdminStep3';
import AdminStep4 from './AdminStep4';
import AdminStep5 from './AdminStep5';

function Admin() {
    const navigate = useNavigate();
    

    const [steps, setSteps] = useState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
    })
    const [stepDetails, setStepDetails] = useState({
        step: "1",
        heading: "Step 1 - Exam Type",
        icon: <FaIcons.FaSlidersH size={50} color='#555555' />,
        description: "Some exams require only screensharing others may need a live proctor, choose accordingly.",
        progressBar: "20",
    })
    let stepDetailsTemplate = {
        step1: {
            step: "1",
            heading: "Step 1 - Exam Type",
            icon: <FaIcons.FaSlidersH size={50} color='#555555' />,
            description: "Some exams require only screensharing others may need a live proctor, choose accordingly.",
            progressBar: "20",
        },
        step2: {
            step: "2",
            heading: "Step 2 - Exam Details",
            icon: <FaIcons.FaCogs size={50} color='#555555' />,
            description: "Fill in the exam details, including the duration of the exam and when students may begin their exam.",
            progressBar: "40",
        },
        step3: {
            step: "3",
            heading: "Step 3 - Exam Restrictions",
            icon: <FIIcons.FiFileText size={50} color='#555555' />,
            description: "Add exam restrictions for the reviewers, such as whether books, specific websites, or calculators are allowed.",
            progressBar: "60",
        },
        step4: {
            step: "4",
            heading: "Step 4 - Exam Details",
            icon: <FIIcons.FiFileText size={50} color='#555555' />,
            description: "Add the exam link or the exam document and any additional instructions for the exam taker.",
            progressBar: "80",
        },
        step5: {
            step: "5",
            heading: "Step 5 - Exam Student Registration",
            icon: <FIIcons.FiFileText size={50} color='#555555' />,
            description: "Add students to exam for registration.",
            progressBar: "100",
        }
    }

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleStepChange = (currStep, nextStep) => {
        setSteps(prevSteps => ({
            ...prevSteps,
            [currStep]: false,
            [nextStep]: true
        }));
        setStepDetails(stepDetailsTemplate[nextStep])
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
                                        <FaIcons.FaPlus />
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
                                    <FaIcons.FaCalendarAlt />
                                    <span className='ms-3 exam-type-label'>OPEN EXAMS</span>
                                    <FaIcons.FaMinusCircle className='ms-3' />
                                </div>
                                <div className='mt-3 d-flex align-items-center'>
                                    <FaRegPenToSquare />
                                    <span className='ms-3 exam-type-label'>DRAFT EXAMS</span>
                                    <FaIcons.FaMinusCircle className='ms-3' />
                                </div>
                                <div className='mt-3 d-flex align-items-center'>
                                    <FaIcons.FaArchive />
                                    <span className='ms-3 exam-type-label'>CLOSED EXAMS</span>
                                    <FaIcons.FaMinusCircle className='ms-3' />
                                </div>
                            </div>
                            {steps.step1 && <>
                                <div className='center-grid-lower d-flex justify-content-between align-items-center'>
                                    <div className='exam-type-tile d-flex flex-column justify-content-between'>
                                        <h5>Classroom</h5>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Live proctoring</span>
                                            <FaIcons.FaTimesCircle size={30} color='#AE4C4C' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Web Camera</span>
                                            <FaIcons.FaTimesCircle size={30} color='#AE4C4C' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Mobile Camera</span>
                                            <FaIcons.FaTimesCircle size={30} color='#AE4C4C' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Screen Sharing</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div style={{ fontSize: "18px" }}>
                                            <button className='select-btn'>Select</button>
                                        </div>
                                    </div>
                                    <div className='exam-type-tile d-flex flex-column justify-content-between'>
                                        <h5>Record & Review</h5>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Live proctoring</span>
                                            <FaIcons.FaTimesCircle size={30} color='#AE4C4C' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Web Camera</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Mobile Camera (optional)</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Screen Sharing</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div style={{ fontSize: "18px" }}>
                                            <button className='select-btn'>Select</button>
                                        </div>
                                    </div>
                                    <div className='exam-type-tile d-flex flex-column justify-content-between'>
                                        <h5>Live Proctoring</h5>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Live proctoring</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Web Camera</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Mobile Camera (optional)</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center' style={{ fontSize: "18px" }}>
                                            <span>Screen Sharing</span>
                                            <FaIcons.FaCheckCircle size={30} color='#6CB98D' />
                                        </div>
                                        <div style={{ fontSize: "18px" }}>
                                            <button className='select-btn' onClick={() => { handleStepChange("step1", "step2") }}>Select</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                            }
                            {steps.step2 && <AdminStep2 handleStepChange={handleStepChange} />}
                            {steps.step3 && <AdminStep3 handleStepChange={handleStepChange} />}
                            {steps.step4 && <AdminStep4 handleStepChange={handleStepChange} />}
                            {steps.step5 && <AdminStep5 handleStepChange={handleStepChange} />}
                            <div className='right-grid-lower d-flex justify-content-start align-items-start'>
                                <div className='steps-content-grid'>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <h5>{stepDetails.heading}</h5>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <FaIcons.FaRegQuestionCircle size={70} color='red' />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        {stepDetails.icon}
                                        <p className='text-center'>{stepDetails.description}</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div class="progress steps-completion" role="progressbar">
                                            <div className={`progress-bar w-${stepDetails.progressBar}`}></div>
                                        </div>
                                        <span className='bold-text'>{stepDetails.step} of 5</span>
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
