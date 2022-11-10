import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { imageURL } from "../action/config";
import TableRows from "./TableRows";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { getkey } from "../action/action";
import { createdocfromtemp } from "../action/pandadoc.action";
import { toast } from "react-toastify";

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
  const user = JSON.parse(localStorage.getItem("user"));
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
  const [invoiceid, setinvoiceid] = useState("");

  const [loader, setloader] = useState(false);
  const uploadinvoice = async () => {
    setloader(true);
    const apikey = await getkey();
    const tablepricing = [];

    rowsData.map((item) => {
      tablepricing.push({
        options: {
          optional: true,
          optional_selected: true,
          qty_editable: true,
        },
        data: {
          name: item.item,
          Description: "",
          price: parseInt(item.price),
          qty: parseInt(item.unit),
          Tax: {
            value: 20,
            type: "percent",
          },
        },
      });
    });
    const payload = {
      name: "Sample invoice",
      template_uuid: "RYxXeUGHR4wejEc53AwVtX",
      recipients: [
        {
          email: email,
          first_name: name,
          last_name: name,
        },
      ],
      tokens: [
        {
          name: "Favorite.Pet",
          value: "Panda",
        },
      ],
      Sender: {
        FirstName: user.first_name,
        LastName: user.last_name,
      },
      Invoice: {
        No: invoiceid,
        DueDate:
          JSON.stringify(new Date().getDate()) +
          "-" +
          JSON.stringify(new Date().getMonth() + 1) +
          "-" +
          JSON.stringify(new Date().getFullYear()),
        Terms: "payment on delivered",
      },
      Client: {
        FirstName: name,
        LastName: email,
      },
      metadata: {
        my_favorite_pet: "Panda",
      },
      tags: ["created_via_api", "test_document"],
      images: [
        {
          name: "Image 1",
          urls: [imageURL + "user/logo"],
        },
      ],
      pricing_tables: [
        {
          name: "Pricing Table 1",
          data_merge: false,
          options: {
            Tax: {
              is_global: true,
              type: "absolute",
              name: "Tax",
              value: 10,
            },
          },
          sections: [
            {
              title: "Sample Section",
              default: true,
              rows: tablepricing,
            },
          ],
        },
      ],
    };

    const response = await createdocfromtemp(
      apikey.APIkey,
      JSON.stringify(payload)
    );
    console.log(response);
    if (response?.data?.id) {
      toast.success("Ducument generated successfully");
      setloader(true);
      setRowsData({
        sno: 1,
        item: "",
        unit: "",
        price: "",
        total: "",
      });
      setname("");
      setemail("");
      setinvoiceid("");
      setdiscount("");
    } else {
      toast.error(response?.data?.type);
      setloader(true);
    }
  };

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
  // console.log(JSON.parse(localStorage.getItem("user")).profile);

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
              <input
                type="Number"
                className="discountinput"
                onChange={(e) => {
                  setinvoiceid(e.target.value);
                }}
                value={invoiceid}
              ></input>
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
            <div id="pandadoc-sdk" class="pandadoc"></div>
          </Col>
          <Col>
            <button
              className="btn upgrade left"
              onClick={() => {
                uploadinvoice();
                // submitcontract();
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
