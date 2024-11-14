import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const InstagramHacking = () => {
    const navigate = useNavigate();

    // Predefined array of users (for example)
    const users = [
        {
            id: 11,
            country: "Pakistan",
            city: "Islamabad",
            simCompany: "Jazz",
            mobileNumber: "03036257329",
            fromDate: "2023-01-01",
            toDate: "2024-01-01"
        },
        {
            id: 22,
            country: "India",
            city: "Mumbai",
            simCompany: "Airtel",
            mobileNumber: "9876543210",
            fromDate: "2023-03-01",
            toDate: "2024-03-01"
        },
        {
            id: 33,
            country: "Canada",
            city: "Toronto",
            simCompany: "Astra",
            mobileNumber: "1122334455",
            fromDate: "2023-01-01",
            toDate: "2024-01-01"
        },
        {
            id: 44,
            country: "UK",
            city: "London",
            simCompany: "EE",
            mobileNumber: "9988776655",
            fromDate: "2023-02-01",
            toDate: "2024-02-01"
        },
        {
            id: 55,
            country: "Australia",
            city: "Sydney",
            simCompany: "Telstra",
            mobileNumber: "5566778899",
            fromDate: "2023-07-01",
            toDate: "2024-07-01"
        }
    ];

    // Form state
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        simCompany: '',
        mobileNumber: '',
        fromDate: '',
        toDate: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the form data matches any user
        const matchedUser = users.find(user =>
            user.country === formData.country &&
            user.mobileNumber === formData.mobileNumber

        );

        if (matchedUser) {
            // Redirect to dashboard with user ID
            navigate(`/dashboard?id=${matchedUser.id}`);
        } else {
            // Show pricing modal (you can replace this with actual modal logic)
            alert("Data does not match. Please check pricing details.");
        }
    };

    return (
        <>
            <div className="container-scroller">
                <div className="row p-0 m-0 proBanner d-none" id="proBanner">
                    <div className="col-md-12 p-0 m-0">
                        <div className="card-body card-body-padding px-3 d-flex align-items-center justify-content-between">
                            <div className="ps-lg-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 font-weight-medium me-3 buy-now-text">
                                        Free 24/7 customer support, updates, and more with this template!
                                    </p>
                                    <a href="https://www.bootstrapdash.com/product/corona-admin-template/" target="_blank" rel="noreferrer" className="btn me-2 buy-now-btn border-0">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="https://www.bootstrapdash.com/product/corona-admin-template/">
                                    <i className="mdi mdi-home me-3 text-white"></i>
                                </a>
                                <button id="bannerClose" className="btn border-0 p-0">
                                    <i className="mdi mdi-close text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <div className="col-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title" style={{ color: 'red', fontWeight: 'bold' }}><i className="mdi mdi-instagram" style={{ color: 'white' }}></i> Instagram Duplicate Login Access </h2>
                                            <form className="forms-sample" onSubmit={handleSubmit}>

                                                <div class="form-group">
                                                    <label for="exampleInputName1">ID Link</label>
                                                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter ID Link" />
                                                </div>
                                                <div className='row'>
                                                    <div className="form-group col-lg-2">
                                                        <label htmlFor="mobileNumber">ID Mobile Number</label>
                                                        <select name="country_code" className='form-control'>
                                                            <option value="+93">Select Code</option>
                                                            <option value="+93">Afghanistan (+93)</option>
                                                            <option value="+355">Albania (+355)</option>
                                                            <option value="+213">Algeria (+213)</option>
                                                            <option value="+376">Andorra (+376)</option>
                                                            <option value="+244">Angola (+244)</option>
                                                            <option value="+1-268">Antigua and Barbuda (+1-268)</option>
                                                            <option value="+54">Argentina (+54)</option>
                                                            <option value="+374">Armenia (+374)</option>
                                                            <option value="+61">Australia (+61)</option>
                                                            <option value="+43">Austria (+43)</option>
                                                            <option value="+994">Azerbaijan (+994)</option>
                                                            <option value="+1-242">Bahamas (+1-242)</option>
                                                            <option value="+973">Bahrain (+973)</option>
                                                            <option value="+880">Bangladesh (+880)</option>
                                                            <option value="+1-246">Barbados (+1-246)</option>
                                                            <option value="+375">Belarus (+375)</option>
                                                            <option value="+32">Belgium (+32)</option>
                                                            <option value="+501">Belize (+501)</option>
                                                            <option value="+229">Benin (+229)</option>
                                                            <option value="+975">Bhutan (+975)</option>
                                                            <option value="+591">Bolivia (+591)</option>
                                                            <option value="+387">Bosnia and Herzegovina (+387)</option>
                                                            <option value="+267">Botswana (+267)</option>
                                                            <option value="+55">Brazil (+55)</option>
                                                            <option value="+673">Brunei (+673)</option>
                                                            <option value="+359">Bulgaria (+359)</option>
                                                            <option value="+226">Burkina Faso (+226)</option>
                                                            <option value="+257">Burundi (+257)</option>
                                                            <option value="+238">Cabo Verde (+238)</option>
                                                            <option value="+855">Cambodia (+855)</option>
                                                            <option value="+237">Cameroon (+237)</option>
                                                            <option value="+1">Canada (+1)</option>
                                                            <option value="+236">Central African Republic (+236)</option>
                                                            <option value="+235">Chad (+235)</option>
                                                            <option value="+56">Chile (+56)</option>
                                                            <option value="+86">China (+86)</option>
                                                            <option value="+57">Colombia (+57)</option>
                                                            <option value="+269">Comoros (+269)</option>
                                                            <option value="+243">Congo, Democratic Republic (+243)</option>
                                                            <option value="+242">Congo, Republic of (+242)</option>
                                                            <option value="+506">Costa Rica (+506)</option>
                                                            <option value="+385">Croatia (+385)</option>
                                                            <option value="+53">Cuba (+53)</option>
                                                            <option value="+357">Cyprus (+357)</option>
                                                            <option value="+420">Czech Republic (+420)</option>
                                                            <option value="+45">Denmark (+45)</option>
                                                            <option value="+253">Djibouti (+253)</option>
                                                            <option value="+1-767">Dominica (+1-767)</option>
                                                            <option value="+1-809">Dominican Republic (+1-809)</option>
                                                            <option value="+593">Ecuador (+593)</option>
                                                            <option value="+20">Egypt (+20)</option>
                                                            <option value="+503">El Salvador (+503)</option>
                                                            <option value="+240">Equatorial Guinea (+240)</option>
                                                            <option value="+291">Eritrea (+291)</option>
                                                            <option value="+372">Estonia (+372)</option>
                                                            <option value="+268">Eswatini (+268)</option>
                                                            <option value="+251">Ethiopia (+251)</option>
                                                            <option value="+679">Fiji (+679)</option>
                                                            <option value="+358">Finland (+358)</option>
                                                            <option value="+33">France (+33)</option>
                                                            <option value="+241">Gabon (+241)</option>
                                                            <option value="+220">Gambia (+220)</option>
                                                            <option value="+995">Georgia (+995)</option>
                                                            <option value="+49">Germany (+49)</option>
                                                            <option value="+233">Ghana (+233)</option>
                                                            <option value="+30">Greece (+30)</option>
                                                            <option value="+1-473">Grenada (+1-473)</option>
                                                            <option value="+502">Guatemala (+502)</option>
                                                            <option value="+224">Guinea (+224)</option>
                                                            <option value="+245">Guinea-Bissau (+245)</option>
                                                            <option value="+592">Guyana (+592)</option>
                                                            <option value="+509">Haiti (+509)</option>
                                                            <option value="+504">Honduras (+504)</option>
                                                            <option value="+36">Hungary (+36)</option>
                                                            <option value="+354">Iceland (+354)</option>
                                                            <option value="+91">India (+91)</option>
                                                            <option value="+62">Indonesia (+62)</option>
                                                            <option value="+98">Iran (+98)</option>
                                                            <option value="+964">Iraq (+964)</option>
                                                            <option value="+353">Ireland (+353)</option>
                                                            <option value="+972">Israel (+972)</option>
                                                            <option value="+39">Italy (+39)</option>
                                                            <option value="+1-876">Jamaica (+1-876)</option>
                                                            <option value="+81">Japan (+81)</option>
                                                            <option value="+962">Jordan (+962)</option>
                                                            <option value="+7">Kazakhstan (+7)</option>
                                                            <option value="+254">Kenya (+254)</option>
                                                            <option value="+686">Kiribati (+686)</option>
                                                            <option value="+850">Korea, North (+850)</option>
                                                            <option value="+82">Korea, South (+82)</option>
                                                            <option value="+383">Kosovo (+383)</option>
                                                            <option value="+965">Kuwait (+965)</option>
                                                            <option value="+996">Kyrgyzstan (+996)</option>
                                                            <option value="+856">Laos (+856)</option>
                                                            <option value="+371">Latvia (+371)</option>
                                                            <option value="+961">Lebanon (+961)</option>
                                                            <option value="+266">Lesotho (+266)</option>
                                                            <option value="+231">Liberia (+231)</option>
                                                            <option value="+218">Libya (+218)</option>
                                                            <option value="+423">Liechtenstein (+423)</option>
                                                            <option value="+370">Lithuania (+370)</option>
                                                            <option value="+352">Luxembourg (+352)</option>
                                                            <option value="+261">Madagascar (+261)</option>
                                                            <option value="+265">Malawi (+265)</option>
                                                            <option value="+60">Malaysia (+60)</option>
                                                            <option value="+960">Maldives (+960)</option>
                                                            <option value="+223">Mali (+223)</option>
                                                            <option value="+356">Malta (+356)</option>
                                                            <option value="+692">Marshall Islands (+692)</option>
                                                            <option value="+222">Mauritania (+222)</option>
                                                            <option value="+230">Mauritius (+230)</option>
                                                            <option value="+52">Mexico (+52)</option>
                                                            <option value="+691">Micronesia (+691)</option>
                                                            <option value="+373">Moldova (+373)</option>
                                                            <option value="+377">Monaco (+377)</option>
                                                            <option value="+976">Mongolia (+976)</option>
                                                            <option value="+382">Montenegro (+382)</option>
                                                            <option value="+212">Morocco (+212)</option>
                                                            <option value="+258">Mozambique (+258)</option>
                                                            <option value="+95">Myanmar (+95)</option>
                                                            <option value="+264">Namibia (+264)</option>
                                                            <option value="+674">Nauru (+674)</option>
                                                            <option value="+977">Nepal (+977)</option>
                                                            <option value="+31">Netherlands (+31)</option>
                                                            <option value="+64">New Zealand (+64)</option>
                                                            <option value="+505">Nicaragua (+505)</option>
                                                            <option value="+227">Niger (+227)</option>
                                                            <option value="+234">Nigeria (+234)</option>
                                                            <option value="+389">North Macedonia (+389)</option>
                                                            <option value="+47">Norway (+47)</option>
                                                            <option value="+968">Oman (+968)</option>
                                                            <option value="+92">Pakistan (+92)</option>
                                                            <option value="+680">Palau (+680)</option>
                                                            <option value="+970">Palestine (+970)</option>
                                                            <option value="+507">Panama (+507)</option>
                                                            <option value="+675">Papua New Guinea (+675)</option>
                                                            <option value="+595">Paraguay (+595)</option>
                                                            <option value="+51">Peru (+51)</option>
                                                            <option value="+63">Philippines (+63)</option>
                                                            <option value="+48">Poland (+48)</option>
                                                            <option value="+351">Portugal (+351)</option>
                                                            <option value="+974">Qatar (+974)</option>
                                                            <option value="+40">Romania (+40)</option>
                                                            <option value="+7">Russia (+7)</option>
                                                            <option value="+250">Rwanda (+250)</option>
                                                            <option value="+1-869">Saint Kitts and Nevis (+1-869)</option>
                                                            <option value="+1-758">Saint Lucia (+1-758)</option>
                                                            <option value="+1-784">Saint Vincent and the Grenadines (+1-784)</option>
                                                            <option value="+685">Samoa (+685)</option>
                                                            <option value="+378">San Marino (+378)</option>
                                                            <option value="+239">Sao Tome and Principe (+239)</option>
                                                            <option value="+966">Saudi Arabia (+966)</option>
                                                            <option value="+221">Senegal (+221)</option>
                                                            <option value="+381">Serbia (+381)</option>
                                                            <option value="+248">Seychelles (+248)</option>
                                                            <option value="+232">Sierra Leone (+232)</option>
                                                            <option value="+65">Singapore (+65)</option>
                                                            <option value="+421">Slovakia (+421)</option>
                                                            <option value="+386">Slovenia (+386)</option>
                                                            <option value="+677">Solomon Islands (+677)</option>
                                                            <option value="+252">Somalia (+252)</option>
                                                            <option value="+27">South Africa (+27)</option>
                                                            <option value="+211">South Sudan (+211)</option>
                                                            <option value="+34">Spain (+34)</option>
                                                            <option value="+94">Sri Lanka (+94)</option>
                                                            <option value="+249">Sudan (+249)</option>
                                                            <option value="+597">Suriname (+597)</option>
                                                            <option value="+46">Sweden (+46)</option>
                                                            <option value="+41">Switzerland (+41)</option>
                                                            <option value="+963">Syria (+963)</option>
                                                            <option value="+886">Taiwan (+886)</option>
                                                            <option value="+992">Tajikistan (+992)</option>
                                                            <option value="+255">Tanzania (+255)</option>
                                                            <option value="+66">Thailand (+66)</option>
                                                            <option value="+228">Togo (+228)</option>
                                                            <option value="+676">Tonga (+676)</option>
                                                            <option value="+1-868">Trinidad and Tobago (+1-868)</option>
                                                            <option value="+216">Tunisia (+216)</option>
                                                            <option value="+90">Turkey (+90)</option>
                                                            <option value="+993">Turkmenistan (+993)</option>
                                                            <option value="+688">Tuvalu (+688)</option>
                                                            <option value="+256">Uganda (+256)</option>
                                                            <option value="+380">Ukraine (+380)</option>
                                                            <option value="+971">United Arab Emirates (+971)</option>
                                                            <option value="+44">United Kingdom (+44)</option>
                                                            <option value="+1">United States (+1)</option>
                                                            <option value="+598">Uruguay (+598)</option>
                                                            <option value="+998">Uzbekistan (+998)</option>
                                                            <option value="+678">Vanuatu (+678)</option>
                                                            <option value="+39">Vatican City (+39)</option>
                                                            <option value="+58">Venezuela (+58)</option>
                                                            <option value="+84">Vietnam (+84)</option>
                                                            <option value="+967">Yemen (+967)</option>
                                                            <option value="+260">Zambia (+260)</option>
                                                            <option value="+263">Zimbabwe (+263)</option>
                                                        </select>

                                                    </div>
                                                    <div className="form-group col-lg-10 mt-4" style={{ marginLeft: '-23px' }}>
                                                        <input type="text" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" value={formData.mobileNumber} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="simCompany">Mobile Network Operators (Sim)</label>
                                                    <select name="mobile_operator" className='form-select'>
                                                        <optgroup label="Pakistan">
                                                            <option value="Jazz (Mobilink)">Select Mobile Network Operators (Sim)</option>
                                                            <option value="Jazz">Jazz (Mobilink)</option>
                                                            <option value="Telenor Pakistan">Telenor Pakistan</option>
                                                            <option value="Zong (China Mobile)">Zong (China Mobile)</option>
                                                            <option value="Ufone">Ufone</option>
                                                        </optgroup>
                                                        <optgroup label="United Kingdom (UK)">
                                                            <option value="EE (part of BT Group)">EE (part of BT Group)</option>
                                                            <option value="Vodafone">Vodafone</option>
                                                            <option value="O2 (Telefónica UK)">O2 (Telefónica UK)</option>
                                                            <option value="Three UK">Three UK</option>
                                                        </optgroup>
                                                        <optgroup label="United States (USA)">
                                                            <option value="AT&T">AT&T</option>
                                                            <option value="Verizon">Verizon</option>
                                                            <option value="T-Mobile">T-Mobile</option>
                                                            <option value="Sprint (merged with T-Mobile)">Sprint (merged with T-Mobile)</option>
                                                        </optgroup>
                                                        <optgroup label="China">
                                                            <option value="China Mobile">China Mobile</option>
                                                            <option value="China Unicom">China Unicom</option>
                                                            <option value="China Telecom">China Telecom</option>
                                                        </optgroup>
                                                        <optgroup label="Bangladesh">
                                                            <option value="Grameenphone">Grameenphone</option>
                                                            <option value="Robi Axiata">Robi Axiata</option>
                                                            <option value="Banglalink">Banglalink</option>
                                                            <option value="Teletalk">Teletalk</option>
                                                        </optgroup>
                                                        <optgroup label="India">
                                                            <option value="Airtel">Airtel (Bharti Airtel)</option>
                                                            <option value="Jio (Reliance Jio)">Jio (Reliance Jio)</option>
                                                            <option value="Vodafone Idea (Vi)">Vodafone Idea (Vi)</option>
                                                            <option value="BSNL (Bharat Sanchar Nigam Limited)">BSNL (Bharat Sanchar Nigam Limited)</option>
                                                        </optgroup>
                                                        <optgroup label="Brazil">
                                                            <option value="Vivo (Telefónica Brasil)">Vivo (Telefónica Brasil)</option>
                                                            <option value="Claro">Claro</option>
                                                            <option value="TIM Brasil">TIM Brasil</option>
                                                            <option value="Oi">Oi</option>
                                                        </optgroup>
                                                        <optgroup label="South Africa">
                                                            <option value="Vodacom">Vodacom</option>
                                                            <option value="MTN">MTN</option>
                                                            <option value="Cell C">Cell C</option>
                                                            <option value="Telkom Mobile">Telkom Mobile</option>
                                                        </optgroup>
                                                        <optgroup label="Netherlands">
                                                            <option value="KPN">KPN</option>
                                                            <option value="VodafoneZiggo">VodafoneZiggo</option>
                                                            <option value="T-Mobile Netherlands">T-Mobile Netherlands</option>
                                                            <option value="Tele2 Netherlands">Tele2 Netherlands</option>
                                                        </optgroup>
                                                        <optgroup label="Oman">
                                                            <option value="Omantel">Omantel</option>
                                                            <option value="Ooredoo Oman">Ooredoo Oman</option>
                                                            <option value="Renna Mobile">Renna Mobile</option>
                                                        </optgroup>
                                                        <optgroup label="United Arab Emirates (Dubai)">
                                                            <option value="Etisalat">Etisalat</option>
                                                            <option value="Du">Du</option>
                                                        </optgroup>
                                                        <optgroup label="Saudi Arabia">
                                                            <option value="STC (Saudi Telecom Company)">STC (Saudi Telecom Company)</option>
                                                            <option value="Mobily">Mobily</option>
                                                            <option value="Zain">Zain</option>
                                                        </optgroup>
                                                        <optgroup label="Kuwait">
                                                            <option value="Zain">Zain</option>
                                                            <option value="Ooredoo Kuwait">Ooredoo Kuwait</option>
                                                            <option value="Viva (Saudi Telecom Company)">Viva (Saudi Telecom Company)</option>
                                                        </optgroup>
                                                        <optgroup label="Indonesia">
                                                            <option value="Telkomsel">Telkomsel</option>
                                                            <option value="XL Axiata">XL Axiata</option>
                                                            <option value="Indosat Ooredoo">Indosat Ooredoo</option>
                                                            <option value="Smartfren">Smartfren</option>
                                                        </optgroup>
                                                        <optgroup label="Vietnam">
                                                            <option value="Viettel">Viettel</option>
                                                            <option value="Mobifone">Mobifone</option>
                                                            <option value="Vinaphone">Vinaphone</option>
                                                        </optgroup>
                                                    </select>

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="country">Country Name</label>
                                                    <select className="form-select" id="country" placeholder="Enter Country Name" value={formData.country} onChange={handleInputChange}>
                                                        <option value="">Select Country</option>
                                                        <option value="United States">United States</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American Samoa">American Samoa</option>
                                                        <option value="Andorra">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Anguilla">Anguilla</option>
                                                        <option value="Antartica">Antarctica</option>
                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Aruba">Aruba</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Austria">Austria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Bahamas">Bahamas</option>
                                                        <option value="Bahrain">Bahrain</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Barbados">Barbados</option>
                                                        <option value="Belarus">Belarus</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Belize">Belize</option>
                                                        <option value="Benin">Benin</option>
                                                        <option value="Bermuda">Bermuda</option>
                                                        <option value="Bhutan">Bhutan</option>
                                                        <option value="Bolivia">Bolivia</option>
                                                        <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Cape Verde">Cape Verde</option>
                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                        <option value="Central African Republic">Central African Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Christmas Island">Christmas Island</option>
                                                        <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Congo">Congo</option>
                                                        <option value="Congo">Congo, the Democratic Republic of the</option>
                                                        <option value="Cook Islands">Cook Islands</option>
                                                        <option value="Costa Rica">Costa Rica</option>
                                                        <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                                        <option value="Croatia">Croatia (Hrvatska)</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czech Republic">Czech Republic</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                        <option value="East Timor">East Timor</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El Salvador">El Salvador</option>
                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="France Metropolitan">France, Metropolitan</option>
                                                        <option value="French Guiana">French Guiana</option>
                                                        <option value="French Polynesia">French Polynesia</option>
                                                        <option value="French Southern Territories">French Southern Territories</option>
                                                        <option value="Gabon">Gabon</option>
                                                        <option value="Gambia">Gambia</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Gibraltar">Gibraltar</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="Greenland">Greenland</option>
                                                        <option value="Grenada">Grenada</option>
                                                        <option value="Guadeloupe">Guadeloupe</option>
                                                        <option value="Guam">Guam</option>
                                                        <option value="Guatemala">Guatemala</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                                        <option value="Holy See">Holy See (Vatican City State)</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong Kong">Hong Kong</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran">Iran (Islamic Republic of)</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kiribati">Kiribati</option>
                                                        <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                                        <option value="Korea">Korea, Republic of</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Lao">Lao People's Democratic Republic</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macau">Macau</option>
                                                        <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                        <option value="Martinique">Martinique</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mayotte">Mayotte</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Micronesia">Micronesia, Federated States of</option>
                                                        <option value="Moldova">Moldova, Republic of</option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montserrat">Montserrat</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nauru">Nauru</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands">Netherlands</option>
                                                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                        <option value="New Caledonia">New Caledonia</option>
                                                        <option value="New Zealand">New Zealand</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="Niue">Niue</option>
                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                                        <option value="Paraguay">Paraguay</option>
                                                        <option value="Peru">Peru</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Pitcairn">Pitcairn</option>
                                                        <option value="Poland">Poland</option>
                                                        <option value="Portugal">Portugal</option>
                                                        <option value="Puerto Rico">Puerto Rico</option>
                                                        <option value="Qatar">Qatar</option>
                                                        <option value="Reunion">Reunion</option>
                                                        <option value="Romania">Romania</option>
                                                        <option value="Russia">Russian Federation</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                        <option value="Saint Lucia">Saint LUCIA</option>
                                                        <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San Marino">San Marino</option>
                                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South Africa">South Africa</option>
                                                        <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                                        <option value="Span">Spain</option>
                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                        <option value="St. Helena">St. Helena</option>
                                                        <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syria">Syrian Arab Republic</option>
                                                        <option value="Taiwan">Taiwan, Province of China</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania">Tanzania, United Republic of</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tokelau">Tokelau</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                                        <option value="Tuvalu">Tuvalu</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Vietnam">Viet Nam</option>
                                                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                        <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                                        <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                                        <option value="Western Sahara">Western Sahara</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>
                                                    {/* <input type="text" className="form-control" id="country" placeholder="Enter Country Name" value={formData.country} onChange={handleInputChange} /> */}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="city">City Name</label>
                                                    <select name="Location" className="form-select" id="city" placeholder="Enter City Name" value={formData.city} onChange={handleInputChange} required>
                                                        <option value="" disabled selected>Select The City</option>
                                                        <option value="Islamabad">Islamabad</option>
                                                        <option value="" disabled>Punjab Cities</option>
                                                        <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                                                        <option value="Ahmadpur East">Ahmadpur East</option>
                                                        <option value="Ali Khan Abad">Ali Khan Abad</option>
                                                        <option value="Alipur">Alipur</option>
                                                        <option value="Arifwala">Arifwala</option>
                                                        <option value="Attock">Attock</option>
                                                        <option value="Bhera">Bhera</option>
                                                        <option value="Bhalwal">Bhalwal</option>
                                                        <option value="Bahawalnagar">Bahawalnagar</option>
                                                        <option value="Bahawalpur">Bahawalpur</option>
                                                        <option value="Bhakkar">Bhakkar</option>
                                                        <option value="Burewala">Burewala</option>
                                                        <option value="Chillianwala">Chillianwala</option>
                                                        <option value="Chakwal">Chakwal</option>
                                                        <option value="Chichawatni">Chichawatni</option>
                                                        <option value="Chiniot">Chiniot</option>
                                                        <option value="Chishtian">Chishtian</option>
                                                        <option value="Daska">Daska</option>
                                                        <option value="Darya Khan">Darya Khan</option>
                                                        <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                                        <option value="Dhaular">Dhaular</option>
                                                        <option value="Dina">Dina</option>
                                                        <option value="Dinga">Dinga</option>
                                                        <option value="Dipalpur">Dipalpur</option>
                                                        <option value="Faisalabad">Faisalabad</option>
                                                        <option value="Ferozewala">Ferozewala</option>
                                                        <option value="Fateh Jhang">Fateh Jang</option>
                                                        <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                                                        <option value="Gojra">Gojra</option>
                                                        <option value="Gujranwala">Gujranwala</option>
                                                        <option value="Gujrat">Gujrat</option>
                                                        <option value="Gujar Khan">Gujar Khan</option>
                                                        <option value="Hafizabad">Hafizabad</option>
                                                        <option value="Haroonabad">Haroonabad</option>
                                                        <option value="Hasilpur">Hasilpur</option>
                                                        <option value="Haveli Lakha">Haveli Lakha</option>
                                                        <option value="Jatoi">Jatoi</option>
                                                        <option value="Jalalpur">Jalalpur</option>
                                                        <option value="Jattan">Jattan</option>
                                                        <option value="Jampur">Jampur</option>
                                                        <option value="Jaranwala">Jaranwala</option>
                                                        <option value="Jhang">Jhang</option>
                                                        <option value="Jhelum">Jhelum</option>
                                                        <option value="Kalabagh">Kalabagh</option>
                                                        <option value="Karor Lal Esan">Karor Lal Esan</option>
                                                        <option value="Kasur">Kasur</option>
                                                        <option value="Kamalia">Kamalia</option>
                                                        <option value="Kamoke">Kamoke</option>
                                                        <option value="Khanewal">Khanewal</option>
                                                        <option value="Khanpur">Khanpur</option>
                                                        <option value="Kharian">Kharian</option>
                                                        <option value="Khushab">Khushab</option>
                                                        <option value="Kot Addu">Kot Addu</option>
                                                        <option value="Jauharabad">Jauharabad</option>
                                                        <option value="Lahore">Lahore</option>
                                                        <option value="Lalamusa">Lalamusa</option>
                                                        <option value="Layyah">Layyah</option>
                                                        <option value="Liaquat Pur">Liaquat Pur</option>
                                                        <option value="Lodhran">Lodhran</option>
                                                        <option value="Malakwal">Malakwal</option>
                                                        <option value="Mamoori">Mamoori</option>
                                                        <option value="Mailsi">Mailsi</option>
                                                        <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                                                        <option value="Mian Channu">Mian Channu</option>
                                                        <option value="Mianwali">Mianwali</option>
                                                        <option value="Multan">Multan</option>
                                                        <option value="Murree">Murree</option>
                                                        <option value="Muridke">Muridke</option>
                                                        <option value="Mianwali Bangla">Mianwali Bangla</option>
                                                        <option value="Muzaffargarh">Muzaffargarh</option>
                                                        <option value="Narowal">Narowal</option>
                                                        <option value="Nankana Sahib">Nankana Sahib</option>
                                                        <option value="Okara">Okara</option>
                                                        <option value="Renala Khurd">Renala Khurd</option>
                                                        <option value="Pakpattan">Pakpattan</option>
                                                        <option value="Pattoki">Pattoki</option>
                                                        <option value="Pir Mahal">Pir Mahal</option>
                                                        <option value="Qaimpur">Qaimpur</option>
                                                        <option value="Qila Didar Singh">Qila Didar Singh</option>
                                                        <option value="Rabwah">Rabwah</option>
                                                        <option value="Raiwind">Raiwind</option>
                                                        <option value="Rajanpur">Rajanpur</option>
                                                        <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                                        <option value="Rawalpindi">Rawalpindi</option>
                                                        <option value="Sadiqabad">Sadiqabad</option>
                                                        <option value="Safdarabad">Safdarabad</option>
                                                        <option value="Sahiwal">Sahiwal</option>
                                                        <option value="Sangla Hill">Sangla Hill</option>
                                                        <option value="Sarai Alamgir">Sarai Alamgir</option>
                                                        <option value="Sargodha">Sargodha</option>
                                                        <option value="Shakargarh">Shakargarh</option>
                                                        <option value="Sheikhupura">Sheikhupura</option>
                                                        <option value="Sialkot">Sialkot</option>
                                                        <option value="Sohawa">Sohawa</option>
                                                        <option value="Soianwala">Soianwala</option>
                                                        <option value="Siranwali">Siranwali</option>
                                                        <option value="Talagang">Talagang</option>
                                                        <option value="Taxila">Taxila</option>
                                                        <option value="Toba Tek Singh">Toba Tek Singh</option>
                                                        <option value="Vehari">Vehari</option>
                                                        <option value="Wah Cantonment">Wah Cantonment</option>
                                                        <option value="Wazirabad">Wazirabad</option>
                                                        <option value="" disabled>Sindh Cities</option>
                                                        <option value="Badin">Badin</option>
                                                        <option value="Bhirkan">Bhirkan</option>
                                                        <option value="Rajo Khanani">Rajo Khanani</option>
                                                        <option value="Chak">Chak</option>
                                                        <option value="Dadu">Dadu</option>
                                                        <option value="Digri">Digri</option>
                                                        <option value="Diplo">Diplo</option>
                                                        <option value="Dokri">Dokri</option>
                                                        <option value="Ghotki">Ghotki</option>
                                                        <option value="Haala">Haala</option>
                                                        <option value="Hyderabad">Hyderabad</option>
                                                        <option value="Islamkot">Islamkot</option>
                                                        <option value="Jacobabad">Jacobabad</option>
                                                        <option value="Jamshoro">Jamshoro</option>
                                                        <option value="Jungshahi">Jungshahi</option>
                                                        <option value="Kandhkot">Kandhkot</option>
                                                        <option value="Kandiaro">Kandiaro</option>
                                                        <option value="Karachi">Karachi</option>
                                                        <option value="Kashmore">Kashmore</option>
                                                        <option value="Keti Bandar">Keti Bandar</option>
                                                        <option value="Khairpur">Khairpur</option>
                                                        <option value="Kotri">Kotri</option>
                                                        <option value="Larkana">Larkana</option>
                                                        <option value="Matiari">Matiari</option>
                                                        <option value="Mehar">Mehar</option>
                                                        <option value="Mirpur Khas">Mirpur Khas</option>
                                                        <option value="Mithani">Mithani</option>
                                                        <option value="Mithi">Mithi</option>
                                                        <option value="Mehrabpur">Mehrabpur</option>
                                                        <option value="Moro">Moro</option>
                                                        <option value="Nagarparkar">Nagarparkar</option>
                                                        <option value="Naudero">Naudero</option>
                                                        <option value="Naushahro Feroze">Naushahro Feroze</option>
                                                        <option value="Naushara">Naushara</option>
                                                        <option value="Nawabshah">Nawabshah</option>
                                                        <option value="Nazimabad">Nazimabad</option>
                                                        <option value="Qambar">Qambar</option>
                                                        <option value="Qasimabad">Qasimabad</option>
                                                        <option value="Ranipur">Ranipur</option>
                                                        <option value="Ratodero">Ratodero</option>
                                                        <option value="Rohri">Rohri</option>
                                                        <option value="Sakrand">Sakrand</option>
                                                        <option value="Sanghar">Sanghar</option>
                                                        <option value="Shahbandar">Shahbandar</option>
                                                        <option value="Shahdadkot">Shahdadkot</option>
                                                        <option value="Shahdadpur">Shahdadpur</option>
                                                        <option value="Shahpur Chakar">Shahpur Chakar</option>
                                                        <option value="Shikarpaur">Shikarpaur</option>
                                                        <option value="Sukkur">Sukkur</option>
                                                        <option value="Tangwani">Tangwani</option>
                                                        <option value="Tando Adam Khan">Tando Adam Khan</option>
                                                        <option value="Tando Allahyar">Tando Allahyar</option>
                                                        <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                                                        <option value="Thatta">Thatta</option>
                                                        <option value="Umerkot">Umerkot</option>
                                                        <option value="Warah">Warah</option>
                                                        <option value="" disabled>Khyber Cities</option>
                                                        <option value="Abbottabad">Abbottabad</option>
                                                        <option value="Adezai">Adezai</option>
                                                        <option value="Alpuri">Alpuri</option>
                                                        <option value="Akora Khattak">Akora Khattak</option>
                                                        <option value="Ayubia">Ayubia</option>
                                                        <option value="Banda Daud Shah">Banda Daud Shah</option>
                                                        <option value="Bannu">Bannu</option>
                                                        <option value="Batkhela">Batkhela</option>
                                                        <option value="Battagram">Battagram</option>
                                                        <option value="Birote">Birote</option>
                                                        <option value="Chakdara">Chakdara</option>
                                                        <option value="Charsadda">Charsadda</option>
                                                        <option value="Chitral">Chitral</option>
                                                        <option value="Daggar">Daggar</option>
                                                        <option value="Dargai">Dargai</option>
                                                        <option value="Darya Khan">Darya Khan</option>
                                                        <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                                                        <option value="Doaba">Doaba</option>
                                                        <option value="Dir">Dir</option>
                                                        <option value="Drosh">Drosh</option>
                                                        <option value="Hangu">Hangu</option>
                                                        <option value="Haripur">Haripur</option>
                                                        <option value="Karak">Karak</option>
                                                        <option value="Kohat">Kohat</option>
                                                        <option value="Kulachi">Kulachi</option>
                                                        <option value="Lakki Marwat">Lakki Marwat</option>
                                                        <option value="Latamber">Latamber</option>
                                                        <option value="Madyan">Madyan</option>
                                                        <option value="Mansehra">Mansehra</option>
                                                        <option value="Mardan">Mardan</option>
                                                        <option value="Mastuj">Mastuj</option>
                                                        <option value="Mingora">Mingora</option>
                                                        <option value="Nowshera">Nowshera</option>
                                                        <option value="Paharpur">Paharpur</option>
                                                        <option value="Pabbi">Pabbi</option>
                                                        <option value="Peshawar">Peshawar</option>
                                                        <option value="Saidu Sharif">Saidu Sharif</option>
                                                        <option value="Shorkot">Shorkot</option>
                                                        <option value="Shewa Adda">Shewa Adda</option>
                                                        <option value="Swabi">Swabi</option>
                                                        <option value="Swat">Swat</option>
                                                        <option value="Tangi">Tangi</option>
                                                        <option value="Tank">Tank</option>
                                                        <option value="Thall">Thall</option>
                                                        <option value="Timergara">Timergara</option>
                                                        <option value="Tordher">Tordher</option>
                                                        <option value="" disabled>Balochistan Cities</option>
                                                        <option value="Awaran">Awaran</option>
                                                        <option value="Barkhan">Barkhan</option>
                                                        <option value="Chagai">Chagai</option>
                                                        <option value="Dera Bugti">Dera Bugti</option>
                                                        <option value="Gwadar">Gwadar</option>
                                                        <option value="Harnai">Harnai</option>
                                                        <option value="Jafarabad">Jafarabad</option>
                                                        <option value="Jhal Magsi">Jhal Magsi</option>
                                                        <option value="Kacchi">Kacchi</option>
                                                        <option value="Kalat">Kalat</option>
                                                        <option value="Kech">Kech</option>
                                                        <option value="Kharan">Kharan</option>
                                                        <option value="Khuzdar">Khuzdar</option>
                                                        <option value="Killa Abdullah">Killa Abdullah</option>
                                                        <option value="Killa Saifullah">Killa Saifullah</option>
                                                        <option value="Kohlu">Kohlu</option>
                                                        <option value="Lasbela">Lasbela</option>
                                                        <option value="Lehri">Lehri</option>
                                                        <option value="Loralai">Loralai</option>
                                                        <option value="Mastung">Mastung</option>
                                                        <option value="Musakhel">Musakhel</option>
                                                        <option value="Nasirabad">Nasirabad</option>
                                                        <option value="Nushki">Nushki</option>
                                                        <option value="Panjgur">Panjgur</option>
                                                        <option value="Pishin Valley">Pishin Valley</option>
                                                        <option value="Quetta">Quetta</option>
                                                        <option value="Sherani">Sherani</option>
                                                        <option value="Sibi">Sibi</option>
                                                        <option value="Sohbatpur">Sohbatpur</option>
                                                        <option value="Washuk">Washuk</option>
                                                        <option value="Zhob">Zhob</option>
                                                        <option value="Ziarat">Ziarat</option>
                                                    </select>
                                                    {/* <input type="text" className="form-control" id="city" placeholder="Enter City Name" value={formData.city} onChange={handleInputChange} /> */}
                                                </div>
                                              

                                                <div className="form-group">
                                                    <label htmlFor="fromDate">From Date (Valid Tracking 1 Year)</label>
                                                    <input type="date" className="form-control" id="fromDate" value={formData.fromDate} onChange={handleInputChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="toDate">To Date</label>
                                                    <input type="date" className="form-control" id="toDate" value={formData.toDate} onChange={handleInputChange} />
                                                </div>
                                                <button type="submit" className="btn me-2" style={{ padding: '10px 50px', marginLeft: '40%', background: 'red', fontSize: '20px', fontWeight: 'bold' }}>Tracking</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer"></footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstagramHacking;
