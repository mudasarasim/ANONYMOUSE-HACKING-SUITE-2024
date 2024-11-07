import React, { useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './Photos.css'; // Assuming you have a CSS file for custom styles

const Photos = () => {
    const images = [
        { src: 'logo.png', title: 'Image 1' },
        { src: 'logo.png', title: 'Image 2' },
        { src: 'logo.png', title: 'Image 3' },
    ];

    // Handle mouse hover states to trigger animation
    const [flippedIndex, setFlippedIndex] = useState(null);

    // CSS for 3D flip effect
    const handleMouseEnter = (index) => {
        setFlippedIndex(index);
    };

    const handleMouseLeave = () => {
        setFlippedIndex(null);
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
                            <h2 className='mb-4'><i className='fa fa-image'></i> Photos</h2>
                            {images.map((image, index) => (
                                <div key={index} className="col-md-4" style={{marginTop: '180px'}}>
                                    <div
                                        className={`card image-card ${flippedIndex === index ? 'flipped' : ''}`}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="card-inner">
                                            <div className="card-front">
                                                <img src={image.src} alt={image.title} className="status-image" />
                                            </div>
                                            <div className="card-back">
                                                <div className="image-title">{image.title}</div>
                                            </div>
                                        </div>
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

export default Photos;
