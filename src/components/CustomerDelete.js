import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

class CustomerDelete extends Component {

    constructor(props) {
        super(props);    
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    /*Dialog Open 호출*/
    handleClickOpen() {
        this.setState({
            open: true
        });
    }
    
     /*Dialog Close 호출*/
    handleClose() {
        this.setState({
            open: false
        })
    }
    
    /*삭제 api 호출*/
    deleteCustomer(id){

    const url = 'http://localhost:8080/user/'+id;
    axios.delete(url)
        .then(res => {
            if (res.data.message === "등록되었습니다."){
                alert("삭제 되었습니다.")
                this.props.stateRefresh();
            }
            console.log(res.data.message);
        })
        
    }
    
    render() {
        const id = this.props.delid
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
                 <Dialog onClose={this.handleClose} open={this.state.open}>
                    <DialogTitle onClose={this.handleClose}>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                    <Typography gutterBottom>
                        선택한 고객 정보가 삭제됩니다.
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(id)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                     </DialogActions>
                 </Dialog>
            </div>
    
        )}
    }
    
export default CustomerDelete;
    
    
    
