const CustomError = require("../extensions/custom-error");
const _tabulaRecta = {
  a: "abcdefghijklmnopqrstuvwxyz",
  b: "bcdefghijklmnopqrstuvwxyza",
  c: "cdefghijklmnopqrstuvwxyzab",
  d: "defghijklmnopqrstuvwxyzabc",
  e: "efghijklmnopqrstuvwxyzabcd",
  f: "fghijklmnopqrstuvwxyzabcde",
  g: "ghijklmnopqrstuvwxyzabcdef",
  h: "hijklmnopqrstuvwxyzabcdefg",
  i: "ijklmnopqrstuvwxyzabcdefgh",
  j: "jklmnopqrstuvwxyzabcdefghi",
  k: "klmnopqrstuvwxyzabcdefghij",
  l: "lmnopqrstuvwxyzabcdefghijk",
  m: "mnopqrstuvwxyzabcdefghijkl",
  n: "nopqrstuvwxyzabcdefghijklm",
  o: "opqrstuvwxyzabcdefghijklmn",
  p: "pqrstuvwxyzabcdefghijklmno",
  q: "qrstuvwxyzabcdefghijklmnop",
  r: "rstuvwxyzabcdefghijklmnopq",
  s: "stuvwxyzabcdefghijklmnopqr",
  t: "tuvwxyzabcdefghijklmnopqrs",
  u: "uvwxyzabcdefghijklmnopqrst",
  v: "vwxyzabcdefghijklmnopqrstu",
  w: "wxyzabcdefghijklmnopqrstuv",
  x: "xyzabcdefghijklmnopqrstuvw",
  y: "yzabcdefghijklmnopqrstuvwx",
  z: "zabcdefghijklmnopqrstuvwxy"
}
class VigenereCipheringMachine {
  constructor(value) {
    this.value = value
  }
  static get _tabulaRecta() {
    return _tabulaRecta
  }
  encrypt(plainText, keyword) {
    if (plainText === undefined || keyword === undefined) {
      throw new CustomError
    }
    if (typeof (plainText) !== "string") {
      return "invalid plainText. Must be string, not " + typeof (plainText);
    }
    if (typeof (keyword) !== "string") {
      return "invalid keyword. Must be string, not " + typeof (keyword);
    }

    plainText = plainText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    var encryptedText = "";
    var specialCharacterCount = 0;

    for (var i = 0; i < plainText.length; i++) {
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keywordIndex = VigenereCipheringMachine._tabulaRecta.a.indexOf(keyword[keyLetter]);

      if (VigenereCipheringMachine._tabulaRecta[plainText[i]]) {
        encryptedText += VigenereCipheringMachine._tabulaRecta[plainText[i]][keywordIndex];
      } else {
        encryptedText += plainText[i];
        specialCharacterCount++;
      }
    }
    if (this.value === false) {
      encryptedText = encryptedText.toUpperCase()
      return encryptedText.split('').reverse().join('')
    } else {
      encryptedText = encryptedText.toUpperCase()
      return encryptedText
    }
  }
  decrypt(encryptedText, keyword) {
    if (encryptedText === undefined || keyword === undefined) {
      throw new CustomError
    }
    if (typeof (encryptedText) !== "string") {
      return "invalid encryptedText. Must be string, not " + typeof (encryptedText);
    }
    if (typeof (keyword) !== "string") {
      return "invalid keyword. Must be string, not " + typeof (keyword);
    }

    encryptedText = encryptedText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    var decryptedText = "";
    var specialCharacterCount = 0;

    for (var i = 0; i < encryptedText.length; i++) {
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keyRow = VigenereCipheringMachine._tabulaRecta[keyword[keyLetter]];

      if (keyRow.indexOf(encryptedText[i]) !== -1) {
        decryptedText += VigenereCipheringMachine._tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
      } else {
        decryptedText += encryptedText[i];
        specialCharacterCount++;
      }
    }

    if (this.value === false) {
      decryptedText = decryptedText.toUpperCase()
      return decryptedText.split('').reverse().join('')
    } else {
      decryptedText = decryptedText.toUpperCase()
      return decryptedText;
    }
  }
}

module.exports = VigenereCipheringMachine;
