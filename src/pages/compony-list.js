import React, { useState } from "react";
import {App} from "../App";
import "../App.css";


const ComponyList = (props) => {

    const [modal, setModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(0);

    const handleDelete = (index) => {
        setModal(!modal);
        setDeleteIndex(index);
    };

    const continueDelete = (e) => {
        e.preventDefault();
        props.onDelete(deleteIndex);
        setModal(!modal);
    }
    const cancelDelete = (e) => {
        e.preventDefault()
        setModal(!modal);
    }
    const handleEdit = (index, item) => {
        props.onEdit(item, index);
    }

    return (<>
    {modal && <div className="ModalContainer">
        <div className="Modal">
            <h1>Are you sure?</h1>
            <div>
                <button onClick={(e) => continueDelete(e)} className="Continue Yes">Yes</button>
                <button onClick={(e) => cancelDelete(e)} className="Continue No">No</button>
            </div>
        </div>
    </div>}
    
    <div className="App" >
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Compony Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.list.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.componyName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.type}</td>
                                    <td> <button onClick={() => handleDelete(index)}>Delete</button><button onClick={() => handleEdit(index, item)}>Edit</button></td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
        
    );
}

export default ComponyList; 