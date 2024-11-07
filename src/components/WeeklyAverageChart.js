import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeeklyAverageChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Weekly Average',
                data: [6, 4, 3, 5, 7, 5, 6], // Example data for weekly average in hours
                backgroundColor: 'rgba(76, 175, 80, 0.2)', // Light green background fill
                borderColor: 'rgba(76, 175, 80, 1)', // Green line color
                pointBackgroundColor: 'rgba(76, 175, 80, 1)', // Points color
                pointBorderColor: '#fff',
                fill: true,
                tension: 0.4, // Smooth curve line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the default legend
            },
            title: {
                display: true,
                color: 'white',
                text: 'This week daily average',
                font: {
                    size: 18,
                },
                padding: { top: 10, bottom: 30 },
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Hours',
                },
                ticks: {
                    callback: function (value) {
                        return `${value}h`; // Display 'h' after each y-axis tick
                    },
                },
                beginAtZero: true,
                suggestedMax: 10, // Adjust based on data range
            },
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week',
                },
            },
        },
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ width: '600px' }}>
                <Line data={data} options={options} />
            </div>
            <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '16px', color: '#2196F3', fontWeight: 'bold' }}>Chats</div>
                <div>4h 20m</div>
                <div style={{ fontSize: '16px', color: '#4CAF50', fontWeight: 'bold' }}>Status</div>
                <div>2h 20m</div>
                <div style={{ fontSize: '16px', color: '#FFEB3B', fontWeight: 'bold' }}>Calls</div>
                <div>1h 20m</div>
            </div>
        </div>
    );
};

export default WeeklyAverageChart;
