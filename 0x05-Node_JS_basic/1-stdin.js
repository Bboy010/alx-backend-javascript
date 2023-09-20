// Import the 'readline' module to read user input from the command line
const readline = require('readline');

// Create an interface for reading and writing to the command line
const rl = readline.createInterface({
  input: process.stdin, // Read input from standard input (keyboard)
  output: process.stdout, // Write output to standard output (console)
});

// Check if the program is running in interactive mode (user provides input)
if (process.stdin.isTTY) {
  // Step 1: Display a welcome message
  console.log('Welcome to Holberton School, what is your name?');

  // Step 2: Prompt the user for their name
  rl.question('', (name) => {
    // Step 3: Display the user's name
    console.log(`Your name is: ${name}`);

    // Close the interface and exit the program
    rl.close();
  });
} else {
  // Step 2: Read the user's name from standard input (piped input)
  let name = '';

  process.stdin.on('data', (chunk) => {
    name += chunk.toString();
  });

  process.stdin.on('end', () => {
    // Remove any leading/trailing whitespace and line breaks
    name = name.trim();

    // Step 3: Display the user's name
    console.log(`Your name is: ${name}`);

    // Step 4: Display a closing message
    console.log('This important software is now closing');
  });
}
