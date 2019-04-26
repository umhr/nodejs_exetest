var AppPath = 'D:\\inetpub\\ffmpeg-20180820-78d4b6b-win64-static\\bin\\ffmpeg.exe';
var source = 'pcloud640480.mp4';
var out = source + '_ex_ffmpeg.exe.jpg';
var argument = ' -i "' + source + '" -f image2 -vframes 1 -ss 3 -an -deinterlace "' + out + '"';
var cmd = AppPath + ' ' + argument;

child = require('child_process').exec(cmd, (err, stdout, stderr) => {
    console.log('err:', err);
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
})