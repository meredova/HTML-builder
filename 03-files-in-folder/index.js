const fs = require("fs");
const path = require("path");
const { stdout } = process;

const secretFolderPath = path.join(__dirname, '/secret-folder');

fs.readdir(secretFolderPath, (err, files) => {
  files.forEach((file) => {
    const filePath = path.join(secretFolderPath, file);

    fs.stat(filePath, (err, status) => {
      if (status.isFile()) {
        stdout.write(`${path.parse(file).name} - ${path.extname(file).slice(1)} - ${status.size} bytes\n`);
      } 
    });
  });
});