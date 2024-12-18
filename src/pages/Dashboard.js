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
        chatsPlus: 20,
        status: 86,
        statusPlus: 16,
        calls: 510,
        callsPlus: 10,
        name: "Whatsapp",
        location: "Pakistan",
        icon: "fa fa-whatsapp",
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
                id: 1,
                chats: 120,
                chatsPlus: 21,
                status: 90,
                statusPlus: 7,
                calls: 220,
                callsPlus: 18,
                name: "Whatsapp",
                icon: "fa fa-whatsapp",
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
                id: 2,
                chats: 100,
                chatsPlus: 10,
                status: 80,
                statusPlus: 8,
                calls: 200,
                name: "Whatsapp",
                callsPlus: 12,
                location: "India",
                icon: "fa fa-whatsapp",
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
                id: 3,
                chats: 150,
                chatsPlus: 11,
                status: 95,
                statusPlus: 17,
                calls: 300,
                callsPlus: 9,
                name: "Whatsapp",
                location: "Canada",
                icon: "fa fa-whatsapp",
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
                id: 4,
                chats: 180,
                chatsPlus: 22,
                status: 75,
                statusPlus: 19,
                calls: 180,
                callsPlus: 31,
                name: "Whatsapp",
                location: "UK",
                icon: "fa fa-whatsapp",
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
                id: 5,
                chats: 200,
                chatsPlus: 41,
                status: 85,
                statusPlus: 27,
                calls: 400,
                callsPlus: 30,
                name: "Whatsapp",
                location: "Australia",
                icon: "fa fa-whatsapp",
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
        } else if (id === "11") {
            setUserData({
                id: 11,
                chats: 120,
                chatsPlus: 10,
                status: 90,
                statusPlus: 13,
                calls: 220,
                callsPlus: 20,
                name: "Facebook",
                icon: "fa fa-wechat",
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
        } else if (id === "22") {
            setUserData({
                id: 22,
                chats: 400,
                chatsPlus: 68,
                status: 120,
                statusPlus: 33,
                calls: 500,
                callsPlus: 57,
                name: "Facebook",
                location: "India",
                icon: "fa fa-wechat",
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
        } else if (id === "33") {
            setUserData({
                id: 33,
                chats: 650,
                chatsPlus: 61,
                status: 195,
                statusPlus: 42,
                calls: 500,
                callsPlus: 11,
                name: "Facebook",
                location: "Canada",
                icon: "fa fa-wechat",
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
        } else if (id === "44") {
            setUserData({
                id: 44,
                chats: 880,
                chatsPlus: 280,
                status: 275,
                statusPlus: 75,
                calls: 480,
                callsPlus: 90,
                name: "Facebook",
                location: "UK",
                icon: "fa fa-wechat",
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
        } else if (id === "55") {
            setUserData({
                id: 55,
                chats: 800,
                chatsPlus: 120,
                status: 285,
                statusPlus: 34,
                calls: 400,
                callsPlus: 40,
                name: "Facebook",
                location: "Australia",
                icon: "fa fa-wechat",
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
                                        <Link to={`/chatbox?id=${userData.id}`} style={{ textDecoration: 'none' }} className="card-body">
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="d-flex align-items-center align-self-start">
                                                        <i className={userData.icon} style={{ color: '#23d80f', fontSize: '35px' }}></i>
                                                        <h3 className="mb-0" style={{ marginLeft: '10px', marginTop: '-10px' }}> Chats</h3>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="icon icon-box-success ">
                                                        <p style={{ marginTop: '60px' }}>+{userData.chatsPlus}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="font-weight-normal" style={{ color: 'white', marginLeft: '45px' }}>Total {userData.chats}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <Link to={`/status?videoId=${userData.id}`} style={{ textDecoration: 'none' }} class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <h3 class="mb-0"><img src='WA Status Logo.png' alt='hj' height={35} style={{ marginLeft: '-10px', marginRight: '-10px' }} /> Status</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+11%</p> */}
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-success">
                                                        <p style={{ marginTop: '60px' }}>+{userData.statusPlus}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="font-weight-normal ml-5" style={{ marginLeft: '50px', color: 'white' }}>Total {userData.status}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <Link to={`/call-history?id=${userData.id}`} style={{ textDecoration: 'none' }} class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <i className='fa fa-phone' style={{ color: '#23d80f', fontSize: '35px' }}></i><h3 class="mb-0" style={{ marginLeft: '10px', marginTop: '-10px' }}> Calls History</h3>
                                                        {/* <p class="text-danger ms-2 mb-0 font-weight-medium">-2.4%</p> */}
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="icon icon-box-success">
                                                        <p style={{ marginTop: '60px' }}>+{userData.callsPlus}</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="font-weight-normal" style={{ color: 'white', marginLeft: '45px' }}>Total {userData.calls}</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 grid-margin stretch-card">
                                    <div class="card">
                                        <Link to={`/location?id=${userData.id}`} style={{ textDecoration: 'none' }} class="card-body">
                                            <div class="row">
                                                <div class="col-9">
                                                    <div class="d-flex align-items-center align-self-start">
                                                        <i className='fa fa-map-marker' style={{ color: '#23d80f', fontSize: '35px' }}></i><h3 class="mb-0" style={{ marginLeft: '10px', marginTop: '-10px' }}> Location</h3>
                                                        {/* <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p> */}
                                                    </div>
                                                </div>
                                                {/* <div class="col-3">
                                                    <div class="icon icon-box-success ">
                                                        <p style={{ marginTop: '60px' }}>+60</p>

                                                    </div>
                                                </div> */}
                                            </div>
                                            <h6 class="font-weight-normal" style={{ color: 'white', marginLeft: '45px' }}>{userData.location} </h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="card-title">Device Information</h2>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-user bg-success" style={{ fontSize: '26px', padding: '8px 15px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}>Device Name : <br /> {userData.device.name}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-mobile bg-success" style={{ fontSize: '26px', padding: '8px 15px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}>Device Model : <br /> {userData.device.model}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-info bg-success" style={{ fontSize: '26px', padding: '8px 15px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}>Device OS : <br /> Version : {userData.device.os}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-desktop bg-success" style={{ fontSize: '26px', padding: '8px 10px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}>Device Status : <br /> {userData.device.dStatus}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    
                                                    <tr>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="mdi mdi-clock bg-success" style={{ fontSize: '26px', padding: '8px 8px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}> WhatsApp Last : <br /> Seen : {userData.device.lastSeen}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-battery bg-success" style={{ fontSize: '26px', padding: '8px 10px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}>Battery Level : <br /> {userData.device.batteryLevel}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-wifi bg-success" style={{ fontSize: '26px', padding: '6px 10px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px', marginTop: '10px' }}> Wifi : {userData.device.wifiStatus}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                                                                <i class="fa fa-desktop bg-success" style={{ fontSize: '26px', padding: '8px 10px' }}>
                                                                </i>
                                                                <h6 class="preview-subject" style={{ marginLeft: '16px' }}>Currrent Device : <br /> {userData.device.currentDevice}</h6>
                                                                {/* <h6 class="preview-subject"></h6> */}
                                                            </div>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">

                                {/* Add the WhatsApp Usage Chart here */}
                                <div className="col-xl-12 col-lg-12 col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <h2 className='p-3'>{userData.name} Usage</h2>
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
                                            style={{ width: '100%' }}
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
