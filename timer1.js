let times = process.argv.slice(2);

const beep = function(time) {
  setTimeout(() => {
    process.stdout.write('\007');
    console.log(time);
  }, time)
}

for (let time of times) {
  beep(time * 1000);
}