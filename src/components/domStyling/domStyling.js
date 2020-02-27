import React from 'react';

class DomStyling extends React.Component {

  returnElementsToRender = (string) => {
    let elements = [];
  
    string.map((item, index) => {
      let newString = item.split(':');
      let prefix = newString[0];
      let value = newString[1];
      elements.push(<p className={prefix} key={index}>{value}</p>);
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