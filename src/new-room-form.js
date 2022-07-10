import React from "react";

export default class NewRoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      areaValue: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(e) {
    this.setState({nameValue: e.target.value});
  }

  handleAreaChange(e) {
    this.setState({areaValue: e.target.value});
  }

  handleClick(e) {
   this.props.addNewRoom(e, this.props.data,
    {name: this.state.nameValue, area: this.state.areaValue});
    this.setState({nameValue: '', areaValue: ''}); 
  }

  render() {
    return(
      <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
        <small class="form-text text-muted">Please provide the name of your house.</small>
        <input type="text" class="form-control" placeholder="Area" onChange={this.handleAreaChange} value={this.state.areaValue} />
        <small class="form-text text-muted">Please provide the size of your house.</small>
      </div>
      <button type="button" class="btn btn-primary" onClick={this.handleClick}>Add Room</button>
      </form>
    )
  }
}