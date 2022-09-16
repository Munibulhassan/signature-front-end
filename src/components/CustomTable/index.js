import React from "react";
import { useTable } from "react-table";
// import Pagination from "@material-ui/lab/Pagination";

const CustomTable = ({
  columns,
  data,
  customStyle,
  lengthValidation,
  validationText,
  totalCounting,
  pageChange,
  page,
  id,
  ref,
  staticHeader
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className="table-responsive shadow shadow-success">
      {/* {lengthValidation ? ( */}
        <table
          border="0"
          id={id}
          ref={ref}
        //   style={customStyle}
          className="table table-bordered"
          {...getTableProps()}
        >
          <thead>
            <tr>
            {staticHeader}

            </tr>
            <tr className="bg-secondary">
              <th colspan="4">

            <h3>Plan Information</h3>
              </th>

            </tr>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                // style={{ border: "none" }}
              >
                {/* <th
                  style={{
                    color: "#E8F0F2 :",
                    fontWeight: 500,
                    width: 55,
                  }}
                >
                  S. No
                </th> */}
                {headerGroup.headers.map((column, ind) => (
                  <th
                    // style={{
                    //   color: "#E8F0F2",
                    //   fontWeight: 500,
                    //   textAlign: ind === 0 ? null : "center",
                    // }}
                    className="col-lg-3 col-xl-3 col-md-3 col-sm-3 p-3"
                    // scope="col"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr className="border-bottom" {...row.getRowProps()}>
                  {/* <td
                    style={{
                      verticalAlign: "middle",
                      color: "#053742",
                      backgroundColor: "#E8F0F2",
                    }}
                  >
                    {i + 1}
                  </td> */}
                  {row.cells.map((cell, ind) => {
                    return (
                      <td
                      className="p-3"
                        // style={{
                        //   verticalAlign: "middle",
                        //   color: "#053742",
                        //   backgroundColor: "#E8F0F2",
                        //   textAlign: ind === 0 ? null : "center",
                        // }}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
    {/* //   ) : (
    //     <div className="d-flex justify-content-center text-20-bold text-dark">
    //       {validationText}
    //     </div>
    //   )} */}
      {/* {totalCounting > 0 ? (
        <div className="paginatio-middle">
          <Pagination
            count={totalCounting}
            page={page}
            shape="rounded"
            onChange={pageChange}
          />
        </div>
      ) : null} */}
    </div>
  );
};

export default CustomTable;
