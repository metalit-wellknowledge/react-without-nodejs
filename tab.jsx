//https://github.com/mui-org/material-ui/blob/master/examples/cdn/index.html

const {
    colors,
    ThemeProvider,
    Container,
    makeStyles,
    createMuiTheme
    } = MaterialUI;
  
    const { Box, Paper, Grid } = MaterialUI;
    const { AppBar, Tabs, Tab, Typography, Divider } = MaterialUI;
    const { List, ListItem, ListItemText, ListItemAvatar, Avatar, Icon } = MaterialUI;
    
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
    });

    const tabStyles = makeStyles((theme) => ({
        div: {
            flexGrow: 1,
          },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
        tabs: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
          },
        lists: {
            backgroundColor: theme.palette.background.paper,
            minHeight: 200,
        },
      }));

    function FolderListAll() {
        const classes = tabStyles();
      
        return (
          <List className={classes.lists}>
              <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Icon>info</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Released a new product" secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                    <Icon>task_alt</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Reported in the news" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                    <Icon>favorite_border</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Raised 100 million yen" secondary="July 20, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      }

      function FolderListNew() {
        const classes = tabStyles();
      
        return (
          <List className={classes.lists}>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                    <Icon>task_alt</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Reported in the news" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      }

      function FolderListSpecial() {
        const classes = tabStyles();
      
        return (
          <List className={classes.lists}>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                    <Icon>favorite_border</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Raised 100 million yen" secondary="July 20, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      }

      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };

      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
     function SimpleTabs() {
        const classes = tabStyles();
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
          <div className={classes.tabs}>
            <AppBar position="static" color="default">
              <Tabs 
                value={value} 
                onChange={handleChange} 
                indicatorColor="primary"
                textColor="primary"
                color="theme.palette.background.paper"
                >
                <Tab label="ALL" {...a11yProps(0)} />
                <Tab label="New" {...a11yProps(1)} />
                <Tab label="Special" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <FolderListAll />
            </TabPanel>  
            <TabPanel value={value} index={1}>
                <FolderListNew />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FolderListSpecial />
            </TabPanel>
          </div>
        );
      }

    class TabGroup extends React.Component {

        render () {
          return (
            <div flexGrow={1}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Paper textAlign='center'>
                        <SimpleTabs />
                    </Paper>
                </Grid>
            </Grid>
            </div>
          )
        }
      }
  
  ReactDOM.render(
    <ThemeProvider theme={theme}>
        <TabGroup />
    </ThemeProvider>,
    document.querySelector('#tab_container'),
  );