//https://github.com/mui-org/material-ui/blob/master/examples/cdn/index.html

const {
    colors,
    ThemeProvider,
    Container,
    makeStyles,
    createMuiTheme
    } = MaterialUI;
  
const { Box } = MaterialUI;
const { Paper, Grid } = MaterialUI;
const { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } = MaterialUI;
const { Button } = MaterialUI;

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: colors.red.A400,
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: 'sans-serif',
    },
});
  
const defaultProps = {
      bgcolor: 'background.paper',
      m: 1,
      border: 1,
      width: 550,
      height: 550,
};

const quizStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  quiz_label: {
    fontSize: 20,
    fontWeight: "fontWeightBold",
  },
  reaction_success: {
    background: "#00d235",
    padding: 10,
    color: "#fff",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  reaction_error: {
    background: "#d70000",
    padding: 10,
    color: "#fff",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
}));

function Quiz1() {
  const [value, setValue] = React.useState('outlet');
  const [buttonPushStatus, setButtonPushStatus] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setButtonPushStatus(false);
  };
  const quizButton= (event) => {
    setButtonPushStatus(true);
  };
  const classes = quizStyles();

  function QuizReaction(){
    if (value=="Vatican"&&buttonPushStatus){
        return ( <Box mt={1} ><Paper className={classes.reaction_success} >That's right</Paper></Box> );
      }
    else if(buttonPushStatus){
        return ( <Box mt={1} ><Paper className={classes.reaction_error}>That's wrong</Paper></Box> );
      }
    else {
      return ( <Paper></Paper> );
    }
  };

  return (
    <FormControl class="quiz" component="fieldset">
      <FormLabel component="legend" className={classes.quiz_label}>Where is the smallest country ?</FormLabel>
      <RadioGroup aria-label="quiz" name="quiz1" value={value} onChange={handleChange}>
        <FormControlLabel value="Monaco" control={<Radio />} label="Monaco" />
        <FormControlLabel value="Tuvalu" control={<Radio />} label="Tuvalu" />
        <FormControlLabel value="Vatican" control={<Radio />} label="Vatican" />
      </RadioGroup>
      <br/>
      <Button variant="contained" color="primary" onClick={quizButton}>Answer</Button>
      <QuizReaction />
    </FormControl>
  );
}

function Quiz2() {
  const [value, setValue] = React.useState('outlet');
  const [buttonPushStatus, setButtonPushStatus] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setButtonPushStatus(false);
  };
  const quizButton= (event) => {
    setButtonPushStatus(true);
  };
  const classes = quizStyles();

  function QuizReaction(){
    if (value=="Russia"&&buttonPushStatus){
        return ( <Box mt={1} ><Paper className={classes.reaction_success} >That's right</Paper></Box> );
      }
    else if(buttonPushStatus){
        return ( <Box mt={1} ><Paper className={classes.reaction_error}>That's wrong</Paper></Box> );
      }
    else {
      return ( <Paper></Paper> );
    }
  };

  return (
    <FormControl class="quiz" component="fieldset">
      <FormLabel component="legend" className={classes.quiz_label}>Where is the largest country ?</FormLabel>
      <RadioGroup aria-label="quiz" name="quiz2" value={value} onChange={handleChange}>
        <FormControlLabel value="China" control={<Radio />} label="China" />
        <FormControlLabel value="Russia" control={<Radio />} label="Russia" />
        <FormControlLabel value="America" control={<Radio />} label="America" />
      </RadioGroup>
      <br/>
      <Button variant="contained" color="primary" onClick={quizButton}>Answer</Button>
      <QuizReaction />
    </FormControl>
  );
}

function CenteredGrid() {
  const classes = quizStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Paper className={classes.paper}><Quiz1 /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Paper className={classes.paper}><Quiz2 /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CenteredGrid />
    </ThemeProvider>,
    document.querySelector('#quiz_container'),
  );