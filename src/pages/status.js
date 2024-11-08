import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Status = () => {
    // Define the five different video arrays
    const videos1 = [
        { src: 'https://www.facebook.com/video1', title: 'FB Reel 1' },
        { src: 'https://www.facebook.com/video2', title: 'FB Reel 2' },
        { src: 'https://www.facebook.com/video3', title: 'FB Reel 3' },
        { src: 'https://www.facebook.com/video4', title: 'FB Reel 4' },
        { src: 'https://www.facebook.com/video5', title: 'FB Reel 5' }
    ];

    const videos2 = [
        { src: 'https://www.facebook.com/video6', title: 'FB Reel 1234' },
        { src: 'https://www.facebook.com/video7', title: 'FB Reel 678' },
        { src: 'https://www.facebook.com/video8', title: 'FB Reel 8' },
        { src: 'https://www.facebook.com/video9', title: 'FB Reel 9' },
        { src: 'https://www.facebook.com/video10', title: 'FB Reel 10' }
    ];

    const videos3 = [
        { src: 'https://www.facebook.com/video11', title: 'FB Reel 11' },
        { src: 'https://www.facebook.com/video12', title: 'FB Reel 12' },
        { src: 'https://www.facebook.com/video13', title: 'FB Reel 13' },
        { src: 'https://www.facebook.com/video14', title: 'FB Reel 14' },
        { src: 'https://www.facebook.com/video15', title: 'FB Reel 15' }
    ];

    const videos4 = [
        { src: 'https://www.facebook.com/video16', title: 'FB Reel 16' },
        { src: 'https://www.facebook.com/video17', title: 'FB Reel 17' },
        { src: 'https://www.facebook.com/video18', title: 'FB Reel 18' },
        { src: 'https://www.facebook.com/video19', title: 'FB Reel 19' },
        { src: 'https://www.facebook.com/video20', title: 'FB Reel 20' }
    ];

    const videos5 = [
        { src: 'https://www.facebook.com/video21', title: 'FB Reel 21' },
        { src: 'https://www.facebook.com/video22', title: 'FB Reel 22' },
        { src: 'https://www.facebook.com/video23', title: 'FB Reel 23' },
        { src: 'https://www.facebook.com/video24', title: 'FB Reel 24' },
        { src: 'https://www.facebook.com/video25', title: 'FB Reel 25' }
    ];

    // Use state to determine which set of videos to display
    const [videoId, setVideoId] = useState(1); // Default videoId is 1

    // Extract videoId from URL query string
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('videoId'), 10);
        if (id >= 1 && id <= 5) {
            setVideoId(id);
        }
    }, []);

    // Map the video arrays to a condition based on the videoId
    const videos = 
        videoId === 1 ? videos1 :
        videoId === 2 ? videos2 :
        videoId === 3 ? videos3 :
        videoId === 4 ? videos4 :
        videos5;

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
                            <h2 className='mb-4'><i className='fa fa-eye'></i> Status, Reels And Stories</h2>
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

export default Status;
