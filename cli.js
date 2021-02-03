#!/usr/bin/env node
const program = require('commander');
var fs = require("fs")
var curlcon = require("curlconverter");

program
  .version('0.1.0')
  .arguments('<command>')
  .description('curl command', {command: 'curl command to convert',})
  .option('-r, --remove-dollar', 'Remove $ in output')
  .option('-o, --output <file>', 'Output result to the given filenamee');

program.parse();
const options = program.opts();

ret = curlcon.toPython(program.args[0])
if(options.removeDollar){
    ret=ret.replaceAll('$','')
}
if(options.output){
    fs.writeFile(options.output, ret, err => {
        if (err) {
          console.error(err)
          return
        }
      })
}else {
    console.log(ret)
}