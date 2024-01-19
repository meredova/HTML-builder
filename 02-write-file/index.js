const fs = require('fs');
const { stdin, stdout } = process;

const fileStream = fs.createWriteStream('02-write-file/text.txt');

stdout.write("Welcome! Enter your text and press Ctrl+C or enter 'exit' to terminate the process.\n");

stdin.on("data", (data) => {
  const userInput = data.toString().trim();

  if (userInput.toLowerCase() === 'exit') {
    stdout.write("Good bye!\n");
    fileStream.end();
    process.exit();
  } else {
    fileStream.write(`${userInput}\n`);
  }
});

process.on("SIGINT", () => {
  stdout.write("Good bye!\n");
  fileStream.end();
  process.exit();
});