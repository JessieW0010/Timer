const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const times = process.argv.slice(2); 

const beep = function(time) {
  console.log(`Setting timer for ${time} seconds`);
  setTimeout(() => {
    process.stdout.write('\007');
  }, time)
}

//if there are command line arguments this will run 
for (let time of times) {
  beep(time * 1000);
}

//if b or ctrl+c is pressed
stdin.on("data", (key) => {
  if (key === "\u0062") {
    process.stdout.write('\x07');
  } else if (key === "\u0003") {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
})