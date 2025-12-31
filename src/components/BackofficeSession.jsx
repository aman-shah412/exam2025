import React, { useState, useRef } from 'react'
import "../appCSS/backofficesession.css"
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaLink, FaRegFolder } from "react-icons/fa";
import { MdOutlineReplay10, MdOutlineForward10, MdVolumeUp, MdOutlineFullscreen } from "react-icons/md";
import { PiPencil } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";


function BackofficeSession() {

    const [zoomed, setZoomed] = useState(false);
    const [seekTime, setSeekTime] = useState(0);
    const [active, setActive] = useState(false);
    const [playBackText, setplayBackText] = useState("1x");
    const navigate = useNavigate();


    const webcamRef = useRef(null);
    const screenshareRef = useRef(null);

    const handleHomeClick = () => {
        navigate('/');
    }

    const handleSeekTime = (e) => {
        setSeekTime(e.target.value);
        e.target.style.setProperty('--filled-width', `${(e.target.value / e.target.max) * 100}%`);
    }

    const playBack1 = () => {
        if (webcamRef.current) {
            webcamRef.current.playbackRate = 1
            screenshareRef.current.playbackRate = 1
            setplayBackText("1x")
            setActive(false)
        } else if (screenshareRef.current) {
            screenshareRef.current.playbackRate = 1
            setplayBackText("1x")
            setActive(false)
        }
    }

    const playBack2 = () => {
        if (webcamRef.current) {
            webcamRef.current.playbackRate = 2
            screenshareRef.current.playbackRate = 2
            setplayBackText("2x")
            setActive(true)
        } else if (screenshareRef.current) {
            screenshareRef.current.playbackRate = 2
            setplayBackText("2x")
            setActive(true)
        }
    }

    const playBack4 = () => {
        if (webcamRef.current) {
            webcamRef.current.playbackRate = 4
            screenshareRef.current.playbackRate = 4
            setplayBackText("4x")
            setActive(true)
        } else if (screenshareRef.current) {
            screenshareRef.current.playbackRate = 4
            setplayBackText("4x")
            setActive(true)
        }
    }

    const playBack6 = () => {
        if (webcamRef.current) {
            webcamRef.current.playbackRate = 6
            screenshareRef.current.playbackRate = 6
            setplayBackText("6x")
            setActive(true)
        } else if (screenshareRef.current) {
            screenshareRef.current.playbackRate = 6
            setplayBackText("6x")
            setActive(true)
        }
    }

    const playBack8 = () => {
        if (webcamRef.current) {
            webcamRef.current.playbackRate = 8
            screenshareRef.current.playbackRate = 8
            setplayBackText("8x")
            setActive(true)
        } else if (screenshareRef.current) {
            screenshareRef.current.playbackRate = 8
            setplayBackText("8x")
            setActive(true)
        }
    }

    const handleZoomPhotos = () => {
        setZoomed(!zoomed)
    }

    return (
        <>
            <div className='backoffice-main-content-box'>
                <Navbar />
                <div className='backoffice-session-main-container'>
                    <SecondaryNavbar title={"Backoffice"} handleHomeClick={handleHomeClick} />
                    <div className='d-flex justify-content-center' style={{ height: "100%" }}>
                        <div className='mt-3 backoffice-session-inner-content'>
                            <div className='top-div-backoffice-session d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='fs-3'>Student Session</p>
                                </div>
                                <div>
                                    <p className='d-inline-flex fs-3'>Exam Status : Review</p>
                                    <button className='ms-3 admin-create-btn'>Review Session</button>
                                </div>
                            </div>
                            <div className="bottom-div-backoffice-session">
                                <div className='left-grid-backoffice-session'>
                                    <div className='backoffice-mini-player'>
                                        <div className="backoffice-streams-container">
                                            <div className="left-panel"></div>
                                            <div className="right-container">
                                                <div className="right-top"></div>
                                                <div className="right-bottom"></div>
                                            </div>
                                        </div>
                                        <div className='backoffice-controller d-flex'>
                                            <div className='utility-buttons d-flex'>
                                                <button className='control-button d-flex justify-content-center align-items-center'>
                                                    <FaPlay size={15} />
                                                </button>
                                                <button className='control-button d-flex justify-content-center align-items-center'>
                                                    <MdOutlineReplay10 size={23} />
                                                </button>
                                                <button className='control-button d-flex justify-content-center align-items-center'>
                                                    <MdOutlineForward10 size={23} />
                                                </button>
                                            </div>
                                            <div className='seekbar-div px-2 pb-1 flex-grow-1 d-flex flex-column justify-content-between'>
                                                <div className='d-flex justify-content-between'>
                                                    <span className='timer fw-bold'>00:00:00</span>
                                                    <span className='timer fw-bold'>00:00:00</span>
                                                </div>
                                                <input type="range" name="seekbar" className='range' min={0} max={100} value={seekTime} onChange={handleSeekTime} />
                                            </div>
                                            <div className='utility-buttons d-flex'>
                                                <div className='control-button tool d-flex justify-content-center align-items-center'>
                                                    <span className='fw-bold' style={{ 'fontSize': '12px' }}>1x</span>

                                                    <div className="d-flex speed-tool-tip">
                                                        <button onClick={playBack1} className="control-button">
                                                            <span className='fw-bold' style={{ 'fontSize': '12px' }}>1x</span>
                                                        </button>
                                                        <button onClick={playBack2} className="control-button">
                                                            <span className='fw-bold' style={{ 'fontSize': '12px' }}>2x</span>
                                                        </button>
                                                        <button onClick={playBack4} className="control-button">
                                                            <span className='fw-bold' style={{ 'fontSize': '12px' }}>4x</span>
                                                        </button>
                                                        <button onClick={playBack6} className="control-button">
                                                            <span className='fw-bold' style={{ 'fontSize': '12px' }}>6x</span>
                                                        </button>
                                                        <button onClick={playBack8} className="control-button">
                                                            <span className='fw-bold' style={{ 'fontSize': '12px' }}>8x</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button className='control-button d-flex justify-content-center align-items-center'>
                                                    <MdVolumeUp size={23} />
                                                </button>
                                                <button className='control-button d-flex justify-content-center align-items-center'>
                                                    <MdOutlineFullscreen size={23} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='attachments d-flex justify-content-between'>
                                        <button className='visited-or-files d-flex'>
                                            <div className='linked-icon d-flex align-items-center justify-content-center'>
                                                <FaLink size={30} color='white' />
                                            </div>
                                            <div className='d-flex align-items-center justify-content-center fs-5' style={{ height: "100%", width: "calc(100% - 3rem)" }}>
                                                Visited Pages
                                            </div>
                                        </button>
                                        <button className='visited-or-files d-flex' disabled>
                                            <div className='linked-icon d-flex align-items-center justify-content-center'>
                                                <FaRegFolder size={30} color='white' />
                                            </div>
                                            <div className='d-flex align-items-center justify-content-center fs-5' style={{ height: "100%", width: "calc(100% - 3rem)" }}>
                                                Files
                                            </div>
                                        </button>
                                    </div>

                                    <div className='backoffice-comments-main-div'>
                                        <p className='fs-4 mb-3'>Comments</p>
                                        <div className='backoffice-incidents'>
                                            <div className='backoffice-comment-div d-flex mt-2'>
                                                <div className='backoffice-comment-info ms-2 flex-grow-1'>
                                                    <span style={{ fontSize: "18px" }} className='fw-medium'> 00:00:00 - 00:01:15</span>
                                                    <div className='fw-bold mb-2'>SSSSSSSSSSSSSSSSSSSSSSSSSSSS</div>
                                                </div>
                                                <div className='backoffice-comment-utility d-flex'>
                                                    {/* <div className='blue d-flex justify-content-center align-items-center'>
                                                        <PiPencil size={40} color='white'/>
                                                    </div> */}
                                                    <div className='red d-flex justify-content-center align-items-center'>
                                                        <FaRegTrashCan size={30} color='white' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='backoffice-comment-div d-flex mt-2'>
                                                <div className='backoffice-comment-info ms-2 flex-grow-1'>
                                                    <span style={{ fontSize: "18px" }} className='fw-medium'> 00:00:00 - 00:01:15</span>
                                                    <div className='fw-bold mb-2'>SSSSSSSSSSSSSSSSSSSSSSSSSSSS</div>
                                                </div>
                                                <div className='backoffice-comment-utility d-flex'>
                                                    {/* <div className='blue d-flex justify-content-center align-items-center'>
                                                        <PiPencil size={40} color='white'/>
                                                    </div> */}
                                                    <div className='red d-flex justify-content-center align-items-center'>
                                                        <FaRegTrashCan size={30} color='white' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='backoffice-comment-div d-flex mt-2'>
                                                <div className='backoffice-comment-info ms-2 flex-grow-1'>
                                                    <span style={{ fontSize: "18px" }} className='fw-medium'> 00:00:00 - 00:01:15</span>
                                                    <div className='fw-bold mb-2'>SSSSSSSSSSSSSSSSSSSSSSSSSSSS</div>
                                                </div>
                                                <div className='backoffice-comment-utility d-flex'>
                                                    {/* <div className='blue d-flex justify-content-center align-items-center'>
                                                        <PiPencil size={40} color='white'/>
                                                    </div> */}
                                                    <div className='red d-flex justify-content-center align-items-center'>
                                                        <FaRegTrashCan size={30} color='white' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='backoffice-comment-div d-flex mt-2'>
                                                <div className='backoffice-comment-info ms-2 flex-grow-1'>
                                                    <span style={{ fontSize: "18px" }} className='fw-medium'> 00:00:00 - 00:01:15</span>
                                                    <div className='fw-bold mb-2'>SSSSSSSSSSSSSSSSSSSSSSSSSSSS</div>
                                                </div>
                                                <div className='backoffice-comment-utility d-flex'>
                                                    {/* <div className='blue d-flex justify-content-center align-items-center'>
                                                        <PiPencil size={40} color='white'/>
                                                    </div> */}
                                                    <div className='red d-flex justify-content-center align-items-center'>
                                                        <FaRegTrashCan size={30} color='white' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='right-grid-backoffice-session'>
                                    <div className={`${zoomed ? "bo_photos_fixed" : "bo_photos_relative"} bo_photos d-flex gap-4 w-100`} onClick={handleZoomPhotos}>
                                        <div className='bo_photos_tile w-50'>
                                            {/* <img src="/photo.png" alt="" className='w-100' /> */}
                                            <img src="" alt="" className='w-100' />
                                            <div className='w-100 text-center'>Face Photo</div>
                                        </div>
                                        <div className='bo_photos_tile w-50'>
                                            {/* <img src="/id.png" alt="" className='w-100' /> */}
                                            <img src="" alt="" className='w-100' />
                                            <div className='w-100 text-center'>ID Card</div>
                                        </div>
                                        <div className='click_to_zoom d-none'>
                                            <h5>Click to zoom</h5>
                                        </div>
                                    </div>
                                    <div className='info_tag'>Info</div>
                                    <div className="bo_info_box px-3 py-2">
                                        <div className="bo_info_mini_grid row my-2">
                                            <span className='col-3 fw-bold'>Name:</span>
                                            <span className='col-9'>Aman Shah</span>
                                        </div>
                                        <div className="bo_info_mini_grid row my-2">
                                            <span className='col-3 fw-bold'>Email:</span>
                                            <span className='col-9'>Aman@gmail.com</span>
                                        </div>
                                        <div className="bo_info_mini_grid row my-2">
                                            <span className='col-3 fw-bold'>Exam name:</span>
                                            <span className='col-9 d-flex align-items-center'>Demo</span>
                                        </div>
                                        <div className="bo_info_mini_grid row my-2">
                                            <span className='col-3 fw-bold'>Start time:</span>
                                            <span className='col-9'>16:03:06, Oct 25th 2021</span>
                                        </div>
                                        <div className="bo_info_mini_grid row my-2">
                                            <span className='col-3 fw-bold'>End time:</span>
                                            <span className='col-9'>16:07:47, Oct 25th 2021</span>
                                        </div>
                                        <div className="bo_info_mini_grid row my-2 fw-bold">
                                            <span className='col-3'>Streams included:</span>
                                            <span className='col-9 d-flex align-items-center gap-2'>
                                                <div className="col-3 custom_bg_green">Screen</div>
                                                <div className="col-3 custom_bg_green">Webcam</div>
                                                <div className="col-3 custom_bg_grayed">Mobile</div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bo_chats w-100 d-flex">
                                        <div className='col-6 d-flex justify-content-end'>
                                            <button className='d-flex col-7 p-0' disabled>
                                                <div className='bo_chats_icon disabled_red d-flex align-items-center justify-content-center'>
                                                    <BsChatDots size={30} color='white' />
                                                </div>
                                                <div className='d-flex align-items-center justify-content-center fw-bold'>
                                                    Tawk Messages
                                                </div>
                                            </button>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end'>
                                            <button className='d-flex col-7 p-0'>
                                                <div className='bo_chats_icon blue d-flex align-items-center justify-content-center'>
                                                    <BsChatDots size={30} color='white' />
                                                </div>
                                                <div className='d-flex align-items-center justify-content-center fw-bold' style={{ color: "var(--text-color)" }}>
                                                    Proctor Messages
                                                </div>
                                            </button>
                                        </div>
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

export default BackofficeSession
