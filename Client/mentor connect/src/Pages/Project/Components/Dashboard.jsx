import React from 'react'
import GrantChart from './GrantChart'
import EcommerceMetrics from '../../ProjectManagement/components/ecommerce/EcommerceMetrics'
import MonthlyTarget from '../../ProjectManagement/components/ecommerce/MonthlyTarget'
import RecentOrders from '../../ProjectManagement/components/ecommerce/RecentOrders'
import Callformeet from './Callformeet'
import MonthlySalesChart from '../../ProjectManagement/components/ecommerce/MonthlySalesChart'


const Dashboard = (props) => {
  
  return (
    <div>
      <div className="DashboardTop flex gap-6">
        <div className="DashboardTopLeft md:w-2/3 gap-6">
          <EcommerceMetrics id={props.id}/>
          <div className="DashboardTopLeftBottom md:gap-6 mt-6">
            
              <MonthlySalesChart/>
           
          </div>
        </div>
        <div className="DashboardTopRight gap-6">
          <MonthlyTarget id={props.id}/>
        </div>
      </div>

      <div className="DashboardMiddle my-6">
        <RecentOrders id={props.id}/>
      </div>

    </div>
  )
}

export default Dashboard
