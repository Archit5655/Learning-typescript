"use strict";
// implementing the properties of interface
class Instagram {
    constructor(cameramode, filter, bustmode) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.bustmode = bustmode;
    }
}
class Youtube {
    constructor(cameramode, filter, bustmode, shorts) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.bustmode = bustmode;
        this.shorts = shorts;
    }
    createstory() {
        console.log("this is a story");
    }
}
