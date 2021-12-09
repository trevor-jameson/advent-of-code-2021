const fs = require('fs');

function dive() {
    fs.readFile('./day2_input.txt', 'utf8', function(err, data){
        if (err) console.log('You failed at Christmas :(')
        const instructions = data.split('\n')
        let horizontal = 0;
        let depth = 0;
        instructions.forEach(inst => {
            let [direction, units] = inst.split(' ');
            units = Number(units)
            if (direction === 'forward') horizontal += units;
            if (direction === 'down') depth += units;
            if (direction === 'up') depth -= units;
        })
        const position = depth * horizontal;
        console.log(position);
    })
}

dive()

function diveStraight() {
    fs.readFile('./day2_input.txt', 'utf8', function(err, data){
        if (err) console.log('You failed at Christmas :(')
        const instructions = data.split('\n')
        let horizontal = 0;
        let depth = 0;
        let aim = 0;
        instructions.forEach(inst => {
            let [direction, units] = inst.split(' ');
            units = Number(units)
            if (direction === 'forward') {
                horizontal += units;
                depth += (aim * units);
            } else if (direction === 'down') {
                aim += units;
            } else if (direction === 'up') {
                aim -= units;
            };
        })
        const position = depth * horizontal;
        console.log(position);
    })
}

diveStraight()