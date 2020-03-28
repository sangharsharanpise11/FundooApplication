'use stict';

function Route(name, htmlName, defaultRoute) {
    console.log("in route");
    
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    
    name: undefined,
    htmlName: undefined,
    default: undefined,
    
    constructor: function (name, htmlName, defaultRoute) {
        console.log("in route constructor");

        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    },
    
    isActiveRoute: function (hashedPath) {
        console.log("in isActive");
        return hashedPath.replace('#', '') === this.name; 
    }
}
