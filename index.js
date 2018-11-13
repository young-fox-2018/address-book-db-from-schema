let ControllerKontak = require('./Controllers/ControllerKontak')
let ControllerGrup = require('./Controllers/ControllerGrup')
let Controller = require('./Controllers/Controller')

//SINTAKS
let argv = process.argv.slice(2)

//DATA

let nama = argv[2]
let namaPerusahaan = argv[3]
let nomorTelepon = argv[4]
let email = argv[5]
let extension = null
if (argv[6] != undefined) {
    extension = argv[6]
}

// console.log(argv);
// console.log(argv);

Controller.execute(argv[0],argv[1], nama, namaPerusahaan, nomorTelepon, email, extension)


