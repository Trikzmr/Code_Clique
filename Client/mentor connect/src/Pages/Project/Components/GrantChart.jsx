import React, { useState, useEffect } from 'react';
import './GrantChart.css';
import GrantChartCol from './GrantChartCol';

const GrantChart = () => {
    const [days, setdays] = useState([]);

    const Task = [
        {
            Title: "Task 1",
            StartDate: "2025-01-01",
            EndDate: "2025-01-05",
        },
        {
            Title: "Task 4",
            StartDate: "2025-01-03",
            EndDate: "2025-01-12",
        },
        {
            Title: "Task 2",
            StartDate: "2025-01-06",
            EndDate: "2025-01-10",
        },
        {
            Title: "Task 3",
            StartDate: "2025-01-11",
            EndDate: "2025-01-15",
        },
    ];

    // Function to check if the given date falls within the Task StartDate and EndDate
    const checkifTask = (date) => {
        const gotTask = [];
        const targetDate = new Date(date) // Convert 'date' to a Date object
        targetDate.setDate(targetDate.getDate() + 1);

        for (let i = 0; i < Task.length; i++) {
            const taskStartDate = new Date(Task[i].StartDate); // Convert StartDate to Date object
            const taskEndDate = new Date(Task[i].EndDate); // Convert EndDate to Date object
            taskEndDate.setDate(taskEndDate.getDate() + 1);
            // Convert the comparison dates into the same format and compare
            if (targetDate >= taskStartDate && targetDate <= taskEndDate) {
                gotTask.push({
                    Title: Task[i],
                    index:i
                });
            }
        }
        return gotTask;
    };

    // Generate all the days of the year, and check for tasks that span each day
    useEffect(() => {
        const startDate = new Date(2025, 0, 1); // Jan 1st, 2025
        const endDate = new Date(2026, 0, 1); // Jan 1st, 2026
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const dates = [];

        for (let d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
            let TaskList = checkifTask(d);
            dates.push({
                day: dayNames[d.getDay()],
                month: monthNames[d.getMonth()],
                date: d.getDate(),
                year: d.getFullYear(),
                Task: TaskList
            });
        }
        setdays(dates);
    }, []);

    const renderdate = (day, index) => {
        return (
            <GrantChartCol key={index} day={day} />
        );
    };

    return (
        <div className="grant-chart">
            <div className="chart flex overflow-x-scroll">
                {days.map((day, index) => renderdate(day, index))}
            </div>
        </div>
    );
};

export default GrantChart;
