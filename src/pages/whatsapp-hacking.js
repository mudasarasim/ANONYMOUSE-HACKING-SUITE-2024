import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const WhatsappHacking = () => {



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
                            <div className='row'>
                                <div class="col-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <h2 class="card-title"><i className='mdi mdi-whatsapp'></i> WhatsApp Account Hacking </h2>
                                            <form class="forms-sample">
                                                <div class="form-group">
                                                    <label for="exampleInputName1">Country Name</label>
                                                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter Country Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail3">City Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail3" placeholder="Enter City Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail3">Sim Company Name</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail3" placeholder="Enter Sim Company Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail3">Mobile Number</label>
                                                    <input type="text" class="form-control" id="exampleInputEmail3" placeholder="Enter Mobile Number" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail3">From Date (Valid Tracking 1 Year)</label>
                                                    <input type="Date" class="form-control" id="exampleInputEmail3" placeholder="Enter City Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail3">To Date</label>
                                                    <input type="Date" class="form-control" id="exampleInputEmail3" placeholder="Enter City Name" />
                                                </div>
                                                <button type="submit" class="btn btn-success me-2">Submit</button>
                                                {/* <button class="btn btn-danger">Cancel</button> */}
                                            </form>
                                        </div>
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

export default WhatsappHacking;
