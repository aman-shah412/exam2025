import React from 'react'
import "../appCSS/backoffice.css"
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar';
import { useNavigate } from 'react-router-dom';

function Backoffice() {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleExamClick = () => {
    navigate('/backoffice/exam');
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
              <h4>Exams</h4>
              <div className='mt-4'>
                <table className="table table-borderless">
                  <thead>
                    <tr className='text-center'>
                      <th scope="col">Exam name</th>
                      <th scope="col">Date of creation</th>
                      <th scope="col">Last exam taken on</th>
                      <th scope="col">Attendance</th>
                      <th scope="col">Reviewed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='backoffice-tr' onClick={handleExamClick}>
                      <td>Demo</td>
                      <td>16th Jun 2024</td>
                      <td>24th Aug 2024</td>
                      <td>
                        <h3 className='mb-0 fw-bolder'>67%</h3>
                        <span className='fw-bold'>(172/192)</span>
                      </td>
                      <td>N/A</td>
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

export default Backoffice