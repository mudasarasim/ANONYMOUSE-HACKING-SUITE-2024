import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import WhatsAppUsageChart from '../components/WhatsAppUsageChart';
import WeeklyAverageChart from '../components/WeeklyAverageChart';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // To use the location hook for getting the current URL


const Dashboard = () => {
        // Using React's useLocation to get the current URL
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get("id"); // Extract user id from the URL query
    
        // Default user data
        const [userData, setUserData] = useState({
            chats: 220,
            status: 86,
            calls: 510,
            location: "Pakistan",
            device: {
                name: "Samsung S20",
                model: "samsung",
                os: "10",
                lastSeen: "2023-04-27 14:48:40",
                batteryLevel: "98%",
                wifiStatus: "On",
                currentDevice: "Pakistan WhatsApp",
                dStatus: "Online"
            }
        });
    
        // Simulate changing device info based on user id
        useEffect(() => {
            // Fetch user data based on id (you can fetch data from an API or set it manually)
            if (id === "1") {
                setUserData({
                    chats: 120,
                    status: 90,
                    calls: 220,
                    location: "Pakistan",
                    device: {
                        name: "iPhone 13",
                        model: "iphone",
                        os: "iOS 16",
                        lastSeen: "2023-05-15 09:12:34",
                        batteryLevel: "85%",
                        wifiStatus: "Off",
                        currentDevice: "Pakistan WhatsApp",
                        dStatus: "Offline"
                    }
                });
            } else if (id === "2") {
                setUserData({
                    chats: 100,
                    status: 80,
                    calls: 200,
                    location: "India",
                    device: {
                        name: "Google Pixel 6",
                        model: "pixel",
                        os: "Android 12",
                        lastSeen: "2023-06-18 18:30:20",
                        batteryLevel: "75%",
                        wifiStatus: "On",
                        currentDevice: "India WhatsApp",
                        dStatus: "Online"
                    }
                });
            } else if (id === "3") {
                setUserData({
                    chats: 150,
                    status: 95,
                    calls: 300,
                    location: "Canada",
                    device: {
                        name: "OnePlus 9",
                        model: "oneplus",
                        os: "Android 11",
                        lastSeen: "2023-07-22 10:55:10",
                        batteryLevel: "60%",
                        wifiStatus: "On",
                        currentDevice: "Canada WhatsApp",
                        dStatus: "Offline"
                    }
                });
            } else if (id === "4") {
                setUserData({
                    chats: 180,
                    status: 75,
                    calls: 180,
                    location: "UK",
                    device: {
                        name: "Samsung Galaxy S21",
                        model: "samsung",
                        os: "Android 13",
                        lastSeen: "2023-08-05 13:00:01",
                        batteryLevel: "95%",
                        wifiStatus: "On",
                        currentDevice: "UK WhatsApp",
                        dStatus: "Online"
                    }
                });
            } else if (id === "5") {
                setUserData({
                    chats: 200,
                    status: 85,
                    calls: 400,
                    location: "Australia",
                    device: {
                        name: "Huawei P40",
                        model: "huawei",
                        os: "HarmonyOS",
                        lastSeen: "2023-09-13 15:45:25",
                        batteryLevel: "92%",
                        wifiStatus: "Off",
                        currentDevice: "Australia WhatsApp",
                        dStatus: "Offline"
                    }
                });
            }
            // Add additional conditions for more users if needed
        }, [id]);
    
    return (
        <>
            <div class="container-scroller">
                <div class="row p-0 m-0 proBanner d-none" id="proBanner">
                    <div class="col-md-12 p-0 m-0">
                        <div class="card-body card-body-padding px-3 d-flex align-items-center justify-content-between">
                            <div class="ps-lg-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                                    <a href="https://www.bootstrapdash.com/product/corona-admin-template/" target="_blank" rel="noreferrer" class="btn me-2 buy-now-btn border-0">Buy Now</a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="https://www.bootstrapdash.com/product/corona-admin-template/"><i class="mdi mdi-home me-3 text-white"></i></a>
                                <button id="bannerClose" class="btn border-0 p-0">
                                    <i class="mdi mdi-close text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
                <div class="container-fluid page-body-wrapper">
                    <nav class="navbar p-0 fixed-top d-flex flex-row">
                        <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                            <a class="navbar-brand brand-logo-mini" href="index.html"><img src="../../../assets/images/logo-mini.svg" alt="logo" /></a>
                        </div>
                        <Navbar />
                    </nav>
                    <div class="main-panel">
                        <div class="content-wrapper">
                            <div class="row">
                            <div className="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div className="card">
                                        <Link to={'/chatbox'} style={{ textDecoration: 'none' }} className="card-body">
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <i className="fa fa-whatsapp" style={{ color: '#23d80f', fontSize: '35px' }}></i>
                                                        <h3 className="mb-0" style={{ marginLeft: '10px', marginTop: '-10px' }}> Chats</h3>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="icon icon-box-success ">
                                                        <p style={{ marginTop: '20px' }}>+15</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="font-weight-normal" style={{ color: 'white', marginLeft: '45px' }}>Total {userData.chats}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <Link to={'/status'} style={{textDecoration: 'none'}} class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <h3 class="mb-0"><img src='WA Status Logo.png' alt='hj' height={35} style={{ marginLeft: '-10px', marginRight: '-10px' }} /> Status</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+11%</p> */}
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-success">
                                                        <p style={{ marginTop: '20px' }}>+5</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="font-weight-normal ml-5" style={{ marginLeft: '50px', color: 'white' }}>Total {userData.status}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <Link to={'/call-history'} style={{textDecoration: 'none'}} class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <i className='fa fa-phone' style={{ color: '#23d80f', fontSize: '35px' }}></i><h3 class="mb-0" style={{ marginLeft: '10px', marginTop: '-10px' }}> Calls History</h3>
                                                        {/* <p class="text-danger ms-2 mb-0 font-weight-medium">-2.4%</p> */}
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-success">
                                                        <p style={{ marginTop: '20px' }}>+40</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="font-weight-normal" style={{ color: 'white', marginLeft: '45px' }}>Total {userData.calls}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <Link to={'/location'} style={{textDecoration: 'none'}} class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <i className='fa fa-map-marker' style={{ color: '#23d80f', fontSize: '35px' }}></i><h3 class="mb-0" style={{ marginLeft: '10px', marginTop: '-10px' }}> Location</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                                {/* <div class="col-3">
                                                    <div class="icon icon-box-success ">
                                                        <p style={{ marginTop: '20px' }}>+60</p>

                                                    </div>
                                                </div> */}
                                            </div>
                                            <h6 class="font-weight-normal" style={{ color: 'white', marginLeft: '45px' }}>{userData.location} </h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex flex-row justify-content-between">
                                                <h2 class="card-title mb-1">Device Information</h2>
                                                {/* <p class="text-muted mb-1">Your data status</p> */}
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="preview-list">
                                                        <div class="preview-item border-bottom">
                                                            <div class="preview-thumbnail">
                                                                <div class="preview-icon bg-success">
                                                                    <i class="fa fa-user"></i>
                                                                </div>
                                                            </div>
                                                            <div class="preview-item-content d-sm-flex flex-grow">
                                                                <div class="flex-grow">
                                                                    <h6 class="preview-subject">Device Name : </h6>
                                                                    <h6 class="preview-subject">{userData.device.name}</h6>
                                                                    {/* <p class="text-muted mb-0">Broadcast web app mockup</p> */}
                                                                </div>
                                                                <div class="preview-thumbnail">
                                                                    <div class="preview-icon bg-success">
                                                                        <i class="fa fa-mobile"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="mr-auto text-sm-right pt-2 pt-sm-0 preview-item-content d-sm-flex flex-grow">
                                                                    <h6 class="preview-subject mt-2">Device Model : {userData.device.model}</h6>
                                                                    {/* <h6 class="preview-subject">Samsung S20</h6> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item border-bottom">
                                                            <div class="preview-thumbnail">
                                                                <div class="preview-icon bg-success">
                                                                    <i class="fa fa-info"></i>
                                                                </div>
                                                            </div>
                                                            <div class="preview-item-content d-sm-flex flex-grow">
                                                                <div class="flex-grow">
                                                                    <h6 class="preview-subject">Device OS </h6>
                                                                    <h6 class="preview-subject"> Version: {userData.device.os}</h6>
                                                                    {/* <p class="text-muted mb-0">Upload new design</p> */}
                                                                </div>
                                                                <div class="preview-thumbnail" style={{ marginLeft: '10px' }}>
                                                                    <div class="preview-icon bg-success">
                                                                        <i class="fa fa-desktop"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="mr-auto text-sm-right pt-2 pt-sm-0 preview-item-content d-sm-flex flex-grow">
                                                                    <h6 class="preview-subject mt-2">Device Status :  {userData.device.dStatus}</h6>
                                                                    {/* <h6 class="preview-subject">Samsung S20</h6> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item border-bottom">
                                                            <div class="preview-thumbnail">
                                                                <div class="preview-icon bg-success">
                                                                    <i class="mdi mdi-clock"></i>
                                                                </div>
                                                            </div>
                                                            <div class="preview-item-content d-sm-flex flex-grow">
                                                                <div class="flex-grow">
                                                                    <h6 class="preview-subject">WhatsApp Last <br /> Seen: 2023-04-27<br /> 14:48:40</h6>
                                                                    {/* <p class="text-muted mb-0">New project discussion</p> */}
                                                                </div>
                                                                <div class="preview-thumbnail" style={{ marginLeft: '-50px' }}>
                                                                    <div class="preview-icon bg-success">
                                                                        <i class="fa fa-battery"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="mr-auto text-sm-right pt-2 pt-sm-0 preview-item-content d-sm-flex flex-grow">
                                                                    <h6 class="preview-subject mt-2">Battery Level: {userData.device.batteryLevel}</h6>
                                                                    {/* <h6 class="preview-subject">Samsung S20</h6> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="preview-item border-bottom">
                                                            <div class="preview-thumbnail">
                                                                <div class="preview-icon bg-success">
                                                                    <i class="fa fa-wifi"></i>
                                                                </div>
                                                            </div>
                                                            <div class="preview-item-content d-sm-flex flex-grow">
                                                                <div class="flex-grow">
                                                                    <h6 class="preview-subject mt-2">WiFi:  On</h6>
                                                                    {/* <p class="text-muted mb-0">Sent release details to team</p> */}
                                                                </div>

                                                                <div class="preview-thumbnail" style={{ marginLeft: '130px' }}>
                                                                    <div class="preview-icon bg-success">
                                                                        <i class="fa fa-desktop"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="mr-auto text-sm-right pt-2 pt-sm-0 preview-item-content d-sm-flex flex-grow">
                                                                    <h6 class="preview-subject mt-2">Current Device: {userData.device.currentDevice}</h6>
                                                                    {/* <h6 class="preview-subject">Samsung S20</h6> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/* Add the WhatsApp Usage Chart here */}
                                <div className="col-xl-12 col-lg-12 col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <h2 className='p-3'>WhatsApp Usage</h2>
                                        <div className="card-body">
                                            <WhatsAppUsageChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/* Add the WhatsApp Usage Chart here */}
                                <div className="col-xl-12 col-lg-12 col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <h2 className='p-3'>Weekly Average</h2>
                                        <div className="card-body">
                                            <WeeklyAverageChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/* Add the WhatsApp Usage Chart here */}
                                <div className="col-xl-12 col-lg-12 col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <h2 className='p-3'><i className='fa fa-map-marker'></i> Current Location</h2>
                                        <iframe
                                        title='uty'
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462449.285138231!2d66.37242990787928!3d30.375321792177443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf5eac1f7687%3A0x67fb2e5a2d4284e6!2sPakistan!5e0!3m2!1sen!2sus!4v1699376633372!5m2!1sen!2sus"
                                            style={{width: '100%'}}
                                            height="450"
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <footer class="footer">

                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
