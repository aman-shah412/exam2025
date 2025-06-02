import React, { useState } from 'react'
import { FaPlus, FaCalendarAlt, FaMinusCircle, FaArchive, FaTimesCircle, FaCheckCircle, FaRegQuestionCircle, FaSlidersH, FaCheck, FaTimes, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function AdminStep5({ handleStepChange }) {
  return (
    <>
      <div className='center-grid-lower'>
        <div className="card p-3 w-100">
          <h4>Students</h4>
          <div className='w-100 d-flex align-items-center gap-4'>
            <div className='step-5-student-details-inputs w-100'>
              <input type="text" className='w-100' placeholder='Name' />
            </div>
            <div className='step-5-student-details-inputs w-100'>
              <input type="email" className='w-100' placeholder='Email' />
            </div>
            <div className='step-5-student-details-inputs w-100'>
              <input type="text" className='w-100' placeholder='Individual Info' />
            </div>
            <div className='w-100 d-flex align-items-center gap-3'>
              <FaQuestionCircle />
              <span>Skip requirements:</span>
              <input type="checkbox" name="skipRequirment" style={{ width: "2rem", height: "2rem" }} />
            </div>
            <div className='w-100 d-flex justify-content-center'>
              <button className='admin-create-btn d-flex align-items-center justify-content-center'>
                <FaPlus />
                <span className='ms-2'>Add student</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card p-2 w-100 mt-3">
          <table class="table table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col" style={{ width: "auto", minWidth: "10rem" }}>Email</th>
                <th scope="col">External ID	</th>
                <th scope="col">Individual Info	</th>
                <th scope="col">Proctor</th>
                <th scope="col">Skip Requirement</th>
                <th scope="col">Start Time</th>
                <th scope="col">Exam Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td></td>
                <td></td>
                <td>

                </td>
                <td><input type="checkbox" name="skipRequirment" style={{ width: "2rem", height: "2rem" }} /></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminStep5