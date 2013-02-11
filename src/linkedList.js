// Note: don't use an array to do this.
var makeLinkedList = function(){
	var linkedList  = {
		head: null,
		//inserts new node at the top of the linked list
	    insert: function(newContents) {
	        var newNode = {
	          payload: newContents,
	          next: null,
	          hasAfter: function(value) {
	          	return this.payload === value || ((this.next !== null) && this.next.hasAfter(value));
	          }
	        }
        	//points from new node to prev node
	        newNode.next = this.head;
        	//changes the head of the linked list to new node
	        this.head = newNode;
	    },

    	//searches the list for a given value
		contains: function(value) {

			return !(this.head === null || !(this.head.hasAfter(value)));
		}


		// 28-37 is just an experiment in fun. 
		    // try {
	   	 //    	var searchLocation = this.head;
	   	 //    	while (searchLocation.payload !== valueSearch) {
	   	 //    			searchLocation = searchLocation.next;
	   	 //    		}
	   	 //    	return true;
	    	// }
		    // catch(e) {
		    // 	return false;
		    // }
    	
   	}	
  	return linkedList;
}

