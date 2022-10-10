import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { imageURL } from "../action/config";
import TableRows from "./TableRows";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Calculations() {
  const submitcontract = async () => {
    html2canvas(document.getElementById("newcalculation")).then(
      async (canvas) => {
        document.body.appendChild(canvas); // if you want see your screenshot in body.
        const imgData = canvas.toDataURL("image/png");
        // imgData.save("Invoice.png")
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save(
          JSON.parse(localStorage.getItem("user"))._id +
            "-" +
            (new Date().getDate() + "-" + (new Date().getMonth() + 1)) +
            ".pdf"
        );
      }
    );
  };

  const [rowsData, setRowsData] = useState([
    {
      sno: 1,
      item: "",
      unit: "",
      price: "",
      total: "",
    },
  ]);
  const [total, settotal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  //   useEffect(() => {
  //     settotal(
  //       rowsData.reduce((a, b) => {
  //         return a + b.total;
  //       }, 0)
  //     );
  // console.log(rowsData.reduce((a, b) => {
  //   return a + b.total;
  // }, 0))
  //   }, [rowsData]);
  //   useEffect(()=>{},[total])

  const addTableRows = () => {
    const rowsInput = {
      sno: rowsData.length + 1,
      item: "",
      unit: "",
      price: "",
      total: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;

    if (name == "unit") {
      rowsInput[index].total = rowsInput[index].unit * rowsInput[index].price;
    }
    if (name == "price") {
      rowsInput[index].total = rowsInput[index].unit * rowsInput[index].price;
    }
    settotal(
      rowsInput.reduce((a, b) => {
        return a + b.total;
      }, 0)
    );
    setRowsData(rowsInput);
  };

  return (
    <div id="newcalculation" style={{ width: "75%" }}>
      <div id="calculation">
        <Row>
          <Col></Col>

          <Col>
            <h1>Invoice</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <img
              src={
                imageURL +
                "users/" +
                JSON.parse(localStorage.getItem("user")).profile
              }
              className="invoice-profimg"
            />
            <div style={{ display: "flex" }}>
              <p>Name: </p>
              <input
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
                className="discountinput"
              />
            </div>
            <div style={{ display: "flex" }}>
              <p>Email: </p>
              <input
                type="text"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                className="discountinput"
              />
            </div>
            {/* <b>
              <p>Name: {JSON.parse(localStorage.getItem("user")).first_name}</p>
            </b>
            <b>
              <p>Email: {JSON.parse(localStorage.getItem("user")).email}</p>
            </b> */}
          </Col>
          <Col></Col>
          <Col>
            <div style={{ display: "flex" }}>
              <p>
                <b>Invoice #:</b>
              </p>
              <input type="Number" className="discountinput"></input>
            </div>
            <p>
              <b>Created At: </b>
              {JSON.stringify(new Date().getDate())}-
              {JSON.stringify(new Date().getMonth() + 1)}-
              {JSON.stringify(new Date().getFullYear())}
            </p>
            <p>
              <b>Due Date: </b>
              After 1 Month
             
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="invoicemenu">
              <table>
                <thead className="invoicethead">
                  <tr>
                    <td>S.no</td>
                    <td>Item</td>
                    <td>Unit</td>
                    <td>Price/unit</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <TableRows
                    rowsData={rowsData}
                    deleteTableRows={deleteTableRows}
                    handleChange={handleChange}
                  />

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <button
                        className="btn btn-outline-success"
                        onClick={addTableRows}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <p>Sub Total: {total}</p>
            <div style={{ display: "flex" }}>
              <p>discount: </p>
              <input
                type="Number"
                onChange={(e) => {
                  setdiscount(e.target.value);
                }}
                value={discount}
                className="discountinput"
              />
            </div>
            <p>Sub Total: {total - discount}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              className="btn upgrade left"
              onClick={() => {
                submitcontract();
              }}
            >
              Submit
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Calculations;
