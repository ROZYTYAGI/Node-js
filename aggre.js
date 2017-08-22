const fs = require('fs');

var lineReader = require('readline').createInterface({

    input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});
var out = [];
var result = [];
var result1 = [];
lineReader.on('line', function(line) {
    var jasonData = {};

    var lineSplit = line.split(',');
    jasonData.Particulars = lineSplit[0];
     
   for(i=0;i<25;i++){
       
        jasonData.year=lineSplit[i];
        console.log(jasonData.year)
    }
   /* jasonData.Year93 = lineSplit[5];
    jasonData.Year94 = lineSplit[6];
    jasonData.Year95 = lineSplit[7];
    jasonData.Year96 = lineSplit[8];
    jasonData.Year97 = lineSplit[9];
    jasonData.Year98 = lineSplit[10];
    jasonData.Year99 = lineSplit[11];
    jasonData.Year2000 = lineSplit[12];
    jasonData.Year2001 = lineSplit[13];
    jasonData.Year2002 = lineSplit[14];
    jasonData.Year2003 = lineSplit[15];
    jasonData.Year2004 = lineSplit[16];
    jasonData.Year2005 = lineSplit[17];
    jasonData.Year2006 = lineSplit[18];
    jasonData.Year2007 = lineSplit[19];
    jasonData.Year2008 = lineSplit[20];
    jasonData.Year2009 = lineSplit[21];
    jasonData.Year2010 = lineSplit[22];
    jasonData.Year2011 = lineSplit[23];
    jasonData.Year2012 = lineSplit[24];
    jasonData.Year2013 = lineSplit[25];



    if (jasonData.Year93 == 'NA') {
        jasonData.Year93 = 0;
    }

    if (jasonData.Year94 == 'NA') {
        jasonData.Year94 = 0;
    }
    if (jasonData.Year95 == 'NA') {
        jasonData.Year95 = 0;
    }
    if (jasonData.Year96 == 'NA') {
        jasonData.Year96 = 0;
    }
    if (jasonData.Year97 == 'NA') {
        jasonData.Year97 = 0;
    }
    if (jasonData.Year98 == 'NA') {
        jasonData.Year98 = 0;
    }
    if (jasonData.Year99 == 'NA') {
        jasonData.Year99 = 0;
    }
    if (jasonData.Year2000 == 'NA') {
        jasonData.Year2000 = 0;
    }
    if (jasonData.Year2001 == 'NA') {
        jasonData.Year2001 = 0;
    }
    if (jasonData.Year2002 == 'NA') {
        jasonData.Year2002 = 0;
    }
    if (jasonData.Year2003 == 'NA') {
        jasonData.Year2003 = 0;
    }
    if (jasonData.Year2004 == 'NA') {
        jasonData.Year2005 = 0;
    }
    if (jasonData.Year2005 == 'NA') {
        jasonData.Year2005 = 0;
    }
    if (jasonData.Year2006 == 'NA') {
        jasonData.Year2006 = 0;
    }
    if (jasonData.Year2007 == 'NA') {
        jasonData.Year2007 = 0;
    }
    if (jasonData.Year2008 == 'NA') {
        jasonData.Year2008 = 0;
    }
    if (jasonData.Year2009 == 'NA') {
        jasonData.Year2009 = 0;
    }
    if (jasonData.Year2010 == 'NA') {
        jasonData.Year2010 = 0;
    }
    if (jasonData.Year2011 == 'NA') {
        jasonData.Year2011 = 0;
    }
    if (jasonData.Year2012 == 'NA') {
        jasonData.Year2012 = 0;
    }
    if (jasonData.Year2013 == 'NA') {
        jasonData.Year2013 = 0;
    }

/*result1 = out.replace(/NA/i, '0')
console.log(result1)*/
    out.push(jasonData);
     

});

lineReader.on('close', function(line) {
    result = out.filter(function(data) {
        return data.Particulars.includes("Agricultural Production Commercial")

    });
console.log(result[1]);
});
/*lineReader.on('close', function(line) {
    result1 = result.reduce(function(total, data) {
        total += parseFloat(data.year93)
        return total
    }, 0);

    */
   // console.log("Aggregated value for 1993:" + result1)
//});
lineReader.on('close', function() {

    var json = JSON.stringify(result, null, 2);
    fs.writeFileSync('part_d.json', json);

});