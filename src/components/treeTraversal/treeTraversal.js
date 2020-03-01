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
                GUID: 'a8492255-7673-4a06-b126-f6da6de6abfb',
                parentID: 'a518e1bc-34f8-4923-8674-c05a1797c227',
                children: []
              }
            ]
          },
          {
            GUID: 'abc8e1bc-34f8-4923-8674-c05a1797c227',
            parentID: 'bf4d365d-130c-4479-9234-a86c7b853648',
            children: [
              {
                GUID: '4e40aa91-2fb9-4881-8bc4-ea1d48b94cf1',
                parentID: 'abc8e1bc-34f8-4923-8674-c05a1797c227',
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
    const nodes = this.state.nodesList;
    // call flattenNodes with empty array to initialize 1D collection
    const flattenedNodes = this.flattenNodes(nodes, []);

    console.log('Scenario 1');
    console.log('flattened nodes: ');
    console.log(flattenedNodes);
    return flattenedNodes;
  }

  findParent = (nodes, childID, parent) => {
    let parentElement;

    for (const node of nodes) {
      // if we have not found the parent then try to find it
      if (!parentElement) {
        // if the node is found, set the parent to previous node
        if (node.GUID === childID) {
          parentElement = parent; // parent element was passed in during recursion
          break;
        } else if (node.children.length > 0) {
          // otherwise, recurse on children with parent as this node
          parentElement = this.findParent(node.children, childID, node);
        }
      } else {
        break;
      }
    }

    return parentElement;
  }

  // 2) return a parent OBJECT when GUID for a child sent
  returnParent = (childID) => {
    // pass nodes in here so that doesn't get reset to entire node list during recursion
    const nodes = this.state.nodesList;
    const parentElement = this.findParent(nodes, childID, null);
    console.log('Scenario 2');
    console.log('given the child GUID: ' + childID);

    console.log('parent object is: ');
    console.log(parentElement);
    return parentElement;
  }

  insert(parentId, newNode, index, nodes) {
    for (const node of nodes) {
      if (node.GUID === parentId) {
        // insert the new node here
        if (index <= node.children.length) {
          node.children.splice(index, 0, newNode);
        } else {
          throw new Error(`Given index is larger than child array of length ${node.children.length}`)
        }
        break;
      } else if (node.children.length > 0) {
        // otherwise, try to find the parent in children
        this.insert(parentId, newNode, index, node.children);
      }
    }

    return nodes;
  }

  // 3) given GUID + a child NODE 
  // insert child node into CHILDREN of this GUID at a given index
  insertNode = (parentId, newNode, index) => {
    console.log('Scenario 3');
    console.log('given the parent ID: ' + parentId);
    console.log('and insertion index: ' + index);
    console.log('with new child node: ');
    console.log(newNode);

    const nodesWithInsertedChild = this.insert(parentId, newNode, index, this.state.nodesList);
    console.log('inserts the node and outputs');
    console.log(nodesWithInsertedChild);
    
    return nodesWithInsertedChild;
  }

  render() {
    //1
    this.flatten();
    //2
    this.returnParent('4e40aa91-2fb9-4881-8bc4-ea1d48b94cf1');
    //3
    this.insertNode('64bd73ba-33b4-4c1e-896d-6c78e3d0e548', {
      GUID: '938d4331-a1d7-446c-9182-2fecaff6012a',
      parentID: '64bd73ba-33b4-4c1e-896d-6c78e3d0e548',
      children: [{}]
    }, 0);

    //below could do TREE > results ON RIGHT SIDE. might be nice...
    return (
      <React.Fragment>
        <h2>Please open console to view the call's and responses.</h2>
      </React.Fragment>
    );
  }
}

export default TreeTraversal;