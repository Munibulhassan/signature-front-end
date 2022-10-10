import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  getsubscriptiondata,
  subscribe,
} from "../../action/subscription.action";

export default function Subscription() {
  const [data, setdata] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const getsubscription = async () => {
    const res = await getsubscriptiondata();
    if (res.success) {
      setdata(res.data);
    } else {
    }
  };
  useEffect(() => {
    getsubscription();
  }, []);
  const subscribepackage = async (id) => {
    
    const res = await subscribe({ "subscription": id });
    if (res.success) {
      user.subscription=[id]
      localStorage.setItem("user",JSON.stringify(user))
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };
  useEffect(()=>{

  },[localStorage.getItem("user")])
  return (
    <>
      <div className="container pe-5">
        <table className="subcriptiontabel">
          <thead>
            <tr>
              <td></td>
              {data?.map((item, index) => {
                console.log(user.subscription[0] == item._id)
                return (
                  <td>
                    <div className="subscription">
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <div>
                        {(user.subscription[0] == item._id)? (
                          <button className="current">Current Plan</button>
                        ) : (
                          <button
                            className="btn upgrade"
                            onClick={(e) => {
                              subscribepackage(item._id);
                            }}
                          >
                            Upgrade
                          </button>
                        )}
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="planinfo">
              <td colSpan={4}>
                <h4>Plane Information</h4>
              </td>
            </tr>

            <tr className="table-row">
              <td>Plan Cost</td>
              <td>
                {data[0]?.monthlyamount == 0
                  ? "Free"
                  : data[0]?.monthlyamount + "$ / month"}
              </td>
              <td>
                {data[1]?.monthlyamount == 0
                  ? "Free"
                  : data[1]?.monthlyamount + "$ / month"}
              </td>
              <td>
                {data[2]?.monthlyamount == 0
                  ? "Free"
                  : data[2]?.monthlyamount + "$ / month"}
              </td>
            </tr>
            <tr className="table-row">
              <td>Documents per month</td>
              <td>{data[0]?.documents}</td>

              <td>{data[1]?.documents}</td>

              <td>{data[2]?.documents}</td>
            </tr>

            <tr className="table-row">
              <td>Templates</td>
              <td>1</td>
              <td>1</td>
              <td>Unlimited</td>
            </tr>
            <tr className="table-row">
              <td>Google drive Integration</td>
              <td>{data[0]?.googledrive ? "true" : "false"}</td>
              <td>{data[1]?.googledrive ? "true" : "false"}</td>

              <td>{data[2]?.googledrive ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
