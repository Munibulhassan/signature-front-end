import React from "react";
// import { useTable } from "react-table";
import ReactTable from "react-table";
// import Pagination from "@material-ui/lab/Pagination";

const CustomTable1 = ({
  columns,
  // data,
  customStyle,
  lengthValidation,
  validationText,
  totalCounting,
  pageChange,
  page,
  id,
  ref,
}) => {
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });
 const data = [{firstName:"a"}]
 
  return (

    <ReactTable
    data={data}
    columns={[
      {
        // Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            // width: 200
          }
        ]
      },
    ]}
  
  />
  );
};

export default CustomTable1;
