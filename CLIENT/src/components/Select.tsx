import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UserContext } from '../UserContext'
import { useContext } from 'react';
import axios from 'axios';

export default function BasicSelect(props: any) {
    const [teamNumber, setTeamNumber] = React.useState('');
    const { meetingData, teamsData } = props


    const { team, setTeam, dataGlobal, setDataGlobal } = useContext(UserContext)


    const handleChange = async (event: SelectChangeEvent) => {
        await fetchCurrentMeetingsData(event.target.value as string)
        console.log(event.target.value as string)
    };

    const fetchCurrentMeetingsData = async (id: any) => {
        try {
            let currentTeamNumber = id
            const { data } = await axios.get(`http://localhost:3500/meetings/${currentTeamNumber}`)
            console.log(data)
            if (!data.length) return alert("There is no meeteng to this team!")
            setDataGlobal(data)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={teamNumber}
                    label="Age"
                    onChange={handleChange}
                >

                    {teamsData.map((item: any) => (
                        <MenuItem key={item.team_name} value={item.t_id}>{item.team_name}</MenuItem>
                    ))}





                </Select>
            </FormControl>
        </Box>
    );
}
