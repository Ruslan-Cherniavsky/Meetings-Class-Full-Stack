import { getConnection } from '../../data_base/data_base';



//--------------------------------------GET----------------------------------


async function teamsHandler(req, res, next) {
    const result = await getTeams()
    return res.status(200).json(result);
}


async function getTeams() {
    const query = getTeamsQuery();
    const [result] = await getConnection().execute(query);
    console.log(result)
    console.log("******************TEAMS DATA FATCHED FROM DB**********************")
    return result;
}

const getTeamsQuery = () => {
    return `SELECT * FROM dev_teams_meetings.dev_teams`;
};

//--------------------------------------GET2----------------------------------


async function meetingsAllHandler(req, res, next) {
    const result = await getMeetingsAll()
    return res.status(200).json(result);
}


async function getMeetingsAll() {
    const query = meetingsAllQuery();
    const [result] = await getConnection().execute(query);
    console.log(result)
    console.log("******************TEAMS DATA FATCHED FROM DB**********************")
    return result;
}

const meetingsAllQuery = () => {
    return `SELECT id, team_name, start_meeting, end_meeting, meeting_description	, meeting_date, meeting_location FROM dev_teams_meetings.dev_meetings
    LEFT JOIN dev_teams_meetings.dev_teams
    ON dev_teams_meetings.dev_meetings.team_id = dev_teams_meetings.dev_teams.t_id`;
};

//--------------------------------------GET2----------------------------------


async function meetingsHandler(req, res, next) {
    const result = await getMeetings(req.params.id)
    return res.status(200).json(result);
}


async function getMeetings(id) {
    const query = getMeetingsQuery();
    const [result] = await getConnection().execute(query, [id]);
    console.log(result)
    console.log("******************MEETINGS DATA FATCHED FROM DB**********************")
    return result;
}

const getMeetingsQuery = () => {
    return `SELECT * FROM dev_teams_meetings.dev_meetings
    LEFT JOIN dev_teams_meetings.dev_teams
    ON dev_teams_meetings.dev_meetings.team_id = dev_teams_meetings.dev_teams.t_id
    WHERE (dev_teams_meetings.dev_teams.t_id = ?)`;
};



//--------------------------------------POST-----------[ID auto incremental in DB]----------------------

async function postMeeting(req, res, next) {
    console.log(req.body)
    await addMeeting(req.body)
    return res.status(200).json({ message: "POSTED!!!" });
}

async function addMeeting(payload) {

    const { team_id, start_meeting, end_meeting, meeting_description, meeting_date, meeting_location } = payload
    const query = addMeetingQuery();
    const [result] = await getConnection().execute(query, [team_id, start_meeting, end_meeting, meeting_description, meeting_date, meeting_location]);
    console.log("******************MEETING DATA ADDET TO DB**********************")
    return result;
}


const addMeetingQuery = () => {
    return `INSERT INTO dev_teams_meetings.dev_meetings (team_id, start_meeting, end_meeting, meeting_description, meeting_date, meeting_location) VALUES (?, ?, ?, ?, ?, ?)`;
};




export { postMeeting, teamsHandler, meetingsHandler, meetingsAllHandler }


