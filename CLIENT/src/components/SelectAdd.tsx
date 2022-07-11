import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UserContext } from '../UserContext'
import { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';



function BasicSelectAdd() {
    // const [teamNumber, setTeamNumber] = React.useState('');
    const [teamsData, setTeamsData] = useState([])


    const { team, setTeam, dataGlobal, setDataGlobal } = useContext(UserContext)

    useEffect(() => {
        fetchTeamsData()

    }, []);


    const handleChange = async (event: SelectChangeEvent) => {
        await setTeam(event.target.value as string)
        console.log(team)
    };



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
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={team}
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


export { BasicSelectAdd } 