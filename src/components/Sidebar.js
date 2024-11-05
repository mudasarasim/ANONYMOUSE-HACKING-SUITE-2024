import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
    //const location = useLocation(); // Get the current location

    //const isActive = (path) => location.pathname === path; // Check if the path matches the current location

    const location = useLocation(); // Get the current location (route)
    const [isLoading, setIsLoading] = useState(false);

    // Track the active route by comparing with the current pathname
    const isActive = (path) => location.pathname === path;

    // Simulate loading state on route change (optional)
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false); // Simulate loading complete after 1 second
        }, 1000); // Adjust the timeout as necessary
        return () => clearTimeout(timeout); // Cleanup on component unmount
    }, [location]);

    return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a class="sidebar-brand brand-logo" href="../../index.html" style={{color: 'white', textDecoration: 'none ', fontWeight: 'bold'}}><img style={{width: '50px', height: '55px', marginTop: '50px', marginBottom: '50px'}} src="logo.png" alt="logo" />Anonymous</a>
                <a class="sidebar-brand brand-logo-mini" href="../../index.html"><img src="../../assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <ul class="nav" style={{marginTop: '8px'}}>
                <li class="nav-item profile">
                    <div class="profile-desc">
                        <div class="profile-pic">
                            <div class="count-indicator">
                                <img class="img-xs rounded-circle " src="assets/faces/face15.jpg" alt="jkkl" />
                                <span class="count bg-success"></span>
                            </div>
                            <div class="profile-name">
                                <h5 class="mb-0 font-weight-normal">Henry Klein</h5>
                                
                            </div>
                        </div>
                        <a href="/" id="profile-dropdown" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
                        <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                            <a href="/" class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-cog text-primary"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="/" class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-onepassword  text-info"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="/" class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-calendar-today text-success"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item nav-category">
                    <span class="nav-link">Navigation</span>
                </li>
                <li className={`nav-item menu-items ${isActive('/dashboard') ? 'active' : ''}`}>
                    <Link class="nav-link" to={'/dashboard'}>
                        <span class="menu-icon">
                            <i class="mdi mdi-speedometer"></i>
                        </span>
                        <span class="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className={`nav-item menu-items ${isActive('/whatsapp-hacking') ? 'active' : ''}`}>
                    <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span class="menu-icon">
                            <i class="mdi mdi-whatsapp" style={{color: 'green'}}></i>
                        </span>
                        <span class="menu-title">WhatsApp Hacking </span>
                        <i class="menu-arrow"></i>
                    </a>
                    
                    <div class="collapse" id="ui-basic">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item" style={{marginLeft: '-10px'}}> <Link class="nav-link" to={'/whatsapp-hacking'}>WhatsApp Account Hacking </Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item menu-items ${isActive('/facebook-hacking') ? 'active' : ''}`}>
                    <a class="nav-link" data-bs-toggle="collapse" href="#basic" aria-expanded="false" aria-controls="basic">
                        <span class="menu-icon">
                            <i class="mdi mdi-facebook" style={{color: '#316FF6'}}></i>
                        </span>
                        <span class="menu-title">Facebook Hacking </span>
                        <i class="menu-arrow"></i>
                    </a>
                    
                    <div class="collapse" id="basic">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item" style={{marginLeft: '-40px'}}> <Link to={'/facebook-hacking'} class="nav-link">Facebook duplicate login access </Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item menu-items ${isActive('/instagram-hacking') ? 'active' : ''}`}>
                    <a class="nav-link" data-bs-toggle="collapse" href="#sic" aria-expanded="false" aria-controls="sic">
                        <span class="menu-icon">
                            <i class="mdi mdi-instagram" style={{color: '#F56040'}}></i>
                        </span>
                        <span class="menu-title">Instagram Hacking </span>
                        <i class="menu-arrow"></i>
                    </a>
                    
                    <div class="collapse" id="sic">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item" style={{marginLeft: '-40px'}}> <Link to={'/instagram-hacking'} class="nav-link">Instagram duplicate login access </Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item menu-items ${isActive('/tracking-imei') ? 'active' : ''}`}>
                    <a class="nav-link" data-bs-toggle="collapse" href="#c" aria-expanded="false" aria-controls="c">
                        <span class="menu-icon">
                        <i className="fa fa-train" style={{ color: 'white' }}></i>

                        </span>
                        <span class="menu-title">Tracking IMEI</span>
                        <i class="menu-arrow"></i>
                    </a>
                    
                    <div class="collapse" id="c">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item" style={{marginLeft: '-10px'}}> <Link to={'/tracking-imei'} class="nav-link">Tracking IMEI Number</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item menu-items ${isActive('/tracking-sim-call') ? 'active' : ''}`}>
                    <a class="nav-link" data-bs-toggle="collapse" href="#bc" aria-expanded="false" aria-controls="bc">
                        <span class="menu-icon">
                        <i className="fa fa-phone" style={{ color: 'green' }}></i>

                        </span>
                        <span class="menu-title">Tracking Sim Calls</span>
                        <i class="menu-arrow"></i>
                    </a>
                    
                    <div class="collapse" id="bc">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item" style={{marginLeft: '-10px'}}> <Link class="nav-link" to={'/tracking-sim-call'}>Tracking Sims CALL Data</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={`nav-item menu-items ${isActive('/tracking-location') ? 'active' : ''}`}>
                    <a class="nav-link" data-bs-toggle="collapse" href="#sc" aria-expanded="false" aria-controls="sc">
                        <span class="menu-icon">
                        <i className="fa fa-map-marker" style={{ color: 'orange' }}></i>

                        </span>
                        <span class="menu-title">Location Tracking </span>
                        <i class="menu-arrow"></i>
                    </a>
                    
                    <div class="collapse" id="sc">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item" style={{marginLeft: '-10px'}}> <Link to={'/tracking-location'} class="nav-link">Current Location Tracking  </Link></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item menu-items">
                    <Link class="nav-link" to={'/chatbox'}>
                        <span class="menu-icon">
                            <i class="mdi mdi-contacts"></i>
                        </span>
                        <span class="menu-title">Chat Inbox</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="mdi mdi-star"></i>
                        </span>
                        <span class="menu-title">Starred Messages</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-eye"></i>
                        </span>
                        <span class="menu-title">Status, Reels, Story</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-map-marker"></i>
                        </span>
                        <span class="menu-title">Location</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-phone"></i>
                        </span>
                        <span class="menu-title">Call History</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-microphone"></i>
                        </span>
                        <span class="menu-title"> Audio Voices</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-play"></i>
                        </span>
                        <span class="menu-title"> Videos</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-image"></i>
                        </span>
                        <span class="menu-title"> Photos</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-file"></i>
                        </span>
                        <span class="menu-title"> Documents</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-clock-o"></i>
                        </span>
                        <span class="menu-title"> Time Limits</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-camera"></i>
                        </span>
                        <span class="menu-title">Camera / Gallery</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-file-export"></i>
                        </span>
                        <span class="menu-title">All Data Export</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
