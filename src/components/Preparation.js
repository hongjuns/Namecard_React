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
        this.state = {
            open:false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            open:nextProps.opens
        });
        console.log("componentWillReceiveProps: " + nextProps.opens);
    }

    handleClose() {
        this.props.send(false)
        this.setState({
            open: false
        });   
     }

    render() {
    
        return (
            <div>
     
                <Dialog onClose={this.handleClose} open={this.state.open}>
                 <DialogTitle onClose={this.handleClose}>
                    준비중 
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        현제 페이지는 준비중 입니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Preparation;