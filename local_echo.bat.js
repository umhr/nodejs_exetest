var AppPath = 'echo.bat';
var argument = '"Mizutama Inc."'; // 第一引数として半角スペース有文字列を渡したいときには"で囲う
var cmd = AppPath + ' ' + argument;

child = require('child_process').exec(cmd, (err, stdout, stderr) => {
    console.log('err:', err);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
})