const rocks = who => {
  console.log(who)
};

setTimeout(rocks, 4 * 1000, 'Hello after 4 seconds');

setTimeout(rocks, 8 * 1000, 'Hello after 8 seconds');
