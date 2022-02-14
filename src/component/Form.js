import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './style/Form.css'

export default function Form() {
    let [apidata, setApiData] = useState([])
    let [nameval, setNameval] = useState("");
    let [emailval, setEmailval] = useState("")
    let [passwordval, setPasswordval] = useState("")
    let [conpassval, setConpassval] = useState("");
    let [mobval, setMobval] = useState("");
    let [dobval, setDobval] = useState("");
    let [countryval, setCountryval] = useState([]);
    let [cityval, setCityval] = useState("");
    let [idx, setIdx] = useState(0);

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [compass, setCompass] = useState("");
    let [mob, setMob] = useState("");
    let [dob, setDob] = useState("");
    let [country, setCountry] = useState("");
    let [city, setCity] = useState("");

    useEffect(() => {
        (async () => {
            let data = await axios.get("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json")
            setApiData(data.data)
            console.log(data.data);
        })()
    }, [])
    // console.log(apidata);

    function namefun(e) {
        setNameval(e.target.value);
    }

    function emailfun(e) {
        setEmailval(e.target.value);
    }

    function passwordfun(e) {
        setPasswordval(e.target.value)
    }

    function conpassfun(e) {
        setConpassval(e.target.value)
    }

    function mobilefun(e) {
        setMobval(e.target.value)
    }

    function dobfun(e) {
        setDobval(e.target.value)
    }


    function contryfun(e) {
        let ix = -1;
        apidata.map((ele, i) => {
            if (ele.name == e.target.value) {
                ix = i
            }
        })
        setIdx(ix);
        console.log(idx);
      setCountryval(e.target.value)

    }

    function cityfun(e) {
        setCityval(e.target.value)
    }


    function submit() {
        if (nameval.length < 5 || nameval.length > 15) {
            setName("!!Invailid Name");
        } else if (!emailval.includes("@") || !emailval.includes(".com") || !emailval.includes("gmail")) {
            setEmail("!!Inailid Email");
        } else if (passwordval.length > 10 || passwordval.length < 5) {
            setPass("!!Invailid Password")
        } else if (conpassval != passwordval) {
            setCompass("!!Invailid Password");
        } else if (mobval.length != 10) {
            setMob("!!Invailid Number")
        }

        let formdataArr = [nameval, emailval, passwordval, conpassval, mobval, dobval, countryval, city];
        let formdata = formdataArr.map((ele) => {
            // console.log(ele);
        })

    }

    return (
        <div className='main-form-cont'>
            <div className='form-cont'>
                <span className='name'>{name}</span>
                <div><label>Name</label></div>
                <input onChange={namefun} type="text" className='input-box'></input>
                <div><label>Email</label></div>
                <div className='name'>{email}</div>
                <input onChange={emailfun} type="text" className='input-box'></input>
                <div><label>password</label></div>
                <div className='name'>{pass}</div>
                <input onChange={passwordfun} type="password" className='input-box' ></input>
                <div><label>conform password</label></div>
                <div className='name'>{compass}</div>
                <input onChange={conpassfun} type="password" className='input-box'></input>
                <div><label>mobile number</label></div>
                <div className='name'>{mob}</div>
                <input onChange={mobilefun} type="number" className='input-box'></input>
                <div><label>DOB</label></div>
                <input onChange={dobfun} type="date" className='input-box'></input>
                <div><label>Country</label></div>
                <select onChange={contryfun}>
                    {
                        apidata.map((ele, idx) => {
                            return <option key={idx} >{ele.name}</option>
                        })
                    }
                </select>
                <div><label>State</label></div>
                <select onChange={cityfun} >
                    {
                       apidata.length!==0? apidata[idx].states.map((ele, idx) => {
                            return <option key={idx} >{ele.name}</option>
                        }):<option >...</option>
                    }
                </select>
                <br />
                <br />
                <button className='submit-cont' onClick={submit}>submit</button>

            </div>
            <div className='output-main-area'>
                <div><label>Name</label></div>
                <div className='name-cont'>{nameval}</div>
                <div><label>Email</label></div>
                <div className='name-cont' placeholder='abc123@gamil.com'>{emailval}</div>
                <div><label>password</label></div>
                <div className='name-cont' >{passwordval}</div>
                <div><label>conform password</label></div>
                <div className='name-cont'>{conpassval}</div>
                <div><label>mobile number</label></div>
                <div className='name-cont'>{mobval}</div>
                <div><label>DOB</label></div>
                <div className='name-cont'>{dobval}</div>
                <div><label>Country</label></div>
                <div className='name-cont'>{countryval}</div>
                <div><label>State</label></div>
                <div className='name-cont'>{cityval}</div>

            </div>
        </div>
    )
}