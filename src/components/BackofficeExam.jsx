import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar';
import { useNavigate } from 'react-router-dom';

function BackofficeExam({examName}) {


    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const handleExamClick = () => {
        navigate('/backoffice/session');
    }

    return (
        <>
            <div className='backoffice-main-content-box'>
                <Navbar />
                <div className='backoffice-inner-content'>
                    <SecondaryNavbar title={"Backoffice"} handleHomeClick={handleHomeClick} />
                    <div className='backoffice-inner-content-lower container'>
                        <div style={{ width: "100%" }}>
                            <input className='admin-search-exam' type="text" placeholder='Search for exams or students' style={{ width: "45%", borderRadius: "5px" }} />
                        </div>
                        <div className='mt-3 p-3 backoffice-exams-outer-div'>
                            <h4>{examName}</h4>
                            <div className='mt-4'>
                                <table className="table table-borderless">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col">Student</th>
                                            <th scope="col">Exam status</th>
                                            <th scope="col">Start time</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Attendance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='backoffice-tr' onClick={handleExamClick}>
                                            <td>Aman</td>
                                            <td>In Review</td>
                                            <td>2023-11-20T11:04:37.811Z</td>
                                            <td>00:04:08</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackofficeExam