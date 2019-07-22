import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


class Preparation extends Component {
    constructor(props){
        super(props);
        const open = this.props.open
        console.log(open);
        this.state = {
            open:false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }



    handleClickOpen() {
        this.setState({
            open: true
        });    
    }
         
    handleClose() {
        this.setState({
            open: false
        });   
     }

    render() {
        const open = this.props.open
        
        return (
            <div>
     
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
                    <Button variant="contained" color="primary">삭제</Button>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Preparation;