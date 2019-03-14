const pumbavu = () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
};

process.stdin.on('readable', pumbavu
);

