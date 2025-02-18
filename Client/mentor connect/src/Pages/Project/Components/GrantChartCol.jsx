import React from 'react'

const GrantChartCol = (props) => {
    let index = props.index;
    let day = props.day;
    let Task = props.day.Task

    const tasknum = [
        {
            Title: {Title: '', StartDate: '', EndDate: ''},
            index: 0
        },
        {
            Title: {Title: '', StartDate: '', EndDate: ''},
            index: 1
        },
        {
            Title: {Title: '', StartDate: '', EndDate: ''},
            index: 2
        },
        {
            Title: {Title: '', StartDate: '', EndDate: ''},
            index: 3
        }
    ];
    Task.map((task, index) => {
        //console.log(task);
        tasknum[task.index] = task;
    })

  return (
    <div key={index} className=" daycol min-w-[130px]" >
        <div className="day bg-amber-400">
            <div className="dayname">{day.day}</div>
            <div className="date">{day.date}</div>
            <div className="month">{day.month}</div>
            <div className="year">{day.year}</div>
            
        </div>
        <div className="timeline">
        <div className="task ">
                {tasknum.map((task, index) => {
                    {
                        if(task.Title.Title === ''){
                            return (
                                <div key={index} className="taskname h-10"></div>
                            );
                        }
                        else{
                            return (
                                <div key={index} className="taskname h-10 bg-blue-500">{task.Title.Title}</div>
                            );
                        }
                    }
                    return (
                        <div key={index} className="taskname h-10 bg-blue-500">{task.Title.Title}</div>
                    );
                })
                }
            </div>
        </div>
    </div>
  )
}

export default GrantChartCol
