import React from "react";
import { Col, Row } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Textbase() {

   const submitcontract = async () => {
    html2canvas(document.getElementById("textbaseagreement")).then(async (canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      // imgData.save("Invoice.png")
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save(JSON.parse(localStorage.getItem("user"))._id+"-"+(new Date().getDate()+"-"+( new Date().getMonth()+1))+".pdf")            
    });
  };

  return (
    <div  style={{ width: "75%" }}>
      <Row >
        <h1>Add text for the Contracts</h1>
      </Row>
      <Row>
        <textarea className="textbase" rows="12" cols="50" id="textbaseagreement"></textarea>
      </Row>
      
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
          <button className="btn upgrade left"
           onClick={() => {
            submitcontract();

            }}>Submit</button>
        </Col>
      </Row>
    </div>
  );
}

export default Textbase;
