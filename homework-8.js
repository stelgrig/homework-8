let bd = document.querySelector('#bd');
let bdButton = document.querySelector('#bdButton');
let sd = document.querySelector('#sd');
let sdButton = document.querySelector('#sdButton');
let rim = document.querySelector('#rim');
let rimButton = document.querySelector('#rimButton');
let hho = document.querySelector('#hho');
let hhoButton = document.querySelector('#hhoButton');
let hhc = document.querySelector('#hhc');
let hhcButton = document.querySelector('#hhcButton');
let tomh = document.querySelector('#tomh');
let tomhButton = document.querySelector('#tomhButton');
let tomm = document.querySelector('#tomm');
let tommButton = document.querySelector('#tommButton');
let toml = document.querySelector('#toml');
let tomlButton = document.querySelector('#tomlButton');
let ride = document.querySelector('#ride');
let rideButton = document.querySelector('#rideButton');
let crash = document.querySelector('#crash');
let crashButton = document.querySelector('#crashButton');





bdButton.addEventListener('click', function () {
    bd.play()
})
sdButton.addEventListener('click', function () {
    sd.play()
})
rimButton.addEventListener('click', function () {
    rim.play()
})
hhoButton.addEventListener('click', function () {
    hho.play()
})
hhcButton.addEventListener('click', function () {
    hhc.play()
})
tomhButton.addEventListener('click', function () {
    tomh.play()
})
tommButton.addEventListener('click', function () {
    tomm.play()
})
tomlButton.addEventListener('click', function () {
    toml.play()
})
rideButton.addEventListener('click', function () {
    ride.play()
})
crashButton.addEventListener('click', function () {
    crash.play()
})

addEventListener('keydown', function(event){
    if(event.key == '1'){
        bd.play()
    }
    else if(event.key == '2'){
        sd.play()
    }
    else if(event.key == '3'){
        rim.play()
    }
    else if(event.key == '4'){
        hho.play()
    }
    else if(event.key == '5'){
       hhc.play()
    }
    else if(event.key == '6'){
        tomh.play()
    }
    else if(event.key == '7'){
        tomm.play()
    }
    else if(event.key == '8'){
        toml.play()
    }
    else if(event.key == '9'){
        ride.play()
    }
    else if(event.key == '0'){
        crash.play()
    }

}) 