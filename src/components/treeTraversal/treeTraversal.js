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
  //destructuring
  flattenNodes = () => {
    console.log('flatten');

  //   function flat(array) {
  //     var result = [];
  //     array.forEach(function (a) {
  //         result.push(a);
  //         if (Array.isArray(a.children)) {
  //             result = result.concat(flat(a.children));
  //         }
  //     });
  //     return result;
  // }
  
  let data = this.state.nodesList;
  // let result = flat(data);
  // console.log(JSON.stringify(data, 0, 4));
  // console.log(JSON.stringify(result, 0, 4));

  //let result = Array.prototype.concat(...data);
  //console.log(JSON.stringify(data, 0, 4));


    //loop through
    let childrenSet = [];
    let childIndexSet = [];
    data.forEach((element, index) => {
      element.children.forEach((elem, index) => {
        //push item to storing array ready for concat
        childrenSet.push(elem); //put in 1 array??
        childIndexSet.push(index);
        //console.log(childIndex);
        //also want to delete from here
        //element.children.splice(childIndex, 1);
      })
    })
    //console.log(JSON.stringify(data, 0, 4));
    console.log(childrenSet);
    console.log(childIndexSet);

    //delete children from parents
    data.forEach((elem,Index) => {
      console.log(childIndexSet);
      
      elem.children.splice(childIndexSet, 1);// needs to be value of childIndexSet
    })

    console.log(JSON.stringify(data, 0, 4));
    let finalResult = data.concat(childrenSet);

    console.log(JSON.stringify(finalResult, 0, 4));

    //add children to one array

    //add parents to another array

    //then concat them both into one array


    // let bob = this.state.nodesList.flat();
    // let luke = bob.reduce((acc, val) => acc.concat(val), []);
    // console.log(luke);
    // console.log(JSON.stringify(nodesList));
  }
  

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
    this.flattenNodes();
    //this.returnParent();



    //below could do TREE > results ON RIGHT SIDE. might be nice...
    return (
      <React.Fragment>
        <h2>Please open console to view the call's and responses.</h2>
      </React.Fragment>
    );
  }
}

export default TreeTraversal;