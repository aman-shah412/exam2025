import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiCornerUpLeft, FiCornerUpRight, FiAlignLeft, FiAlignCenter, FiAlignRight, FiAlignJustify, FiFileText } from 'react-icons/fi'
import { BsTypeBold, BsTypeItalic } from 'react-icons/bs'
import { RiIndentDecrease, RiIndentIncrease } from 'react-icons/ri'
import { HiLink } from 'react-icons/hi'

function AdminStep4({ handleStepChange }) {
  return (
    <>
      <div className='center-grid-lower d-flex justify-content-between align-items-start'>
        <div className="card p-3 w-100">
          <h4>Instructions for students <span className="text-muted">(must be written in English)</span></h4>
          <div className='w-50'>
            <div className="step-3-details my-1">
              <label className=''>Type in anything else that needs to be mentioned</label>
            </div>
          </div>
          <div className='w-100'>
            <div className='text_format d-flex'>
              <div style={{ width: "5.5rem", borderRight: "2px solid rgb(206, 205, 205)" }} className='d-flex align-items-center justify-content-between p-2'>
                <div>
                  <FiCornerUpLeft opacity={0.5} size={30} />
                </div>
                <div>
                  <FiCornerUpRight opacity={0.5} size={30} />
                </div>
              </div>
              <div style={{ width: "10rem", borderRight: "2px solid rgb(206, 205, 205)" }}>
                <select className="form-select h-100 py-0" aria-label="Default select example">
                  <option value="paragraph" >Paragraph</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ width: "5.5rem", borderRight: "2px solid rgb(206, 205, 205)" }} className='d-flex align-items-center justify-content-between p-2'>
                <div>
                  <BsTypeBold size={30} />
                </div>
                <div>
                  <BsTypeItalic size={30} />
                </div>
              </div>
              <div style={{ width: "12rem", borderRight: "2px solid rgb(206, 205, 205)" }} className='d-flex align-items-center justify-content-between p-2'>
                <div>
                  <FiAlignLeft size={30} />
                </div>
                <div>
                  <FiAlignCenter size={30} />
                </div>
                <div>
                  <FiAlignRight size={30} />
                </div>
                <div>
                  <FiAlignJustify size={30} />
                </div>
              </div>
              <div style={{ width: "5.5rem", borderRight: "2px solid rgb(206, 205, 205)" }} className='d-flex align-items-center justify-content-between p-2'>
                <div>
                  <RiIndentDecrease size={30} />
                </div>
                <div>
                  <RiIndentIncrease size={30} />
                </div>
              </div>
              <div style={{ borderRight: "2px solid rgb(206, 205, 205)" }} className='d-flex align-items-center justify-content-between p-2'>
                <div>
                  <HiLink size={30} />
                </div>
              </div>
            </div>
            <textarea name="proctorInstruction" /*value={step3Details.proctorInstruction} onChange={handleStep3InputChange}*/ className='w-100' id="" rows="6"></textarea>
          </div>
          <div className="mt-2 d-flex justify-content-between">
            <button className="btn-prev" onClick={() => { handleStepChange("step4", "step3") }}>Previous step</button>
            <button className="btn-next" onClick={() => { handleStepChange("step4", "step5") }}>Next step</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminStep4
