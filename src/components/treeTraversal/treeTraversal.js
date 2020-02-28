import React from 'react';

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
        // Loop children array
        element.children.forEach((elem, index) => {
          if(elem.GUID === passedID){ 
            console.log('The parent is GUID: ' + elem.parentID);
            let parentIDFound = elem.parentID;
            // Return parent Obj
            const findPrentGUID = (element) => element.GUID === parentIDFound;
            console.log('Parent object retuned : ' + JSON.stringify(nodes.find(findPrentGUID)));
          }
        })
    });
  }

  //3) given GUID + a child NODE 
      //insert child node into CHILDREN of this GUID at a given index

  render() {
    this.returnParent();
    //below could do TREE > results ON RIGHT SIDE. might be nice...
    return (
      <React.Fragment>
        <h2>Please open console to view the call's and responses.</h2>
      </React.Fragment>
    );
  }
}

export default TreeTraversal;