
//setTimeout(()=>console.log("Primero"), 1000);
//setTimeout(()=>console.log("Segundo"), 500);
//console.log("Tercero");

function callback(){
    console.log("Primer callback");
    setTimeout(callback2, 1000)
}

function callback2(){
    console.log("Segundo callback");
}

setTimeout(callback, 1000);

async function funcionAsincrona(){
    let promesa = new Promise<string>((resolve, reject)=>{
        setTimeout(()=>{
            console.log("primera ejecucion en la promesa");
            resolve("resolviendo promesa");
            if("error"){
                reject("error");
            }
        }, 1000);
    });
    let resultado = await promesa;
    console.log("resultado: "+resultado);
}
funcionAsincrona();


//Funcion para el html, se ejecuta al hacer click en el botón
function ejecucion(){
    
    var entrada:number = +(<HTMLInputElement> document.getElementById("entrada1")).value;
    setTimeout(()=>{
            document.getElementById("titulo1").style.color="blue";
            document.getElementById("titulo1").innerText="Ya termino la clase";
            document.getElementById("titulo1").style.fontSize="50px";
            document.getElementById("titulo1").className="claseNuevaCSS";
        },entrada);

    /*var entrada:string = (<HTMLInputElement> document.getElementById("entrada1")).value;
    alert("Input: "+entrada);*/
}