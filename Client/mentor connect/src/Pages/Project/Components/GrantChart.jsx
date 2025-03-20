import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

// Register Chart.js components & DataLabels plugin
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartDataLabels);

const GrantChart = () => {
    const data = {
        labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"],
        datasets: [{
            label: "Project Tasks",
            data: [
                { x: [1, 4], y: "Task 1" },
                { x: [3, 6], y: "Task 2" },
                { x: [5, 8], y: "Task 3" },
                { x: [7, 10], y: "Task 4" },
                { x: [4, 14], y: "Task 5" }
            ],
            backgroundColor: "#4CAF50",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            borderRadius: 10,
            borderSkipped: false,
            barThickness: 300,
        }]
    };

    const options = {
        indexAxis: "y",
        scales: {
            y: {
                grid: { display: false },
                ticks: { display: false },
                afterFit: (c) => {
                    c.width = 40;
                }
            },
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: "Time (Days)"
                },
                min: 0,
                max: 12
            }
        },
        responsive: true,
        maintainAspectRatio: false, // Allows manual height setting
        plugins: {
            legend: { display: false },
            datalabels: {
                anchor: "center",
                align: "center",
                color: "#FFF",
                font: {
                    weight: "bold",
                    size: 16
                },
                formatter: (value, context) => context.chart.data.labels[context.dataIndex],
            }
        }
    };

    return (
        <div style={{
            width: "100%",
            height: "100%", /* Set height for exactly 3 tasks */
            overflowY: "auto" /* Enable scrolling */
        }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default GrantChart;
