var CGreeting = (function () {
    function CGreeting() {
    }
    CGreeting.prototype.greet = function () {
        console.log("Hello world");
    };
    return CGreeting;
})();

var CAnotherClass = (function () {
    function CAnotherClass() {
    }
    CAnotherClass.prototype.get = function () {
        console.log("'get' method invoked from CAnotherClass");
    };
    return CAnotherClass;
})();

var obj = new CGreeting();
obj.greet();

var another_class = new CAnotherClass();
another_class.get();
