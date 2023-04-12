import React, { useState } from 'react';
import './Contact.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export default function Contact() {
    const [used, setused] = useState({

        name: "",
        lname: "",
        email: "",
        subject: "",
        massage: "",

    });


    let name, value;
    const getuserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setused({ ...used, [name]: value })


    };

    const postData = async (e) => {
        const { name, lname, email, subject, massage } = used;
        if (name && lname && email && subject && massage) {

            const res = await fetch(
                "https://formspree.io/f/xqkogyey",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        lname,
                        email,
                        subject,
                        massage,

                    })
                }
            );


            if (res) {
                setused({
                    name: "",
                    lname: "",
                    email: "",
                    subject: "",
                    massage: "",
                });

                alert("Form Submit Successfullly");

            }
        } else {
            alert("Please Fill all fields")
        }





    }


    return (

        <>
            <div className='bg-Color3'>
                <div className="px-4 py-5  text-center">
                    <br></br>
                    <center><h1 style={{ color: "#fff" }} >CONTACT<span style={{ color: "#28a745" }}>- US</span></h1></center>

                    <hr style={{ color: "#fff" }} />
                    <center>
                        <div className="line2" />
                    </center>
                </div>
                <div className="container">
                    <div className="album py-2">
                        <div className="container-fluid">
                            <form action="#" method="POST">
                                <div className="contact-grids1 w3agile-6">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-white">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name='name'
                                                autoComplete='off'
                                                value={used.name}
                                                onChange={getuserData}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-white">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                name='lname'
                                                autoComplete='off'
                                                value={used.lname}
                                                onChange={getuserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-white">Subject</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                name='subject'
                                                autoComplete='off'
                                                value={used.subject}
                                                onChange={getuserData}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                            <label className="col-form-label text-white">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                autoComplete='off'
                                                value={used.email}
                                                onChange={getuserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-me animated wow slideInUp form-group">
                                        <label className="col-form-label text-white">Message</label>
                                        <input
                                            type="text"
                                            className="form-control m1"
                                            placeholder="Massage"
                                            name="massage"
                                            autoComplete='off'
                                            value={used.massage}
                                            onChange={getuserData}
                                        />
                                    </div>
                                    <br />
                                    <div className="contact-form">
                                        <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={postData}> Sent</Button>
                                    </div>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>


            </div>
        </>


    )
}
