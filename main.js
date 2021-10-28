document.addEventListener('DOMContentLoaded', function () {
    console.log("LA SALCHIPAPA ESTA FUNCIONANDO");
    const piedra = document.getElementById('piedra');
    const papel = document.getElementById('papel');
    const tijera = document.getElementById('tijera');
    const ganador = document.getElementById('ganador');
    const machineOptionimg = document.getElementById('machineimg');
    var user;

    piedra.addEventListener('click', function () {
        user = 'piedra';
        //console.log(user);
        set('piedra');

    });
    papel.addEventListener('click', function () {
        user = 'papel';
        //console.log(user);
        set('papel');

    });
    tijera.addEventListener('click', function () {
        user = 'tijera';
        //console.log(user);
        set('tijera');

    });
    function set(userOption) {
        if (userOption != '') {
            const opc = ['piedra', 'papel', 'tijera'];
            let machineOption = opc[ Math.floor(Math.random() * 3)];
            console.log("user: "+userOption);
            console.log("machine: "+machineOption);
            play(userOption, machineOption);
            //play(userOption, machineOption);
        }
        //play(userOption, machineOption);
    }
    function play(userOption, machineOption) {
        if (userOption === 'papel' && machineOption === 'piedra') {
            setWinner('jugador');
            search();
            setMachineOptionImg('piedra');
        } else if (userOption === 'piedra' && machineOption === 'papel') {
            setWinner('machine');
            setMachineOptionImg('papel');
        } else if (userOption === 'piedra' && machineOption === 'tijera') {
            setWinner('jugador');
            setMachineOptionImg('tijera');
        } else if (userOption === 'piedra' && machineOption === 'papel') {

        } else if (userOption === '' && machineOption === '') {}
    }

    function setMachineOptionImg(machineOption) {        
        if (machineOption === 'piedra') {
            machineOptionimg.src = "piedra.jpg";
        } else if (machineOption === 'papel') {
            machineOptionimg.src = "papel.jpg";
        } else if (machineOption === 'tijera') {
            machineOptionimg.src = "tijera.jpg";
        } else {
            console.error("ha ocurrido un error, vuelve a intentarlo");
        }
    }
    function setWinner (winner) {
        if (winner === 'machine') {
            ganador.innerHTML = "gana la maquina";
        } else if (winner === 'jugador') {
            ganador.innerHTML = "tu ganas";
        }
    }
    function search () {
        let opc = ['piedra', 'papel', 'tijera'];
        for (i = 0; i < opc.length; i++) {
            machineOptionimg.src = i+'.jpg';
        }
    }
});