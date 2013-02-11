describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head", function() {
    expect(Object.keys(linkedList)).toContain("head");
  });

  describe("method insert", function() {
    it("should have a method named 'insert'", function() {
      expect(linkedList.insert).toEqual(jasmine.any(Function));
    });

    it("payload should have the value that was passed to it.", function() {
      linkedList.insert("Hello");
      expect(linkedList.head.payload).toEqual("Hello");
    });

    it("the node link should point to the previous head", function() {
      linkedList.insert("Hello");
      linkedList.insert("Goodbye");
      var prevHead = linkedList.head;
      linkedList.insert("Bac-os");
      expect(linkedList.head.next).toEqual(prevHead)
    });
  });

  describe("method contains", function () {

    it("should check if passed value is in linked list", function() {
      linkedList.insert("Hello");
      linkedList.insert("Goodbye");
      linkedList.insert("Bac-os");
      expect(linkedList.contains("Bac-os")).toBeTruthy();
    });

    it("should check if passed value is not in linked list", function() {
      linkedList.insert("Hello");
      linkedList.insert("Goodbye");
      linkedList.insert("Bac-os");
      expect(linkedList.contains("Beggin Strips")).toBeFalsy();
    });
  });

  // add more tests here to test the functionality of linkedList
});


