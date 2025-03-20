import React from 'react'
import GrantChart from './GrantChart'
import EcommerceMetrics from '../../ProjectManagement/components/ecommerce/EcommerceMetrics'
import MonthlyTarget from '../../ProjectManagement/components/ecommerce/MonthlyTarget'
import RecentOrders from '../../ProjectManagement/components/ecommerce/RecentOrders'


const Dashboard = () => {
  return (
    <div>
      <div className="DashboardTop flex gap-6">
        <div className="DashboardTopLeft md:w-2/3 gap-6">
          <EcommerceMetrics />
        </div>
        <div className="DashboardTopRight gap-6">
          <MonthlyTarget />
        </div>
      </div>

      <RecentOrders/>
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
