import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const generateRandomCallData = () => {
    const names = [
        'Ahmed Khan', 'Fatima Ali', 'Ali Rehman', 'Sara Javed', 'Usman Tariq',
        'Ayesha Malik', 'Bilal Shah', 'Zainab Bhatti', 'Muneeb Akhtar', 'Mariam Khan',
        'Hasan Ali', 'Nadia Hussain', 'Faisal Mehmood', 'Hina Iqbal', 'Rashid Ahmed',
        'Sana Jamil', 'Omar Farooq', 'Zara Bashir', 'Kashan Saeed', 'Noor Fatima',
        'Tariq Mahmood', 'Mehwish Khan', 'Kamran Shah', 'Miraal Hussain', 'Asad Mehmood',
        'Nashit Khan', 'Aiman Tariq', 'Sadia Anwar', 'Muneeb Shahid', 'Hassan Shamsi'
    ];
    
    // Randomly generate call history for 40 records
    const randomCallData = Array.from({ length: 40 }, () => {
        const name = names[Math.floor(Math.random() * names.length)];
        const phoneNumber = `+92 ${Math.floor(Math.random() * 300) + 300} ${Math.floor(Math.random() * 1000000000)}`;
        const duration = (Math.random() * 120).toFixed(2); // Call duration between 0 and 120 minutes
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 365)); // Random date within the past year
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return {
            name,
            phoneNumber,
            duration,
            date: formattedDate,
        };
    });

    return randomCallData;
};

const CallHistory = () => {
    const callHistory = generateRandomCallData(); // Generate random call data

    return (
        <>
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
                                <div className="col-lg-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title"><i className="fa fa-phone"></i> Calls History</h2>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>From</th>
                                                            <th>Number</th>
                                                            <th>Call Duration</th>
                                                            <th>Date & Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {callHistory.map((call, index) => (
                                                            <tr key={index}>
                                                                <td>{call.name}</td>
                                                                <td>{call.phoneNumber}</td>
                                                                <td>{call.duration} mins</td>
                                                                <td>{call.date}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
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

export default CallHistory;
