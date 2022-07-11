import { useEffect, useState } from 'react'
import { Preloader } from '../components/Preloader'
import { TableList } from '../components/Table_List'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'

function Ref_Table() {
    const [meetingsData, setMeetingsData] = useState([])
    const [teamsData, setTeamsData] = useState([])

    const { team, setTeam, dataGlobal, setDataGlobal } = useContext(UserContext)


    useEffect(() => {
        fetchTeamsData()
        fetchMeetingsData()

    }, []);


    const fetchMeetingsData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3500/meetingsall`)
            console.log(data)
            await setDataGlobal(data)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    const fetchTeamsData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3500/teams/`)
            console.log(data)
            await setTeamsData(data)
            return data
        } catch (err) {
            console.log(err)
        }
    }






    return (
        <>
            <div className="container">
                <h1 className="center-align">Teams And Meetings</h1>
                <div className="row">
                    {!dataGlobal.length ? <Preloader /> : <TableList meetingData={dataGlobal} teamsData={teamsData} />}
                </div>
            </div>
        </>
    );
}

export { Ref_Table };