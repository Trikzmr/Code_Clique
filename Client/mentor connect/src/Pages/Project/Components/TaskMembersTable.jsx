import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ProjectManagement/components/ui/table";
import Badge from "../../ProjectManagement/components/ui/badge/Badge";
import React, {useState, useEffect}from "react";


export default function TaskMembersTable({id, data}) {
    const members=data.Members;

    const [Members, setMembers] = useState([])
  

  


  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
                <span className="border-l-4 border-blue-500 pl-2">Members Associated with this project</span>
            </h3>
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
                        Name
                    </TableCell>
                    </TableRow>
                </TableHeader>

                {/* Table Body */}

                <TableBody className="divide-y divide-gray-100">
                    {members.map((product) => (
                    <TableRow key={product._id} className="">
                        <TableCell className="py-3">
                        <div className="flex items-center gap-3">
                            <div>
                            <p className="font-medium text-gray-800 text-theme-sm">
                                {product}
                            </p>
                            </div>
                        </div>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </div>
    </div>
  );
}
