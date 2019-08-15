
class CGreeting {
	greet():void {
		console.log("Hello world")
	}
}

class CAnotherClass {
	get():void {
		console.log("'get' method invoked from CAnotherClass")
	}
}

var obj = new CGreeting()
obj.greet()

var another_class = new CAnotherClass()
another_class.get()
