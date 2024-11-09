import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './Pricing.css';

const Pricing = () => {



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
                                <h1>Choose the plan that fits for your team</h1>
                                <p>
                                    Deploy your sites to global infrastructure in seconds. No credit card
                                    required
                                </p>

                                <div class="pricing">
                                    <div class="plan">
                                        <h2>Dev</h2>
                                        <div class="price">FREE</div>
                                        <ul class="features">
                                            <li><i class="fa fa-check-circle"></i> Unlimited Websites</li>
                                            <li><i class="fa fa-check-circle"></i> 1 User</li>
                                            <li><i class="fa fa-check-circle"></i> 100MB Space/website</li>
                                            <li><i class="fa fa-check-circle"></i> Continuous deployment</li>
                                            <li><i class="fa fa-times-circle"></i> No priority support</li>
                                        </ul>
                                        <button>Signup</button>
                                    </div>
                                    <div class="plan popular">
                                        <span>Most Popular</span>
                                        <h2>Pro</h2>
                                        <div class="price">$10/month</div>
                                        <ul class="features">
                                            <li><i class="fa fa-check-circle"></i> Unlimited Websites</li>
                                            <li><i class="fa fa-check-circle"></i> 5 Users</li>
                                            <li><i class="fa fa-check-circle"></i> 512MB Space/website</li>
                                            <li><i class="fa fa-check-circle"></i> Continuous deployment</li>
                                            <li><i class="fa fa-check-circle"></i> Email Support</li>
                                        </ul>
                                        <button>Buy Now</button>
                                    </div>
                                    <div class="plan">
                                        <h2>Enterprise</h2>
                                        <div class="price">Custom Pricing</div>
                                        <ul class="features">
                                            <li><i class="fa fa-check-circle"></i> Unlimited Websites</li>
                                            <li><i class="fa fa-check-circle"></i> Unlimited Users</li>
                                            <li><i class="fa fa-check-circle"></i> Unlimited Space/website</li>
                                            <li><i class="fa fa-check-circle"></i> Continuous deployment</li>
                                            <li><i class="fa fa-check-circle"></i> 24/7 Email support</li>
                                        </ul>
                                        <button>Contact Us</button>
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

export default Pricing;
