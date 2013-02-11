var makeNode = function(nodeValue){
  var node = {
    payload: nodeValue,
    parent: null,
    children: [],

    //adds a new item to the tree
    addChild: function(newChild) {
    	var newNode = makeNode(newChild);
    	newNode.parent = this;
    	this.children.push(newNode);
        },
    //removes item from tree
    removeSelf: function() {
    	//looks for the item to be removed
    	var parentsChildren = this.parent.children;
    	for(var i = 0;parentsChildren[i].payload !== this.payload; i++)

    	//grandparent node adopts orphaned children
    	this.parent.children = parentsChildren.concat(this.children);

    	//actual removal
    	this.parent.children.splice(i, 1);
    },

    //accesses each node in the entire tree & returns array containing all the payloads
    traverse: function() {
    	var heldPayloads = [this.payload];
		for(var i in this.children) {
			heldPayloads = heldPayloads.concat(this.children[i].traverse());
		}
		return heldPayloads;
    },
	//searches tree for desiredValue starting at bottom working upward
    contains: function(desiredValue) {
	    for (var i in this.children) {
	    	if(this.children[i].contains(desiredValue)) {
	    		return true;
	    	}
	    }
    	return this.payload === desiredValue;
    }
  };

  return node;
}











