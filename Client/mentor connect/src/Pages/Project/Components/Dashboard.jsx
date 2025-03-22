import React from 'react'
import GrantChart from './GrantChart'
import EcommerceMetrics from '../../ProjectManagement/components/ecommerce/EcommerceMetrics'
import MonthlyTarget from '../../ProjectManagement/components/ecommerce/MonthlyTarget'
import RecentOrders from '../../ProjectManagement/components/ecommerce/RecentOrders'


const Dashboard = (props) => {

  return (
    <div>
      <div className="DashboardTop flex gap-6">
        <div className="DashboardTopLeft md:w-2/3 gap-6">
          <EcommerceMetrics id={props.id}/>
          <div className="DashboardTopLeftBottom flex gap-6 my-6">
          </div>
        </div>
        <div className="DashboardTopRight gap-6">
          <MonthlyTarget id={props.id}/>
        </div>
      </div>

      <div className="DashboardMiddle my-6">
        <RecentOrders id={props.id}/>
      </div>

      {/* {<div className="GanntchartArea ">
        <div className="GanntchartAreaTitle mb-6">Project Timeline</div>
        <div className="ganntchart bg-[#fff] h-100 round">
          <GrantChart />
        </div>
      </div>} */}

    </div>
  )
}

export default Dashboard
