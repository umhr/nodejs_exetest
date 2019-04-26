var cmd = 'ipconfig';

child = require('child_process').exec(cmd, (err, stdout, stderr) => {
    console.log('err:', err);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
})