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
    width: "100%",
    minWidth: 1080
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
  
const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
];
   
class App extends Component {
  state = {
    customers: '',
    completed: 0,
    opens : false
  }

    
  componentDidMount() {
   // setInterval(this.progress, 20);
  }
    
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    
  };

  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
  handlepreparation = () =>{alert("준비중 입니다.");}
  handleClickOpen = () => this.setState({ 
    opens: !this.state.opens
  })

  handleSendClose = (data) => {
    this.setState({
      opens : data
    })
    console.log (this.state.opens)
  }

  render() {
    const { classes } = this.props;

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
            <CustomerAdd />
            <Preparation opens={this.state.opens} send={this.handleSendClose}/>
          </div>
          {/*고객 List */}
          <Paper className={classes.root}>
              <Table>
                <TableHead>
                    <TableRow>
                      <TableCell>번호</TableCell>
                      <TableCell>이미지</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>생년월일</TableCell>
                      <TableCell>성별</TableCell>
                      <TableCell>직업</TableCell>
                      <TableCell>설정 </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customers.map(user => (
                        <Customer customer={user} key={user.id} />
                    ))}
                    <TableCell colSpan="6" align="center">
                       <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                    </TableCell>

                  </TableBody>
              </Table>
            </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
