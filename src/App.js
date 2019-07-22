import React, { Component } from 'react';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer'
import Home from './components/Home'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';


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
  progress: {
    margin: theme.spacing.unit * 2
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
    completed: 0
  }


  componentDidMount() {
    setInterval(this.progress, 20);
  }
    
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    
  };

  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
  
          <AppBar position="static" onClick={this.handleDrawerToggle}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" >
                  <MenuIcon />
                </IconButton>
                  <Typography variant="h6" className={classes.title}>고객관리시스템</Typography>
              </Toolbar>
          </AppBar>

          <Router>
          <Route exact path="/home" component={Home}/>     
          <Drawer
              className={classes.drawer}
              open={this.state.toggle} onClick={this.handleDrawerToggle}
              anchor="left">
                
            <Divider />
            <List>
                 <ListItem >
                   <ListItemIcon> <MailIcon /></ListItemIcon>
                    <ListItemText > 
                    <Link to="/home" className="item" activeClassName="active">로그인</Link>
                      </ListItemText>
                 </ListItem>
                 <ListItem >
                   <ListItemIcon> <MailIcon /></ListItemIcon>
                   <ListItemText >  TEST </ListItemText>
                 </ListItem>
                 <ListItem button key="TEST">
                   <ListItemIcon> <MailIcon /></ListItemIcon>
                   <ListItemText primary="TESST" >  </ListItemText>
                 </ListItem>
            </List>
          </Drawer>
          </Router>

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
            <CustomerAdd/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
