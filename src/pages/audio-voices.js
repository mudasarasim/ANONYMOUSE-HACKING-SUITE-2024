import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AudioVoices = () => {



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
                                <div class="col-lg-12 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <h2 class="card-title"><i className='fa fa-microphone'></i> Audio Voices</h2>
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th> From </th>
                                                            <th> Number </th>                                                           
                                                            <th> Voice</th>
                                                            <th> Date & Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> Herman Beck </td>
                                                            <td>
                                                                +92 3058285834                                                              
                                                            </td>
                                                            <td> $ 77.99 </td>
                                                            <td> May 15, 2015 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Messsy Adam </td>
                                                            <td>
                                                            +92 3058285834
                                                            </td>
                                                            <td> $245.30 </td>
                                                            <td> July 1, 2015 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> John Richards </td>
                                                            <td>
                                                            +92 3058285834
                                                            </td>
                                                            <td> $138.00 </td>
                                                            <td> Apr 12, 2015 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Peter Meggik </td>
                                                            <td>
                                                            +92 3058285834
                                                            </td>
                                                            <td> $ 77.99 </td>
                                                            <td> May 15, 2015 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Edward </td>
                                                            <td>
                                                            +92 3058285834
                                                            </td>
                                                            <td> $ 160.25 </td>
                                                            <td> May 03, 2015 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> John Doe </td>
                                                            <td>
                                                                +92 3058285834
                                                            </td>
                                                            <td> $ 123.21 </td>
                                                            <td> April 05, 2015 </td>
                                                        </tr>
                                                        <tr>
                                                            <td> Henry Tom </td>
                                                            <td>
                                                            +92 3058285834
                                                            </td>
                                                            <td> $ 150.00 </td>
                                                            <td> June 16, 2015 </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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

export default AudioVoices;
