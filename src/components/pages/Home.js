import {Typography, Box, makeStyles, Grid, TextField, Button} from '@material-ui/core' ;

import {deepPurple, green} from '@material-ui/core/colors' ;

import List from '../student/List' ;

import axios from 'axios';

import {useState} from 'react' ;

const useStyles = makeStyles({
    headingColor: {
        backgroundColor:deepPurple[400],
        color:"white"
    }, 
    addStuColor: {
        backgroundColor: green[400],
        color: "white"
    }

})

function Home() {
    const classes = useStyles();
    const [student, setStudent] = useState({stuname:"", email: ""});
    const [status, setStatus] = useState() ;
    function onTextFieldchange(e){
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        });
        console.log(student);
    }
    function onChangeOnTextFieldChange(e){
        onTextFieldchange(e);
    }
    async function onFormSubmit(e){
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3333/students`, student)
            setStatus(true);
        }catch(error){
            console.log("something went wrong");
        }
    }
 if(status){
    return <Home />
} 
  return (
    <>
     <Box textAlign="center" className = {classes.headingColor} p={2} mb={2}>
         <Typography variant="h2">
             Contact Manager
         </Typography>
    </Box>
         <Grid container justifyContent="center" spacing={4}>
            <Grid item md={6} xs={12}>
                
                <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                    <Typography variant="h4">
                        Add Contacts
                    </Typography>
                </Box>
                <form noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth 
                        id="stuname" label = "Name" onChange={onChangeOnTextFieldChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth 
                        id="email" label = "Email Address" onChange={onChangeOnTextFieldChange} />
                    </Grid>
                    </Grid>
                    <Box m={3}>
                        <Button type="submit" variant="contained" color="primary" fullWidth
                        onClick={onFormSubmit}>Add</Button>
                    </Box>
                </form>
            </Grid>

            <Grid item md={6} xs={12}>
               <List />
            </Grid>
         </Grid>
     
    </>
  );
}

export default Home;