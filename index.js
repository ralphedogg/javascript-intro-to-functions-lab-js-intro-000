function shout(hello) {
  return hello.toUpperCase()
}

function whisper(HELLO) {
  return HELLO.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase());
}

function logWhisper(string) {
  console.log('hello'.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you";
  }
}
