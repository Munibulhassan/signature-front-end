import React from "react";
import SubButton from "./SubButton";
import CustomTable from "../CustomTable";

const renderHeaderDiv = function SubButton(title, text, button) {
  return (
   
    <div className="text-center p-4">
        <h2>{title}</h2>
        <p>{text}</p>
        {button}
    </div>
  );
};

const tHeaderTh = function SubButton(component) {
  return (
      <td>{component}</td>
  );
};

const headerDate = [
  {title:"", text:"", button:""},
  {title:"Free", text:"Get up to 3 documents per month signed for free", button:"Upgrade"},
  {title:"Free", text:"Get up to 3 documents per month signed for free", button:"Upgrade"},
  {title:"Free", text:"Get up to 3 documents per month signed for free", button:"Upgrade"},
]

export default function Subscription() {
  const columns = [
    {
      Header: "Plan Cost",
      accessor: "title",
      // width: 0
    },
    {
      Header: "Free",
      accessor: "free",
      className: "col-lg-3",
    },
    {
      Header: "$20 / month",
      accessor: "towenty",
      className: "col-lg-3",
    },
    {
      Header: "$30 per user / month",
      accessor: "thirty",
      className: "col-lg-3",
    },
  ];

  const allData = [
    { title: "Documents per month", free: 3, towenty: "unlimited", thirty: "unlimited" },
    { title: "Templates", free: 0, towenty: 1, thirty: "unlimited" },
    { title: "Templates", free: 0, towenty: 1, thirty: "unlimited" },
    { title: "Templates", free: 0, towenty: 1, thirty: "unlimited" },
    { title: "Templates", free: 0, towenty: 1, thirty: ":" },
  ];
  return (<>
  <div className="container pe-5">
      <CustomTable
        data={allData}
        columns={columns}
        lengthValidation={allData.length > 0}
        validationText="No Books Found"
        staticHeader= {<>{
          headerDate.map((itm)=>(
              tHeaderTh(
              renderHeaderDiv(
                itm.title,
                itm.text,
                itm.button&&<SubButton title={itm.button} />
              )

            ))
          )
        }
        
        </>}
      />  
      </div>  
    </>
  );
}
