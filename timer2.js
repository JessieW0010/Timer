const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const times = process.argv.slice(2);

const beep = function(time) {
  setTimeout(() => {
    process.stdout.write('\007');
    console.log(time);
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
    process.exit();
  }
})