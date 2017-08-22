const fs = require('fs');
var lineReader = require('readline').createInterface({
    input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});
var out = [];
var result = [],
    jasonData = {};
lineReader.on('line', function(line) {
    var lineSplit = line.split(',');
    jasonData.Particulars = lineSplit[0];
    for (var i = 4; i < 26; i++) {
        var arr = ['Agricultural Production Foodgrains Rice Area Andhra Pradesh', 'Agricultural Production Foodgrains Rice Area Karnataka', 'Agricultural Production Foodgrains Rice Area Kerala', 'Agricultural Production Foodgrains Rice Area Tamil Nadu']
        for (var j in arr) {
            if (arr[j] === jasonData.Particulars) {
                jasonData.year = lineSplit[i];
                if (jasonData.year == 'NA') {
                    jasonData.year = 0;
                }
                //out.push(jasonData)
                console.log(jasonData);
            }}}
});
lineReader.on('close', function(line) {
    // console.log(out);
});
lineReader.on('close', function() {
    var json = JSON.stringify(result, null, 2);
    fs.writeFileSync('part_c.json', json);
});