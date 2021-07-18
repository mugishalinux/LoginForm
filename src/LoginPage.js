import { } from '@material-ui/core'
import react from 'react'
import { TextField } from '@material-ui/core'
import images from './image.jpeg'
import { red } from '@material-ui/core/colors'
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { height } from '@material-ui/system'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      '& .MuiFormControl-root':{
          width:'100%',
          height:'2%'
      },
      '& .MuiButton-containedSecondary':{
          color:'red',
      },
      '& .MuiButtonBase-root':{
        color:'white',
        backgroundColor:'#33bcaf;'
    },
    '& .MuiButton-root':{
        padding:'6px',
        width:'100%',
        marginBottom:'60px'
    }
    },

  }));

function LoginPage(){

      const classes = useStyles();
   return(
       
       <div className="card-login">
           <img  className="image-logo" src={images} alt="Write something here" />
           <h1 className="login-title">LOGIN</h1>
           <div className="form-field">
           <form className={classes.root} noValidate autoComplete="off">
            {/* <input className="f-length-1" placeholder="username"/>
            <input className="f-length-2" type="password" placeholder="password"/> */}
             <TextField 
             id="outlined-basic"
            label="User Name" 
            variant="outlined" />

             <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
                   <div className="sp">
              <a href="#" className="reset-pass"> forget password </a>
           </div>
           <Button 
           className="btn-login"
           variant="contained"> 
            Login
           </Button>
           </form>
           <div className="sp-white">

           </div>
           </div>
       </div>
   )
}
export default LoginPage;