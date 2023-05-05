// generate_password.js

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  // console.log('options', options)

  // create a collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat([...upperCaseLetters])
  } 
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  } 
  if (options.symbols === 'on') {
    collection = collection.concat([...symbols])
  } 

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'You must select at least one character set'
  }

  // start generating password
  let password = ''
  for (let i = 1; i <= options.length; i ++) {
    password += sample(collection)
  }

  // return the generated password
  return password
}

// invoke generatePassword function 
// generatePassword()

// export generatePassword function for other files to use
module.exports = generatePassword