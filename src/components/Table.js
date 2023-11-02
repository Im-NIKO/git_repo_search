import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Table({ repos }) {
    const imgStyle = {
        borderRadius: "60px",
        height: "30px",
        wight: "30px"
    }

    const linkStyle = {
        color: "black",
        textDecoration: "none" ,
        border: "none" ,
        
    }
    return (
        <div>
            <Stack
                spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap"
            >
                {repos.map(el =>
                    <List sx={{ width: '100%', maxWidth: 360 }} key={el.name}>
                        <ListItem>
                            <img src={"https://cdn.icon-icons.com/icons2/3266/PNG/512/git_repository_icon_207309.png"} style={imgStyle} />
                        </ListItem>
                        <ListItem>
                            <a style={linkStyle} href={el.html_url} target='_blank'>
                                <Typography variant="h6" gutterBottom>
                                    {el.name}
                                </Typography>
                            </a>
                        </ListItem>
                    </List>
                )}
            </Stack>
        </div>
    );
}

export default Table;
