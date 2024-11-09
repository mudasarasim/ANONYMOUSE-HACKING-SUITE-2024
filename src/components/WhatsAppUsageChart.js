import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const generateRandomData = () => {
    // Generate random data for each of the three datasets
    const generateRandomValues = () => Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)); // Random values between 0 and 50

    return {
        labels: Array.from({ length: 24 }, (_, i) => i), // Hours from 0 to 23
        datasets: [
            {
                label: 'Chats',
                data: generateRandomValues(),
                backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue for Chats
            },
            {
                label: 'Status',
                data: generateRandomValues(),
                backgroundColor: 'rgba(75, 192, 192, 0.7)', // Green for Status
            },
            {
                label: 'Calls',
                data: generateRandomValues(),
                backgroundColor: 'rgba(255, 206, 86, 0.7)', // Yellow for Calls
            },
        ],
    };
};

const WhatsAppUsageChart = () => {
    const data = generateRandomData(); // Generate random data for each render

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 24,
                    },
                },
            },
            title: {
                display: true,
                text: '',
                font: {
                    size: 18, // Increase title font size
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 50, // Adjust this based on your data scale
                title: {
                    display: true,
                    text: 'Minutes',
                    font: {
                        size: 16, // Increase Y-axis title font size
                    },
                },
                ticks: {
                    font: {
                        size: 14, // Increase Y-axis ticks font size
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Hour',
                    font: {
                        size: 16, // Increase X-axis title font size
                    },
                },
                ticks: {
                    font: {
                        size: 14, // Increase X-axis ticks font size
                    },
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default WhatsAppUsageChart;
