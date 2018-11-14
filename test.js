// const arguments = process.argv.slice(2);
//
// console.log(arguments)
//
// let object = {
//   $name: arguments[0],
//   $company: arguments[1],
//   $hp: arguments[2],
//   $created: 'today',
//   $pob: 'melbourne'
// }
//
// let command = ''
//
// for (let key in object) {
//   let withoutDollar = key.slice(1)
//   command += `${withoutDollar} = $${withoutDollar} `
// }
//
// console.log(command)

let object = {
  name: "dsds"
}

// let value = []
// for (let key in object) {
//   value.push(`"${object[key]}"`)
// }

// console.log(value);

const field = Object.values(object)
console.log(field.join());