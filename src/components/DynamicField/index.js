import React,  { useState } from 'react'
import "./styles.css"
export default function DynamicField(props) {

    const { 
      formValues,
      setFormValues, 
      handleChange,
      errors,
      skipIndex,
      noRemoveField
    } = props;

    // const [formValues, setFormValues] = useState([{ name: "", email : ""}])

    // let handleChange = (i, e) => {
    //     let newFormValues = [...formValues];
    //     newFormValues[i][e.target.name] = e.target.value;
    //     setFormValues(newFormValues);
    //   }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        if(newFormValues.length != noRemoveField){
            newFormValues.splice(i, 1);
            setFormValues(newFormValues)
        }
    }
    
    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(JSON.stringify(formValues));
    // }

    return (
        <>
         {/* <form  onSubmit={handleSubmit}> */}
          {formValues.map((element, index) => (
            <div className="row mt-2" key={index}>
              <div class="col-md-5">
              <input className="form-control" placeholder="Full Name" type="text" name="name" 
              value={element.name || ""} 
              onChange={e => handleChange(index, e)} />
              {errors && errors[(index+skipIndex).toString()]?.name && <small className="text-danger">{errors[(index+skipIndex).toString()]?.name}</small>}
            {/* <div> */}
            </div>
            <div class="col-md-5">
              <input className="form-control" placeholder="Email Address" type="text" name="email" 
              value={element.email || ""} 
              onChange={e => handleChange(index, e)} />
              {errors && errors[(index+skipIndex).toString()]?.email && <small className="text-danger">{errors[(index+skipIndex).toString()]?.email}</small>}
              {/* </div> */}
              </div>
              {/* {
                index ? */}
                <div class="col-md-2">
                <button type="button" className="rounded-circle" onClick={() => removeFormFields(index)} style={{width:"40px",fontSize:"1.4rem"}}>x</button> 
                </div>
                {/* //   <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button>  */}
                {/* : null */}
              {/* } */}
            </div>
          ))}
          <div className="button-section col-md-10 mt-2">
              <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => addFormFields()}>Add</button>
              {/* <button className="button submit" type="submit">Submit</button> */}
          </div>
      {/* </form> */}
    </>
    )
}
