import React from 'react';
import { getNodeText } from '@testing-library/dom';
import { render } from '@testing-library/react';

class TreeTraversal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bob: null,
      nodesList: [
      {
        GUID: 123,
        parentID: 'root',
        children: [ //defo an array 'INDEX'
          {
            GUID: 123456,
            parentID: 123,
            children: [{}]
          }
        ]
      },
      {
        GUID: 456,
        parentID: 'root',
        children: [
          {
            GUID: 12345678,
            parentID: 456,
            children: [{}]
          }
        ]
      },
      {
        GUID: 789,
        parentID: 'root',
        children: [
          {
            GUID: 123456789,
            parentID: 789,
            children: [{}]
          }
        ]
      }
    ]
  }
  }


//class TO
//     let result = Object.keys(nodesList).reduce(function (r, k) {
//         return r.concat(k, nodesList[k]);
//     }, []);
    
// console.log(result);

  //1) Flatten entire structure //keys if object
  flatten = () => {
    // let bob = this.state.nodesList.flat();
    // let luke = bob.reduce((acc, val) => acc.concat(val), []);
    // console.log(luke);
  }
  // console.log(JSON.stringify(nodesList));
  

  //2) return a parent OBJECT when GUID for a child sent
  returnParent = () => {
    let nodes = this.state.nodesList;
    let passedID = 123456;
    console.log('Scenario 2');
    console.log('given the child GUID: ' + passedID);

      // Loop through nodes array
      nodes.forEach((element, index) => {
        //console.log(element.GUID);
        //console.log(element.children);
        //console.log(index);
        //loop children array for each parent searching for parentID
        element.children.forEach((elem, index) => {
          //console.log(elem.GUID);
          if(elem.GUID === passedID){ //should only happen once so OK
            //get parentID
            console.log('The parent is GUID: ' + elem.parentID);
            // console.log(elem.parentID); 
            let parentIDFound = elem.parentID;



            //NOW GOT PARENT ID SO LOOK UP AND RETURN PARENT OBJ
            const findPrentGUID = (element) => element.GUID === parentIDFound;
            console.log('Parent object retuned :' + JSON.stringify(nodes.find(findPrentGUID)));
          }
        })
    });
         //OR know what idex i am at - store this and return it
    //look up parent separately and return it
  }

  //3) given GUID + a child NODE 
      //insert child node into CHILDREN of this GUID at a given index
  render() {
    this.returnParent();
    return (
      <React.Fragment>
        <h2>Please open console to view the call's and responses.</h2>
      </React.Fragment>
    );
  }
}

export default TreeTraversal;