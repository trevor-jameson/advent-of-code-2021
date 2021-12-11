const fs = require('fs');
const args = process.argv

function diagnosis() {
    const filePath = (args.pop() === 'test') ? './day3_test_input.txt' : './day3_input.txt';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) console.log('It borken!');
        const bytes = data.split('\n');
        const oneCount = Array(bytes[0].length).fill(0);
        bytes.forEach(line => {
            line.split('').forEach((bit, ind) => {
                if (bit === '1') oneCount[ind] += 1;
            });
        })
        let gammeByte = '';
        let epsilonByte = '';
        oneCount.forEach(ones => {
            if (ones > bytes.length / 2) {
                gammeByte += '1';
                epsilonByte += '0';
            } else {
                gammeByte += '0';
                epsilonByte += '1';
            }
        })
        const gammaRate = parseInt(gammeByte, 2)
        const epsilonRate = parseInt(epsilonByte, 2)
        console.log(gammaRate * epsilonRate)
    })
}

diagnosis()
