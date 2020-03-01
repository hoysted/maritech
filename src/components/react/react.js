import React from 'react';
import './react.css';

class ReactComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateEntered: null,
      DTO: null,
      dateResponseOutput: null
    }
  }

  dateApi = (event) => {
    event.preventDefault();

    if(this.state.dateEntered && this.state.dateEntered.indexOf(' ') >= 0){
      let date = this.state.dateEntered;

      // split the date string to get parts
      let splitDateParts= date.split(' ');

      // create 2 date strings
      let startDateSource = splitDateParts[0] + ' ' + splitDateParts[3] + ' ' + splitDateParts[4];
      let endDateSource = splitDateParts[0] + ' ' + splitDateParts[3] + ' ' + splitDateParts[4];

      // now create 2 date objects
      let startDateObj = new Date(startDateSource);
      let endDateObj = new Date(endDateSource);

      // convert into ISO format and create DTO
      let DTO = {
        startDate: startDateObj.toISOString(),
        startDateVal: Date.parse(startDateObj),
        endDate: endDateObj.toISOString(),
        endDateVal: Date.parse(endDateObj),
        textValue: date
      }

      // create elements to render based on API response.
      let dateResponseOutput = [];
      for(let[key, value] of Object.entries(DTO)) {
        dateResponseOutput.push(<p key={key}>{key}: {value}</p>)
      }

      // update state for both to avoid multiple renders
      this.setState({ DTO, dateResponseOutput });
    }
    else {
      alert('Please enter the correct Date format D - D MON YY');
    }
  }
  
  render(){
    const responseOutput = this.state.dateResponseOutput;
    return(
      <React.Fragment>
        <form onSubmit={(e) => this.dateApi(e)}>
          <label>Please enter a date range (D - D MON YY) : </label>
          <input placeholder="D - D MON YY" onChange={(e) => this.setState({ dateEntered : e.target.value })}/>
          <button>Process Date</button>
        </form>

        {responseOutput && responseOutput}
      </React.Fragment>
    )
  }
  
}

export default ReactComponent;