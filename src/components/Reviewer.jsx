import React, { useState, useRef } from 'react'
import "../appCSS/reviewer.css"
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar';
import { FaPlay, FaLink, FaRegFolder, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineReplay10, MdOutlineForward10, MdVolumeUp, MdOutlineFullscreen } from "react-icons/md";
import { RxCheckCircled } from 'react-icons/rx'
import { VscError } from 'react-icons/vsc';
import { PiPencil } from "react-icons/pi";
import { FaRegTrashCan, FaAngleRight } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";

function Reviewer() {
  const [zoomed, setZoomed] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [active, setActive] = useState(false);
  const [playBackText, setplayBackText] = useState("1x");


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
      <div className='backoffice-main-content-box' style={fullScreen ? { overflow: "hidden" } : {}}>
        <Navbar />
        <div className='backoffice-session-main-container'>
          <div className='rv-main-wrapper'>
            <div className='rv-stream-wrapper'>
              <div className='rv-stream-block rv-stream-one expanded-stream'>
                <video src="/sample.mp4" width={"100%"}></video>
              </div>
              <div className='rv-stream-block rv-stream-two'>
                <video src="/sample.mp4" width={"100%"}></video>
              </div>
              <div className='rv-stream-block rv-stream-three'>
                <video src="/sample.mp4" width={"100%"}></video>
              </div>
              <div className='rv-stream-action-block'>
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
                    <button onClick={() => { setFullScreen(!fullScreen) }} className='control-button d-flex justify-content-center align-items-center'>
                      <MdOutlineFullscreen size={23} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='rv-right-wrapper'>
              <div className="rv-evaluation-wrapper">
                <div></div>
                <div className="rv-eval-btn d-flex">
                  <div className='d-flex align-items-center justify-content-center p-1 rv-eval-cancel'>
                    <FaSignOutAlt size={40} color='#FFFFFF' />
                  </div>
                  <div className='d-flex align-items-center justify-content-center p-1 w-100 fw-bolder'>
                    Cancel and exit
                  </div>
                </div>
                <div className="rv-eval-btn d-flex">
                  <div className='d-flex align-items-center justify-content-center p-1 rv-eval-unreviewable'>
                    <VscError size={40} color='#FFFFFF' />
                  </div>
                  <div className='d-flex align-items-center justify-content-center p-1 w-100 fw-bolder'>
                    Mark as Unreviewable
                  </div>
                </div>
                <div className="rv-eval-btn d-flex">
                  <div className='d-flex align-items-center justify-content-center p-1 rv-eval-review'>
                    <RxCheckCircled size={40} color='#FFFFFF' />
                  </div>
                  <div className='d-flex align-items-center justify-content-center p-1 w-100 fw-bolder'>
                    Review
                  </div>
                </div>
              </div>
              <div className='rv-visited-page-wrapper mt-3 d-flex flex-column'>
                <h4>Visited Pages</h4>
                <div className='rv-visited-page'>
                  There are no visited pages available for this session
                </div>
              </div>
              <div className='rv-insert-comment-wrapper d-flex flex-row-reverse'>
                <div className='d-flex align-items-center justify-content-center p-1 rv-insert-comment'>
                  <FaAngleRight size={40} color='#FFFFFF' />
                </div>
                <input className='w-100' type="text" placeholder='Please insert a comment' />
              </div>
              <div className='rv-last-comment-wrapper d-flex align-items-center justify-content-start'>
                <input className='w-100' type="text" disabled placeholder='Last comment entered' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviewer