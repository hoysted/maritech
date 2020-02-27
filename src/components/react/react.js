import React from 'react';

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

    if(this.state.dateEntered){
      let date = this.state.dateEntered;

      //handle incorrect string somehow

      //split the date string to get parts
      let splitDateParts= date.split(' ');
      console.log(splitDateParts);

      //create 2 date strings
      let startDateSource = splitDateParts[0] + ' ' + splitDateParts[3] + ' ' + splitDateParts[4];
      let endDateSource = splitDateParts[0] + ' ' + splitDateParts[3] + ' ' + splitDateParts[4];

      //now create 2 date objects
      let startDateObj = new Date(startDateSource);
      let endDateObj = new Date(endDateSource);

      //convert into ISO format and create DTO
      let DTO = {
        startDate: startDateObj.toISOString(),
        startDateVal: Date.parse(startDateObj),
        endDate: endDateObj.toISOString(),
        endDateVal: Date.parse(endDateObj),
        textValue: date
      }

      console.log(DTO)
      //create elements to render based on API response.
      let elems = [];
      for(let[key, value] of Object.entries(DTO)){
        elems.push(<p key={key}>{key}: {value}</p>)
      }
      //update state for both to save renders
      this.setState({ DTO, dateResponseOutput: elems });
    }
  }

  //dont need this func separately - can do above saves a re render
  // renderDTO = () =>{
  //   let elems = [];
  //   let DTO = this.state.DTO;
  //   for(let[key, value] of Object.entries(DTO)){
  //     elems.push(<p key={key}>{key}: {value}</p>)
  //   }
  //   this.setState({ dateResponseOutput: elems });
  // }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={(e) => this.dateApi(e)}>
          <input onChange={(e) => this.setState({ dateEntered : e.target.value })}/>
          <button>Process Date</button>
        </form>

        {this.state.dateResponseOutput}
      </React.Fragment>
    )
  }
  
}

export default ReactComponent;