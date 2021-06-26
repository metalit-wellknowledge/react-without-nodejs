//https://github.com/mui-org/material-ui/blob/master/examples/cdn/index.html

const {
    colors,
    ThemeProvider,
    Container,
    makeStyles,
    createMuiTheme
    } = MaterialUI;
  
    const { Box, Paper } = MaterialUI;
    const { Grid, GridList, GridListTile, GridListTileBar, ListSubheader } = MaterialUI;
    const { CircularProgress, Typography } = MaterialUI;
    
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

    const gridListStyles = makeStyles((theme) => ({
        div: {
            flexGrow: 1,
          },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
        imageGridList: {
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
          maxWidth: 500,
          //height: 500,
        },
        title: {
            color: theme.palette.paper,
          },
        titleBar: {
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          },
      }));

    const tileData = [ 
       {
         img: "./gridListSrc/unsplash_1.jpg",
         title: 'Leaf',
         author: 'author',
         cols: 2,
       },
       {
        img: "./gridListSrc/unsplash_2.jpg",
        title: 'China',
        author: 'author',
        cols: 1,
      },
      {
        img: "./gridListSrc/unsplash_3.jpg",
        title: 'America',
        author: 'author',
        cols: 1,
      },
      {
        img: "./gridListSrc/unsplash_4.jpg",
        title: 'Gadget',
        author: 'author',
        cols: 1,
      },
      {
        img: "./gridListSrc/unsplash_5.jpg",
        title: 'Drinking',
        author: 'author',
        cols: 1,
      },
      {
        img: "./gridListSrc/unsplash_6.jpg",
        title: 'Architect',
        author: 'author',
        cols: 1,
      },
      {
        img: "./gridListSrc/unsplash_7.jpg",
        title: 'Living',
        author: 'author',
        cols: 2,
      },
    ];

    function ImageGridList() {
        const classes = gridListStyles();
        return (
          <div className={classes.imageGridList}>
            <Box fontSize={20} fontFamily="sans-serif">
                Album 
            </Box>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{ imageGridList: classes.titleBar, title: classes.title,}}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        );
    }

    class GridListGroup extends React.Component {
        constructor(props) {
          super(props);
          this.state = {loading: false};
        }
      
        componentDidMount() {
          setTimeout(()=>this.setState({loading: true}), 5000);
        }
      
        render () {
          return (
            <div flexGrow={1}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Paper textAlign='center'>
                    <Box 
                        display="flex" alignItems="center" justifyContent="center" borderColor="gray" 
                        borderRadius="borderRadius" p={1} m={1} border={0} height={550} bgcolor="background.paper">
                        {this.state.loading ? ("") : (<CircularProgress />) }
                        {this.state.loading ? (<Box><ImageGridList /></Box>) : (<Box display="none"><ImageGridList /></Box>) }
                    </Box>
                    </Paper>
                </Grid>
            </Grid>
            </div>
          )
        }
      }
  
  ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GridListGroup />
    </ThemeProvider>,
    document.querySelector('#grid_list_container'),
  );