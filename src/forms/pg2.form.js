import React from "react";
import { useState } from "react";

export const Pg2 = () => {
    const [experiencesList, setExperiencesList] = useState([{ name: "", description: "" }])

    const handleExperienceRemove = (index) => {
        const list = [...experiencesList];
        list.splice(index, 1);
        setExperiencesList(list);
    }

    console.log(experiencesList, ' Data : ');

    const handleExperienceAdd = e => {
        setExperiencesList([...experiencesList, { name: "" }])
    }
    return (
        <div>
            {experiencesList.map((experience, index) => (
                <div className="experience border border-primary p-2 m-2" key={index}>
                    <div className="mb-3">
                        <label name='' className="form-label">Experience</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Experience Description </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                    </div>
                    {
                        experiencesList.length > 1 && (
                            <button className="btn btn-danger" onClick={() => { handleExperienceRemove(index) }}>Remove Experience</button>
                        )
                    }
                </div>
            ))
            }
            <button className="btn btn-primary" onClick={e => { handleExperienceAdd() }}>Add new Experience</button>
        </div >
    )
}