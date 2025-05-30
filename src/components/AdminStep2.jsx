import React, { useState } from 'react'
import { FaPlus, FaCalendarAlt, FaMinusCircle, FaArchive, FaTimesCircle, FaCheckCircle, FaRegQuestionCircle, FaSlidersH, FaCogs } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function AdminStep2({ handleStepChange }) {
    const [formData, setFormData] = useState({
        examName: '',
        firstStartTime: '',
        lastStartTime: '',
        duration: '',
        mobileCamera: false,
        studentUpload: false,
        globalProctoring: false,
    });
    const [isSwitchOn, setIsSwitchOn] = useState({
        isDurationOn: false,
        includeMobile: false,
        uploadExam: false,
        isGlobalOn: true
    });

    const toggleSwitch = (switchName) => {
        setIsSwitchOn(prevState => ({
            ...prevState,
            [switchName]: !prevState[switchName]
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    return (
        <>
            <div className='center-grid-lower d-flex justify-content-between align-items-start'>
                <div className="card p-3 w-100">
                    <h4>New Exam <span className="text-muted">(Live Proctoring)</span></h4>

                    <div className='w-50'>
                        <div className="step-2-details my-2">
                            <label >Exam Name</label>
                            <input
                                type="text"
                                name="examName"
                                value={formData.examName}
                                onChange={handleChange} />
                        </div>
                        <div className="step-2-details my-2">
                            <label >First Start Time</label>
                            <input
                                type="text"
                                name="firstStartTime"
                                value={formData.firstStartTime}
                                onChange={handleChange} />
                        </div>
                        <div className="step-2-details my-2">
                            <label >Last Start Time</label>
                            <input
                                type="text"
                                name="lastStartTime"
                                value={formData.lastStartTime}
                                onChange={handleChange} />
                        </div>
                        <div className="step-2-details my-2">
                            <label >Duration (in minutes)</label>
                            <div className='d-flex justify-content-between align-items-center'>
                                <input
                                    type="text"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange} />
                                <div className={`switch ${isSwitchOn.isDurationOn ? 'on' : 'off'}`} onClick={() => { toggleSwitch("isDurationOn") }}>
                                    <span className="switch-text">{isSwitchOn.isDurationOn ? 'Yes' : 'No'}</span>
                                    <div className="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className="step-2-details my-2">
                            <label >Include mobile camera?</label>
                            <div className='d-flex justify-content-end align-items-center'>
                                <div className={`switch ${isSwitchOn.includeMobile ? 'on' : 'off'}`} onClick={() => { toggleSwitch("includeMobile") }}>
                                    <span className="switch-text">{isSwitchOn.includeMobile ? 'Yes' : 'No'}</span>
                                    <div className="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className="step-2-details my-2">
                            <label >Students upload exam?</label>
                            <div className='d-flex justify-content-end align-items-center'>
                                <div className={`switch ${isSwitchOn.uploadExam ? 'on' : 'off'}`} onClick={() => { toggleSwitch("uploadExam") }}>
                                    <span className="switch-text">{isSwitchOn.uploadExam ? 'Yes' : 'No'}</span>
                                    <div className="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div className="step-2-details my-2">
                            <label >Global proctoring?</label>
                            <div className='d-flex justify-content-end align-items-center'>
                                <div className={`switch ${isSwitchOn.isGlobalOn ? 'on' : 'off'}`} onClick={() => { toggleSwitch("isGlobalOn") }}>
                                    <span className="switch-text">{isSwitchOn.isGlobalOn ? 'Yes' : 'No'}</span>
                                    <div className="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 d-flex justify-content-between">
                        <button className="btn-prev" onClick={() => { handleStepChange("step2", "step1") }}>Previous step</button>
                        <button className="btn-next" onClick={() => { handleStepChange("step2", "step3") }}>Next step</button>
                    </div>
                </div>
            </div>
            <div className='right-grid-lower d-flex justify-content-start align-items-start'>
                <div className='steps-content-grid'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <h5>Step 2 - Exam Details</h5>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <FaRegQuestionCircle size={70} color='red' />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <FaCogs size={40} color="#555555" />
                        <p className='text-center'>Fill in the exam details, including the duration of the exam and when students may begin their exam.</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='steps-completion-grid'>
                            <div className="steps-filled"></div>
                            <div className="steps-filled"></div>
                            <div className="steps-pending"></div>
                            <div className="steps-pending"></div>
                            <div className="steps-pending"></div>
                        </div>
                        <span className='bold-text'>2 of 5</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminStep2
