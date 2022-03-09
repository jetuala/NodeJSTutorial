const os = require('os');

// info about the current user
const user = os.userInfo();



// method returns the system uptime in seconds
// THIS IS A THING?!?!
console.log(`The System Uptime is ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)