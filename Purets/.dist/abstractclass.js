"use strict";
// Abstract classes we cannot create the object of abstract class but of that which is inheritinf that class
class takephoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    getreeltime() {
        return 8;
    }
}
class Instagram2 extends takephoto {
    constructor(cameramode, filter, bust) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.bust = bust;
    }
    getlund() {
        console.log("you are a male now");
    }
}
const Archit = new Instagram2("dark", "yes", 23);
Archit.getreeltime();
