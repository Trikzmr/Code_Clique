import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import React, {useState, useEffect}from "react";
import ListMembers from "./ListMembers";

export default function RecentOrders(props) {

  const [taskList, setTaskList] = useState([{Status:"",
  Title:"",
  StartDate:"",
  Members:[],
  _id:""
  }]);
  let projectid = props.id;

  const getTaskList = async() => {
    const container = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ ProjectId: projectid }),
    }
    try {
        const res = await fetch('https://code-clique-9qgm.vercel.app/api/FindTaskByProjectId', container);
        const data = await res.json();
        setTaskList(data);
    } catch (error) {
        console.log(error);
    }
}
  
  const onload = () => {
      getTaskList();
  }

  useEffect(onload, []);


  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 max-h-140 overflow-y-scroll">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Completed Status
          </h3>
        </div>

        <div className="flex items-center gap-3">
          
          
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs"
              >
                Tasks
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs"
              >
                Assigned To
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs"
              >
                Start Date
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100">
            {taskList.map((product) => (
              <TableRow key={product._id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm">
                        {product.Title}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm">
                  <ListMembers data={product.Members}/>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm">
                  {product.StartDate}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm">
                  <Badge
                    size="sm"
                    color={
                      product.Status === "Completed"
                        ? "success"
                        : product.Status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {product.Status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
