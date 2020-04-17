var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var morse_text;
var morse_dictionary = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': '/'
};
function drawMorse() {
    var new_text = "";
    var time_caller = 0;
    var entrada = document.getElementById("morse_text").value;
    for (let i = 0; i < entrada.length; i++) {
        console.log("voy a agregar " + String(entrada.charAt(i).toLowerCase()) + " y poner " + morse_dictionary[entrada.charAt(i).toLowerCase()]);
        new_text += morse_dictionary[entrada.charAt(i).toLowerCase()];
    }
    setTimeout(() => {
        document.getElementById("morse").className = "center code_printed";
        document.getElementById("morse").innerText = "Message in morse: " + new_text;
        Interpret_morse(new_text, time_caller);
    }, 0);
    /*var entrada:string = (<HTMLInputElement> document.getElementById("entrada1")).value;
    alert("Input: "+entrada);*/
}
function Interpret_morse(morse_text_input, time_caller) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < morse_text_input.length; i++) {
            //turn on:
            var dot_time = +document.getElementById("dot_time").value;
            var char_time = +document.getElementById("char_time").value;
            var word_time = +document.getElementById("word_time").value;
            var score_time = +document.getElementById("score_time").value;
            var curr_text = morse_text_input.charAt(i);
            var on_time = 0;
            var rest_time = 500;
            //prepare to turn off  //1tb ontime del punto. 
            // 1tb ontime del guion. 
            //tb el rest_time entre caracteres
            //tb rest_time entre palabras. 
            if (curr_text.length == 1) {
                if (curr_text == '.')
                    on_time = dot_time;
                rest_time = char_time;
                if (curr_text == '-')
                    on_time = score_time;
                rest_time = char_time;
                if (curr_text == '/')
                    rest_time = word_time;
                let bulb_promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        document.getElementById("Morse_bulb").className = "center lighted-bulb";
                    }, 0);
                    setTimeout(() => {
                        console.log("my current text is " + curr_text);
                        //turn off
                        document.getElementById("Morse_bulb").className = "center dark-bulb";
                        resolve("I have now turned off");
                    }, on_time);
                });
                let waiting_time = yield bulb_promise;
                let stopper_time = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("I am now ready to turn on again! (time between characters of morse code)");
                    }, rest_time);
                });
                waiting_time = yield stopper_time;
                console.log("finished one iteration");
            }
        }
    });
}
