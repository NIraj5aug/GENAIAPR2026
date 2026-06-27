export function add(a, b) {
  return a + b;
}

if (process.argv[1]?.endsWith('index.js')) {
  console.log('add(2, 3) =', add(2, 3));
}
