import React from "react";

export const Pg1 = () => {
    return (
        <>
            <h1>Personal Informations</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleInputName" name='fullName' />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Birth Date : </label>
                <input type="date" className="form-control" id="date" aria-describedby="date" />
            </div>
            <div className="mb-3">
                <label htmlFor="tel" className="form-label">Phone Number : </label>
                <input type="tel" className="form-control" id="tel" aria-describedby="tel" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Address : </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <p>Gender : </p>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
        </>
    )
}