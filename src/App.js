import React, { Component } from 'react';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer'
import Preparation from './components/Preparation'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';

const styles = theme => ({
  root: {
    width: "100%"
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1,
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
   marginLeft: -12,
   marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
    display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing.unit,
    width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    cursor:"pointer",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    width: 120,
      '&:focus': {
      width: 200,
      },
    },
  }
});
     
class App extends Component {

  constructor(props) {
   super(props);
    
    this.state = {
      customers: '',
      completed: 0,
      opens : false,
      searchKeyword: ''
    }
    
      this.stateRefresh = this.stateRefresh.bind(this);
  }

  /* Refresh 함수 */
  stateRefresh() {

    this.setState({
     customers: '',
     completed: 0,
     opens : false
    });
    
    this._getData();
    
  }
    
  /* Select Api, 타이머 호출  */
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this._getData();
  }

  _getData = async () => {
     const customers = await this._callApi();
       this.setState({
          customers
       });
     
   };

  _callApi =() => {
    return fetch(
      "http://localhost:8080/user/findAll"
    )
    .then(Response =>Response.json())
    .then(json => json)
    .catch(err =>console.log(err));
  }
  
  /* User 객체 생성  */
  _renderUser = (data) => {

    data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
    });

    return data.map((customer) => {
        return  <Customer
          id={customer.id}
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
          stateRefresh={this.stateRefresh}
       />
    });
  };

    
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  /* 로딩 바 생성  */    
  progress = () => {
      const { completed } = this.state;
      this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };


  /* handle 함수  */
  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
  handleClickOpen = () => this.setState({ opens: !this.state.opens})
  handleSendClose = (data) => {
    this.setState({
      opens : data
    })
  }
  handleValueChange = (e) =>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const { classes } = this.props;
    const { customers } = this.state;
    return (
      <div className={classes.root}>
         {/* APP Bar */}
          <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" >
                  <MenuIcon onClick={this.handleDrawerToggle} />
                </IconButton>
                  <Typography variant="h6" className={classes.title}>고객관리시스템</Typography>
                  <div className={classes.grow}/>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="검색하기"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      name="searchKeyword"
                      value={this.state.searchKeyword}
                      onChange={this.handleValueChange}
                    />
                  </div>
              </Toolbar>
          </AppBar>
          {/* Drawer */}
          <Drawer
              className={classes.drawer}
              open={this.state.toggle} onClick={this.handleDrawerToggle}
              anchor="left">
            <Divider />
            <List>
                 <ListItem button key="home">
                   <ListItemIcon > <MailIcon /></ListItemIcon>
                   <b onClick={this.handleClickOpen}> Home</b> 
                 </ListItem>
                 <ListItem button key ="about">
                   <ListItemIcon > <MailIcon /></ListItemIcon>
                   <b onClick={this.handleClickOpen}> About</b> 
                 </ListItem>
                 <ListItem button key="">
                   <ListItemIcon> <MailIcon /></ListItemIcon>
                   <b onClick={this.handleClickOpen}> LIST </b>    
                 </ListItem>
            </List>
          </Drawer>
          {/* 고객추가 버튼 */}
          <div className={classes.menu}>
            <CustomerAdd stateRefresh={this.stateRefresh} />
            <Preparation opens={this.state.opens} send={this.handleSendClose}/>
          </div>
          {/*고객 List */}
          <Paper className={classes.root}>
              <Table>
                <TableHead>
                    <TableRow>
                      <TableCell>번호</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>생년월일</TableCell>
                      <TableCell>성별</TableCell>
                      <TableCell>직업</TableCell>
                      <TableCell>설정 </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {customers ? this._renderUser(this.state.customers) : <TableCell colSpan="6" align="center">
                       <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                    </TableCell>}
                  
                  </TableBody>
              </Table>
            </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
