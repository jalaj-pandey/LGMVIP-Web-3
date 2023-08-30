import "../App.css";
import React, { useState } from 'react';

function Form(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    const [agree, setAgree] = useState(false);
    const [image, setImage] = useState(null);

   

    const onSubmit = (e) => {
        e.preventDefault();
        if (!agree) {
            alert("Terms & Conditions not checked");
        }
        else {
            const value = { 'name': name, 'email': email, 'phone': phone, 'address': address, 'course': course, 'image': image };
            console.log(value);
            props.addValue(value);
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setCourse('');
            setImage('');
        }
    }
    var loadFile = function (event) {
        var image = document.getElementById('otp');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    return (
        <div className="form">
            <div className="container my-3"><h2>Registration Form</h2></div>
            <form onSubmit={onSubmit} className="form-data" method="POST" id="imageForm" encType="multipart/form-data">
                <div className="form-group">
                <label>Name: </label>
                    <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                <label>Email: </label>
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                <label>Phone: </label>
                    <input type="text" name="phone" id="phone" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                <label>Address: </label>
                    <input type="text" name="address" id="address" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                <label>Course: </label>
                    <input type="text" name="course" id="course" placeholder="Course" value={course} onChange={e=>setCourse(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                </div>
                <label>Image: </label>
                <input type="file" placeholder="Image" name="image" id="image" value={image} onClick={(e) => setImage(e.target.value)} onChange={(event)=>loadFile(event)} accept="image/*" style={{cursor: "pointer"}} className="form-control" aria-describedby="emailHelp" ></input>
                <br/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="agree" name="agree" onChange={()=>{setAgree(!agree);}} />
                    <label className="form-check-label" htmlFor="agree">Agree to Terms & Conditions</label>
                </div><br/>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
        </div>
    )
}
export default Form