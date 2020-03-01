import React from 'react';
import './domStyling.css';

class DomStyling extends React.Component {

  returnElementsToRender = (string) => {
    let elements = [];
  
    string.forEach((item, index) => {
      let newString = item.split(':');
      let prefix = newString[0];
      let value = newString[1];
      elements.push(<div className={prefix} key={index}><p>{value}</p></div>);
    })
    
    return elements;
  }

  render(){
    const string = ['SYS:Element for SYS','PAR:Element for PAR','ACT:Element for ACT'];
    let elementsToRender = this.returnElementsToRender(string);

    return(
      elementsToRender && elementsToRender
    );
  }
}

export default DomStyling;