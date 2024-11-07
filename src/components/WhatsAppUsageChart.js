import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WhatsAppUsageChart = () => {
    const data = {
        labels: Array.from({ length: 24 }, (_, i) => i), // Hours from 0 to 23
        datasets: [
            {
                label: 'Chats',
                data: [20, 15, 10, 5, 2, 8, 15, 20, 25, 30, 35, 45, 30, 25, 15, 10, 20, 40, 35, 25, 30, 15, 10, 30],
                backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue for Chats
            },
            {
                label: 'Status',
                data: [10, 8, 5, 2, 1, 5, 10, 15, 20, 25, 30, 35, 20, 15, 10, 8, 15, 25, 30, 20, 25, 10, 5, 20],
                backgroundColor: 'rgba(75, 192, 192, 0.7)', // Green for Status
            },
            {
                label: 'Calls',
                data: [5, 3, 2, 1, 1, 3, 5, 8, 10, 12, 15, 18, 12, 10, 5, 3, 8, 15, 18, 12, 15, 5, 3, 10],
                backgroundColor: 'rgba(255, 206, 86, 0.7)', // Yellow for Calls
            },
        ],
    };

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
                text: 'WhatsApp Usage - November 07',
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
