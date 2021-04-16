const { exec } = require('child_process');
const c = require('chinpunkanpun');
const fs = require('fs');

const sentences = [];

setInterval(() => {
  const content = `
**Git Hub Cheater** \n

Quantity over quality! This is a little script I wrote to cheat at the "Who Can Get The Most Green Squares On GitHub Game". 😈

All in good fun! 🌈⛄️😇

The text below this sentence 👇 is randomly generated and committed to GitHub every 5 seconds while the script is running.

  ${sentences.join(' ')}
`;
  sentences.push(c.sentence());
  fs.truncate('Readme.md', () => {});
  fs.writeFile('Readme.md', `${content}\n`, function (err) {
    if (err) return console.log(err);
    console.log(content);
  });

  exec(
    `git add . && git commit -m "${c.getWord(c.singularNoun)}" && git push origin master`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
}, 5000);
