import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { BasicSelectAdd } from '../components/SelectAdd'
import { UserContext } from '../UserContext'
import { useContext } from 'react';
import axios from "axios";
import { MyDatePickerStart } from '../components/DatePickerStart'

function Ref_Form() {

    const { team, setTeam, dataGlobal, setDataGlobal } = useContext(UserContext)

    const [team_id, setTeam_id] = useState('');
    const [start_meeting, setStart_meeting] = useState('');
    const [end_meeting, setEnd_meeting] = useState('');

    // const [start_meeting, setStart_meeting] = useState(Date.now());

    const [meeting_description, setMeeting_description] = useState('');
    const [meeting_date, setMeeting_date] = useState(Date.now());
    const [meeting_location, setMeeting_location] = useState('');


    const sendButtonHandler = async () => {
        const payload = {
            team_id: team,
            start_meeting: start_meeting,
            end_meeting: end_meeting,
            meeting_description: meeting_description,
            meeting_date: meeting_date,
            meeting_location: meeting_location,
            massage: "hey bro"
        }
        try {
            const { data } = await axios.post(`http://localhost:3500/postMeeting`, payload)
            console.log(data)
            setTeam_id('')
            setStart_meeting('')
            setEnd_meeting('')
            setMeeting_description('')
            // setMeeting_date('')
            setMeeting_location('')
            alert("Addet to DB!!!");
            return data

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="center-align">Add Teams And Meetings</h1>
                    <div>
                        <BasicSelectAdd />




                        <TextField value={start_meeting} className="col m12" label="start_meeting" variant="outlined"
                            onChange={(e) => setStart_meeting(e.target.value)} /><br />
                        <TextField value={end_meeting} className="col m12" label="end_meeting" variant="outlined"
                            onChange={(e) => setEnd_meeting(e.target.value)} /><br />


                        <TextField value={meeting_description} className="col m12" label="meeting_description" variant="outlined"
                            onChange={(e) => setMeeting_description(e.target.value)} /><br />
                        {/* <TextField value={meeting_date} className="col m12" label="meeting_date" variant="outlined"
                            onChange={(e) => setMeeting_date(e.target.value)} /><br /> */}

                        <div className="col s12 ">
                            <p >Meeting Date:</p>
                            <MyDatePickerStart
                                meeting_date={meeting_date}
                                setMeeting_date={setMeeting_date}
                            />
                        </div>
                        <TextField value={meeting_location} className="col m12" label="meeting_location" variant="outlined"
                            onChange={(e) => setMeeting_location(e.target.value)} /><br />



                        <Button className="col s12 m6 offset-m3 l4 offset-l4 " variant="contained"
                            onClick={sendButtonHandler}>Send</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export { Ref_Form };




