const attestation = require('./attestation');
const escpos = require('escpos');
escpos.USB = require('escpos-usb');
const device  = new escpos.USB();
// const device  = new escpos.Network('localhost');
// escpos.SerialPort = require('escpos-serialport');
// const device  = new escpos.SerialPort('/dev/usb/lp0');

const print = (name = "__________________", birthdate = "____/____/____", birthplace = "________________", reasons = ["com", "jog"], address, city) => {
  const options = { encoding: "858" }
  const printer = new escpos.Printer(device, options);
  
  device.open(error => {
    printer
    .font('a')
    .align('lt')
    .size(1, 2)
    .text(attestation.title)
    .size(1, 1)
    .font('b')

    .text(attestation.header)
    .style('B').text(attestation.id(name, birthdate, birthplace, address)).style('NORMAL')
    .text(attestation.certify)
    .text(attestation.reasons(reasons))
    .style('B').text(attestation.stamp(city)).style('NORMAL')
    .text(attestation.signature)
    
    .cut()
    .close();

    if (error) {
      console.error("Printer error:", error);
    }
  });
}


module.exports = print;