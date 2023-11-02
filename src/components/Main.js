import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/700.css';
import Profile from "./Profile";

function Main() {
    const [username, setUsername] = useState("")
    const [data, setData] = useState({})
    const [repos, setRepos] = useState([])

    const changeHandler = e => {
        setUsername(e.target.value)
    }

    const submitHandler = async e => {
        e.preventDefault()

        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json()

        const repos = await fetch(profileJson.repos_url)
        const reposJson = await repos.json()

        if (profileJson) {
            setData(profileJson)
            setRepos(reposJson)
        }

    }
    return (
        <div>
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                useFlexGap flexWrap="wrap"
                spacing={2}
            >
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width={112} height={112} />
                <Typography variant="h4" gutterBottom>
                    GitHub API Search
                </Typography>
            </Stack>
            <div style={{marginTop: 20 +"px"}}>
                <Stack direction="row"
                    justifyContent="center"
                    spacing={2}
                >
                    <TextField id="outlined-basic" label="Username" variant="outlined" type="text" value={username} onChange={changeHandler} />
                    <Button variant="contained" disableElevation type="submit" onClick={submitHandler}>
                        Search
                    </Button>
                </Stack>
                <Profile data={data} repos={repos} />
            </div>
        </div>
    );
}

export default Main;