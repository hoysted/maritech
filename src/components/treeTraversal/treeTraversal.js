import React from 'react';

class TreeTraversal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bob: null,
      nodesList: [
      {
        // root element
        GUID: 'bf4d365d-130c-4479-9234-a86c7b853648',
        parentID: null,
        children: [ //defo an array 'INDEX'
          {
            GUID: '64bd73ba-33b4-4c1e-896d-6c78e3d0e548',
            parentID: 'bf4d365d-130c-4479-9234-a86c7b853648',
            children: [ //defo an array 'INDEX'
              {
                GUID: 'e26005ca-7449-4a30-8c95-3e018d621f67',
                parentID: '64bd73ba-33b4-4c1e-896d-6c78e3d0e548',
                children: [{
                  GUID: 'c5a3d247-ee48-476d-ae14-a0da65d34cbf',
                  parentID: 'e26005ca-7449-4a30-8c95-3e018d621f67',
                  children: []
                }]
              }
            ]
          },
          {
            GUID: 'a518e1bc-34f8-4923-8674-c05a1797c227',
            parentID: 'bf4d365d-130c-4479-9234-a86c7b853648',
            children: [
              {
                GUID: '4e40aa91-2fb9-4881-8bc4-ea1d48b94cf1',
                parentID: 'a518e1bc-34f8-4923-8674-c05a1797c227',
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
  }

  flattenNodes = (nodes, elementsInNode) => {
    // iterate through nodes on argument level
    nodes.forEach((node) => {
      const { children, ...elementProperties } = node;
      // push IDs of current node to 1D collection
      elementsInNode.push({ ...elementProperties });

      if (children.length > 0) {
        // recursively call function
        // @params children - the children of the current node
        // @params elementsInNode - the 1D collection to push to
        this.flattenNodes(children, elementsInNode);
      }
    });

    // return 1D collection of nodes
    return elementsInNode;
  }

  // 1) flatten the nodes into one dimensional collection
  flatten = () => {
    const data = this.state.nodesList;
    // call flattenNodes with empty array to initialize 1D collection
    const flattenedNodes = this.flattenNodes(data, []);

    console.log(flattenedNodes);
    return flattenedNodes;
  }

  // 2) return a parent OBJECT when GUID for a child sent
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

  insertNode() {
    let newNode = 
    {
      GUID: 10009,
      parentID: 123,
      children: [{}]
    }
  }

  render() {
    //1
    this.flatten();
    //2
    //this.returnParent();
    //3
    //this.insertNode();

    //below could do TREE > results ON RIGHT SIDE. might be nice...
    return (
      <React.Fragment>
        <h2>Please open console to view the call's and responses.</h2>
      </React.Fragment>
    );
  }
}

export default TreeTraversal;