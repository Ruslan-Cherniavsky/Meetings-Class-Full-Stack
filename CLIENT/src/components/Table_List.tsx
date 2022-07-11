
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicSelect from './Select';

function TableList({ meetingData = [], teamsData = [] }: { meetingData: any, teamsData: any }) {

    return (<>
        <BasicSelect meetingData={meetingData} teamsData={teamsData} />



        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> team_name </TableCell>
                        <TableCell align="right">start_meeting</TableCell>
                        <TableCell align="right">end_meeting</TableCell>
                        <TableCell align="right">meeting_description</TableCell>
                        <TableCell align="right">meeting_date</TableCell>
                        <TableCell align="right">meeting_location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {meetingData.map((row: any) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell> */}
                            <TableCell align="right">{row.team_name}</TableCell>
                            <TableCell align="right">{row.start_meeting}</TableCell>
                            <TableCell align="right">{row.end_meeting}</TableCell>
                            <TableCell align="right">{row.meeting_description}</TableCell>
                            <TableCell align="right">{row.meeting_date}</TableCell>
                            <TableCell align="right">{row.meeting_location}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}

export { TableList };


{/* <TableCell align="right">{row.start_meeting.slice(-10, -5)}</TableCell>
<TableCell align="right">{row.end_meeting.slice(-10, -5)}</TableCell>
<TableCell align="right">{row.meeting_description}</TableCell>
<TableCell align="right">{row.meeting_date.slice(-24, -14)}</TableCell> */}