import React, { useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
// import './Status.css'; // Import custom CSS

const Videos = () => {
    const videos = [
        { src: '2.mp4', title: 'Video 1' },
        { src: '2.mp4', title: 'Video 2' },
        { src: '2.mp4', title: 'Video 3' },
    ];

    const videoRefs = useRef(videos.map(() => React.createRef()));

    const handleMouseOver = (index) => {
        videoRefs.current[index].current.play();
    };

    const handleMouseOut = (index) => {
        const video = videoRefs.current[index].current;
        video.pause();
        video.currentTime = 0;
    };

    const handleFullScreen = (index) => {
        const video = videoRefs.current[index].current;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
        video.play();
    };

    return (
        <div className="container-scroller">
            <Sidebar />
            <div className="container-fluid page-body-wrapper">
                <nav className="navbar p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo-mini" href="index.html">
                            <img src="../../../assets/images/logo-mini.svg" alt="logo" />
                        </a>
                    </div>
                    <Navbar />
                </nav>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <h2 className='mb-4'><i className='fa fa-play'></i> Videos</h2>
                            {videos.map((video, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="card video-card">
                                        <video
                                            ref={videoRefs.current[index]}
                                            src={video.src}
                                            className="status-video"
                                            muted
                                            loop
                                            onMouseOver={() => handleMouseOver(index)}
                                            onMouseOut={() => handleMouseOut(index)}
                                            onClick={() => handleFullScreen(index)}
                                        ></video>
                                        <div className="video-title">{video.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <footer className="footer"></footer>
                </div>
            </div>
        </div>
    );
};

export default Videos;
