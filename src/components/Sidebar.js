import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const Sidebar = () => {

    const location = useLocation(); // Get the current location (route)
    
    // Track the active route by comparing with the current pathname
    const isActive = (path) => location.pathname === path;

     // Scroll to top on location change
     useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]); // Runs every time the location changes

   
    return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a class="sidebar-brand brand-logo" href="../../index.html" style={{color: 'white', textDecoration: 'none ', fontWeight: 'bold'}}>Android & iOS</a>
                <a class="sidebar-brand brand-logo-mini" href="../../index.html"><img src="../../assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <ul class="nav" style={{marginTop: '8px'}}>
              
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
                            <li class="nav-item" style={{marginLeft: '-22px', }}> <Link class="nav-link" to={'/whatsapp-hacking'}>WhatsApp Duplicate Login Access </Link></li>
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
                            <li class="nav-item" style={{marginLeft: '-40px'}}> <Link to={'/facebook-hacking'} class="nav-link">Facebook Duplicate Login Access </Link></li>
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
                            <li class="nav-item" style={{marginLeft: '-40px'}}> <Link to={'/instagram-hacking'} class="nav-link">Instagram Duplicate Login Access </Link></li>
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
                <li className={`nav-item menu-items ${isActive('/chatbox') ? 'active' : ''}`}>
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
                <li className={`nav-item menu-items ${isActive('/status') ? 'active' : ''}`}>
                    <Link to={'/status'} class="nav-link">
                        <span class="menu-icon">
                            <i class="fa fa-eye"></i>
                        </span>
                        <span class="menu-title">Status, Reels, Story</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                <li className={`nav-item menu-items ${isActive('/location') ? 'active' : ''}`}>
                    <Link to={'/location'} class="nav-link">
                        <span class="menu-icon">
                            <i class="fa fa-map-marker"></i>
                        </span>
                        <span class="menu-title">Location</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                <li className={`nav-item menu-items ${isActive('/call-history') ? 'active' : ''}`}>
                    <Link class="nav-link" to={'/call-history'}>
                        <span class="menu-icon">
                            <i class="fa fa-phone"></i>
                        </span>
                        <span class="menu-title">Call History</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                {/* <li className={`nav-item menu-items ${isActive('/audio-voices') ? 'active' : ''}`}>
                    <Link to={'/audio-voices'} class="nav-link">
                        <span class="menu-icon">
                            <i class="fa fa-microphone"></i>
                        </span>
                        <span class="menu-title"> Audio Voices</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li> */}
                <li className={`nav-item menu-items ${isActive('/videos') ? 'active' : ''}`}>
                    <Link to={'/videos'} class="nav-link" >
                        <span class="menu-icon">
                            <i class="fa fa-play"></i>
                        </span>
                        <span class="menu-title"> Videos</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                <li className={`nav-item menu-items ${isActive('/photos') ? 'active' : ''}`}>
                    <Link to={'/photos'} class="nav-link">
                        <span class="menu-icon">
                            <i class="fa fa-image"></i>
                        </span>
                        <span class="menu-title"> Photos</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                <li className={`nav-item menu-items ${isActive('/documents') ? 'active' : ''}`}>
                    <Link to={'/documents'} class="nav-link">
                        <span class="menu-icon">
                            <i class="fa fa-file"></i>
                        </span>
                        <span class="menu-title"> Documents</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                {/* <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-clock-o"></i>
                        </span>
                        <span class="menu-title"> Time Limits</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li> */}
                <li className={`nav-item menu-items ${isActive('/camera') ? 'active' : ''}`}>
                    <Link to={'/camera'} class="nav-link">
                        <span class="menu-icon">
                            <i class="fa fa-camera"></i>
                        </span>
                        <span class="menu-title"> Recently Screenshots</span>
                        <i class="menu-arrow"></i>
                    </Link>
                </li>
                {/* <li class="nav-item menu-items">
                    <a class="nav-link" href="../../pages/icons/font-awesome.html">
                        <span class="menu-icon">
                            <i class="fa fa-file-export"></i>
                        </span>
                        <span class="menu-title">All Data Export</span>
                        <i class="menu-arrow"></i>
                    </a>
                </li> */}
            </ul>
        </nav>
    );
};

export default Sidebar;
