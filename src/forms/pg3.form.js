import React from "react";
import { useState } from "react";

export const Pg3 = () => {
    const [study, setStudy] = useState([{ name: "", description: "" }])

    const handleExperienceRemove = (index) => {
        const list = [...study];
        list.splice(index, 1);
        setStudy(list);
    }

    console.log(study, ' Data : ');

    const handleExperienceAdd = e => {
        setStudy([...study, { name: "" }])
    }
    return (
        <div id="form2" >
            {study.map((study, index) => (
                <div className="experience border border-primary p-2 m-2" key={index}>
                    <div className="mb-3">
                        <label name='' className="form-label">Study</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Study Description </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                    </div>
                    {
                        study.length > 1 && (
                            <button className="btn btn-danger" onClick={() => { handleExperienceRemove(index) }}>Remove Study</button>
                        )
                    }
                </div>
            ))
            }
            <button className="btn btn-primary" onClick={e => { handleExperienceAdd() }}>Add new Experience</button>
        </div >
    )
}