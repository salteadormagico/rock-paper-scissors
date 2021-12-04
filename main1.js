document.addEventListener('DOMContentLoaded', function () {
    console.log("LA SALCHIPAPA ESTA FUNCIONANDO");
    const piedra = document.getElementById('piedra');
    const papel = document.getElementById('papel');
    const tijera = document.getElementById('tijera');
    const ganador = document.getElementById('ganador');
    const machineOptionimg = document.getElementById('machineimg');
    var user;

    botones = [document.getElementById('piedra'), 
    document.getElementById('papel'), 
    document.getElementById('tijera')];

    botones.forEach(e => e.addEventListener('click', function(e) {
        botones.forEach(j => function (j) {
            if (j.target.style.backgroundColor !== 'white') {
                j.target.style.backgroundColor = 'white';
            }
        });
        console.log(e.target);
        let btn = e.target;
        let id = btn.id;
        user = id;
        btn.style.backgroundColor = 'red';
    }));

    function setButton (e) {

    }
    piedra.addEventListener('click', function () {
        //console.log(user);
        piedra.style.backgroundColor = 'red';
        set('piedra');
    });
    papel.addEventListener('click', function () {
        user = 'papel';
        //console.log(user);

    });
    tijera.addEventListener('click', function () {
        user = 'tijera';
        //console.log(user);

    });
    set(user);
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
        if (userOption == machineOption) {
            setWinner('empate');
            setMachineOptionImg2(machineOption);
        }
        if (userOption === 'papel' && machineOption === 'piedra') {
            setWinner('jugador');
            search();
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'piedra' && machineOption === 'papel') {
            setWinner('machine');
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'piedra' && machineOption === 'tijera') {
            setWinner('jugador');
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'piedra' && machineOption === 'papel') {
            setWinner('machine');
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'papel' && machineOption === 'piedra') {
            setWinner('jugador');
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'papel' && machineOption === 'tijera') {
            setWinner('machine');
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'tijera' && machineOption === 'papel') {
            setWinner('jugador');
            setMachineOptionImg2(machineOption);
        } else if (userOption === 'tijera' && machineOption === 'piedra') {
            setWinner('machine');
            setMachineOptionImg2(machineOption);
        }
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
    
    function setMachineOptionImg2(machineoption) {
        if (machineOptionimg !== '') {
            console.log("LA SALCHIPAPA ESTÁ FUNCIONANDO");
        machineOptionimg.src = machineoption + '.jpg';
        } else {
            console.error("ha ocurrido un error");
        }
    }

    function setWinner (winner) {
        if (winner === 'empate') {
            ganador.innerHTML = 'empate';
        } else if (winner === 'machine') {
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
    //function getPoints(ganador) {}
});