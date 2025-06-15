<script>
        // Arithmetic Functions
        function add(number1, number2) {
            return number1 + number2;
        }

        function subtract(number1, number2) {
            return number1 - number2;
        }

        function multiply(number1, number2) {
            return number1 * number2;
        }

        function divide(number1, number2) {
            if (number2 === 0) {
                return "Cannot divide by zero";
            }
            return number1 / number2;
        }

        // Function to get input values with validation
        function getInputValues() {
            const number1 = parseFloat(document.getElementById('number1').value) || 0;
            const number2 = parseFloat(document.getElementById('number2').value) || 0;
            return { number1, number2 };
        }

        // Function to display result
        function displayResult(result) {
            const resultElement = document.getElementById('calculation-result');
            
            if (typeof result === 'string') {
                // Handle error messages
                resultElement.textContent = result;
                resultElement.className = 'error';
            } else {
                // Handle numeric results
                resultElement.textContent = Number.isInteger(result) ? result : result.toFixed(2);
                resultElement.className = '';
            }
        }

        // Event Listeners for each operation
        document.getElementById('add').addEventListener('click', function() {
            const { number1, number2 } = getInputValues();
            const result = add(number1, number2);
            displayResult(result);
        });

        document.getElementById('subtract').addEventListener('click', function() {
            const { number1, number2 } = getInputValues();
            const result = subtract(number1, number2);
            displayResult(result);
        });

        document.getElementById('multiply').addEventListener('click', function() {
            const { number1, number2 } = getInputValues();
            const result = multiply(number1, number2);
            displayResult(result);
        });

        document.getElementById('divide').addEventListener('click', function() {
            const { number1, number2 } = getInputValues();
            const result = divide(number1, number2);
            displayResult(result);
        });

        // Optional: Add keyboard support
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case '+':
                    document.getElementById('add').click();
                    break;
                case '-':
                    document.getElementById('subtract').click();
                    break;
                case '*':
                    document.getElementById('multiply').click();
                    break;
                case '/':
                    event.preventDefault(); // Prevent default browser search
                    document.getElementById('divide').click();
                    break;
                case 'Enter':
                    // Default to addition on Enter
                    document.getElementById('add').click();
                    break;
            }
        });

        // Auto-focus on first input when page loads
        window.addEventListener('load', function() {
            document.getElementById('number1').focus();
        });
    </script>