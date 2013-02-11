describe("tree", function() {
  var node;

  beforeEach(function() {
    node = makeNode('root');
  });

  it("should have an array of children", function() {
    expect(node.children).toEqual(jasmine.any(Array));
  });

  describe('addChild', function(){
      it("does exist", function() {
        expect(node.addChild).toEqual(jasmine.any(Function));
      });
      
      it("does added child have 'payload'", function() {
        node.addChild('firstChild');
        expect(node.children[0].payload).toBe('firstChild');
      });

      it("does added child point to correct parent", function() {
        node.addChild('Added Child');
        expect(node.children[0].parent).toBe(node);
      });        });


  describe('removeSelf', function(){  
    it("does exist", function() {
      expect(node.removeSelf).toEqual(jasmine.any(Function));
      });

    it("does remove itself from parent", function() {
      node.addChild('Bad seed1');
      node.addChild('Bad seed2');
      node.addChild('Bad seed3');
      node.children[1].removeSelf();
      expect(node.children[1].payload).toEqual('Bad seed3');
      });


  });
    
  describe('traverse', function(){  
    it("does exist", function() {
      expect(node.traverse).toEqual(jasmine.any(Function));
    });  

    it("should access every node object", function() {
      var testArrayLayer1 = ['a','b','c'];
      var testArrayLayer2 = ['A','B','C'];
      for(var i in testArrayLayer1) {
        node.addChild(testArrayLayer1[i]);
        for(var j in testArrayLayer2) {
          node.children[i].addChild(testArrayLayer2[j]);
        }
      };
      var expectedResult = node.traverse();
      expect(expectedResult).toEqual(['root','a','A','B','C','b','A','B','C','c','A','B','C']);
    });
  });

  describe('contains', function(){  
    it("does exist", function() {
      expect(node.contains).toEqual(jasmine.any(Function));
    });  

    it("should find the desired object", function() {
      var testArrayLayer1 = ['a','b','c'];
      var testArrayLayer2 = ['A','B','C'];
      for(var i in testArrayLayer1) {
        node.addChild(testArrayLayer1[i]);
        for(var j in testArrayLayer2) {
          node.children[i].addChild(testArrayLayer1[i]+testArrayLayer2[j]);
        }
      };
      expect(node.contains('cC')).toBeTruthy();
    });

    it("should not find the desired object", function() {
      var testArrayLayer1 = ['a','b','c'];
      var testArrayLayer2 = ['A','B','C'];
      for(var i in testArrayLayer1) {
        node.addChild(testArrayLayer1[i]);
        for(var j in testArrayLayer2) {
          node.children[i].addChild(testArrayLayer1[i]+testArrayLayer2[j]);
        }
      };
      expect(node.contains('bacon')).toBeFalsy();
    });
  });


  // Add more tests here to test the functionality of node.
  // If you're feeling frisky, have your node nodes track their
  // parent and add a function called removeFromParent.
});