import React, { useState, useEffect } from "react";
const RegistrationForm1 = (props) => {
    useEffect(() => {
        if (props.data && props.selectedIndex !== null) {
            setCompony(props.data)
        } else {
            setCompony({ componyName: "", address: "", type: "" });
        }
    }, [props.data]);

    const [compony, setCompony] = useState({});
    const [componyList, setComponyList] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    //form validation mate no state
    const [formErrors, setFormErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        if(compony.componyName !== "" && compony.address !== "" && compony.type !== ""  ){
            props.onAdd(compony);
            setComponyList([...componyList,compony])
            setCompony({ componyName: "", address: "", type: "" });
        }else{
            alert("please fill data after subvmit")
        }
      
    }
        const handleChange = (e) => {
            setFormErrors(validate(compony))
            setCompony({
                ...compony,
                [e.target.name]:e.target.value
            })
            console.log(compony)
            }

    //form validation   
    const validate = (compony) => {
    
        const errors = {}
        if (!compony.componyName) {
            errors.componyName = "Compony Name is Required"
        }
        if (!compony.address) {
            errors.address = "Address is Required"
        }
    
       if (!compony.type) {
            errors.type = "Type is Required"
        }else{
            errors.type =""
            
        }
         return errors;
    }
        
    return (
        <div className="App" >
            <form className="form" >
                <div className="form-row">
                    {console.log("compony?.componyName",compony?.componyName)}
                    <div className="form-group col-md-4">
                        <label htmlFor=""><b>Compony Name</b></label>
                        <input type="text" className="form-control" name="componyName" id="componyName" placeholder="Compony Name" 
                        value={compony.componyName}
                            onChange={handleChange} />

                        <div className='text-danger'>{formErrors.componyName}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor=""><b>Address</b></label>
                        <textarea type="address" className="form-control" id="address" name="address"
                            placeholder="Address" value={compony.address}
                            onChange={handleChange} />
                        <div className='text-danger'>{formErrors.address }</div>
                    </div>
                </div>
                
             
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState" ><b>Type</b></label>
                        <select id="inputState" className="form-control" name="type" value={compony.type} onChange={handleChange}>
                            <option value="" ></option>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller+">Seller</option>
                        </select>
                        <div className='text-danger'>{formErrors.type && <p>Type is Not Valid</p> }</div>
                    </div>
                </div>
                <button  className="btn btn-primary" onClick={handleSubmit} >{props.selectedIndex != null ? "Update" : "Submit"}</button><br/><br/>
            </form>
        </div>
    );
    }

export default RegistrationForm1; 