function translit() {
    var text = document.getElementById('text').value
    var transliteArray = new Array()
    transliteArray['а'] = 'a'
    transliteArray['б'] = 'b'
    transliteArray['в'] = 'v'
    transliteArray['г'] = 'g'
    transliteArray['д'] = 'd'
    transliteArray['е'] = 'e'
    transliteArray['ё'] = 'yo'
    transliteArray['ж'] = 'zh'
    transliteArray['з'] = 'z'
    transliteArray['и'] = 'i'
    transliteArray['й'] = 'j'
    transliteArray['к'] = 'k'
    transliteArray['л'] = 'l'
    transliteArray['м'] = 'm'
    transliteArray['н'] = 'n'
    transliteArray['о'] = 'o'
    transliteArray['п'] = 'p'
    transliteArray['р'] = 'r'
    transliteArray['с'] = 's'
    transliteArray['т'] = 't'
    transliteArray['у'] = 'u'
    transliteArray['ф'] = 'f'
    transliteArray['х'] = 'x'
    transliteArray['ц'] = 'c'
    transliteArray['ч'] = 'ch'
    transliteArray['ш'] = 'sh'
    transliteArray['щ'] = 'sh'
    transliteArray['ъ'] = '"'
    transliteArray['ы'] = 'y\''
    transliteArray['ь'] = '\''
    transliteArray['э'] = 'e\''
    transliteArray['ю'] = 'yu'
    transliteArray['я'] = 'ya'
    transliteArray['А'] = 'A'
    transliteArray['Б'] = 'B'
    transliteArray['В'] = 'V'
    transliteArray['Г'] = 'G'
    transliteArray['Д'] = 'D'
    transliteArray['Е'] = 'E'
    transliteArray['Ё'] = 'Yo'
    transliteArray['Ж'] = 'Zh'
    transliteArray['З'] = 'Z'
    transliteArray['И'] = 'I'
    transliteArray['Й'] = 'J'
    transliteArray['К'] = 'K'
    transliteArray['Л'] = 'L'
    transliteArray['М'] = 'M'
    transliteArray['Н'] = 'N'
    transliteArray['О'] = 'O'
    transliteArray['П'] = 'P'
    transliteArray['Р'] = 'R'
    transliteArray['С'] = 'S'
    transliteArray['Т'] = 'T'
    transliteArray['У'] = 'U'
    transliteArray['Ф'] = 'F'
    transliteArray['Х'] = 'X'
    transliteArray['Ц'] = 'C'
    transliteArray['Ч'] = 'Ch'
    transliteArray['Ш'] = 'Sh'
    transliteArray['Щ'] = 'Sh'
    transliteArray['Ъ'] = '"'
    transliteArray['Ы'] = 'Y\''
    transliteArray['Ь'] = '\''
    transliteArray['Э'] = 'E\''
    transliteArray['Ю'] = 'Yu'
    transliteArray['Я'] = 'Ya'
    var result = ''
    for (const char of text) {
        if (transliteArray[char] !== undefined) {
            result += transliteArray[char];
        } else {
            result += char;
        }
    }
    document.getElementById('text').value = result
}

function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%:&?*-_=+"
    var password = ""
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomIndex)
    }
    document.getElementById('text').value = password
}

function increaseLength() {
    var lengthElement = document.getElementById('length')
    var currentLength = parseInt(lengthElement.textContent)
    lengthElement.textContent = currentLength + 1
}

function decreaseLength() {
    var lengthElement = document.getElementById('length')
    var currentLength = parseInt(lengthElement.textContent)
    if (currentLength > 1) {
        lengthElement.textContent = currentLength - 1
    }
}

function encodeToBase64() {
    var text = document.getElementById('text').value
    var encodedText = btoa(unescape(encodeURIComponent(text)))
    document.getElementById('text').value = encodedText
}

function decodeFromBase64() {
    var encodedText = document.getElementById('text').value;
    var decodedText = decodeURIComponent(escape(atob(encodedText)))
    document.getElementById('text').value = decodedText
}