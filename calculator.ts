// Function to perform basic calculations

function calculate(operator: string, num1: number, num2: number): number | string {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Cannot divide by zero';
        }
        return num1 / num2;
      default:
        return 'Invalid operator';
    }
  }
  
  // Process command-line arguments

  if (process.argv.length !== 5) {
    console.log('Usage: node calculator.ts <num1> <operator> <num2>');
  } else {
    const num1 = parseFloat(process.argv[2]);
    const operator = process.argv[3];
    const num2 = parseFloat(process.argv[4]);
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Invalid input. Please provide valid numbers.');
    } else {
      const result = calculate(operator, num1, num2);
      console.log(`Result: ${result}`);
    }
  }
  
  // Here's the general format for running calculations:
  // node calculator.js <number1> <operator> <number2>
  // Replace <number1>, <operator>, and <number2> with your actual values. For example:
  // node calculator.js 5 + 3 //  Result: 8


