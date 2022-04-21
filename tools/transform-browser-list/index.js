const fs = require('fs');

module.exports = (pathFile) => {
  if (typeof pathFile === 'undefined' || !pathFile.length) {
    throw new Error('pathFile is required');
  }

  const fileContents = fs.readFileSync(pathFile, 'utf8');
  const arrayLine = [];
  fileContents.split('/\r?\n/').forEach((line) => {
    if (line.length >= 1) {
      arrayLine.push(line);
    }
  });

  return arrayLine;
};
