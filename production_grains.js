const fs = require('fs');

var lineReader = require('readline').createInterface({

    input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});
var out = [];
var result = [];
lineReader.on('line', function(line) {
    var jasonData = {};

    var lineSplit = line.split(',');
    jasonData.Particulars = lineSplit[0];
    jasonData.production = lineSplit[24];

    out.push(jasonData);
});

lineReader.on('close', function(line) {
    result = out.filter(function(data) {
        return data.Particulars.includes("Agricultural Production Oilseeds")
    });
    result.sort((a, b) =>
        (b.production - a.production));
    console.log(result);
});
lineReader.on('close', function() {

    var json = JSON.stringify(result, null, 2);
    fs.writeFileSync('part_a.json', json);

});

//for Agricultural Production Foodgrains

var out1 = [];
var result1 = [];
lineReader.on('line', function(line) {
    var jasonData = {};

    var lineSplit = line.split(',');
    jasonData.Particulars = lineSplit[0];
    jasonData.production = lineSplit[24];
if(jasonData.Particulars=='Agricultural Production Foodgrains Kharif' ||
    jasonData.Particulars == 'Agricultural Production Foodgrains Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Rice' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Rice Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Rice Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Wheat Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Jowar' ||
        jasonData.Particulars== 'Agricultural Production Foodgrains Jowar Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Jowar Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Bajra Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Maize' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Maize Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Maize Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Ragi Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Small Millets Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Barley Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Coarse Cereals' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Coarse Cereals Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Coarse Cereals Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Cereals' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Cereals Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Cereals Rabi' ||
        jasonData.Particulars== 'Agricultural Production Foodgrains Tur Kharif' ||
        jasonData.Particulars== 'Agricultural Production Foodgrains Other Kharif Pulses Kharif' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Gram Rabi' ||
        jasonData.Particulars== 'Agricultural Production Foodgrains Other Kharif Pulses Rabi' ||
        jasonData.Particulars == 'Agricultural Production Foodgrains Pulses' ||
        jasonData.Particulars== 'Agricultural Production Foodgrains Pulses Kharif' ||
        jasonData.Particulars== 'Agricultural Production Foodgrains Pulses Rabi'){
    result1.push(jasonData);
}

});

lineReader.on('close', function(line) {
    
    result1.sort((a, b) =>
        (b.production - a.production));
    console.log(result1);
});
lineReader.on('close', function() {

    var json = JSON.stringify(result1, null, 2);
    fs.writeFileSync('part_b.json', json);

});