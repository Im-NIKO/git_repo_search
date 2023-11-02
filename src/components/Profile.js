import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Table from './Table';

function Profile({ data, repos }) {
    const imgStyle = {
        borderRadius: "60px",
        height: "120px",
        wight: "120px"
    }
    return (
        <div style={{marginTop: 10 + "px"}}>
            <Stack
                direction="row"
                spacing={3}
            >
                <div>
                    <List sx={{ width: '100%', maxWidth: 360 }}>
                        <ListItem>
                            <img src={data.avatar_url} style={imgStyle} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={data.name} secondary="username" />
                        </ListItem>
                    </List>
                </div>
                <div>
                    <Table repos={repos}/>
                </div>
            </Stack>
        </div>
    );
}

export default Profile;
