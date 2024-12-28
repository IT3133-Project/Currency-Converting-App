# Currency Converter App

A simple React Native app for currency conversion between Sri Lankan Rupees (Rs) and US Dollars (USD).

## Features

- Convert currency from Sri Lankan Rupees (Rs) to US Dollars (USD) and vice versa.
- Switch between the conversion directions (Rs to USD and USD to Rs).
- Input validation to ensure only numeric values are entered.
- Displays the result in a clear, user-friendly format.

## Technologies Used

- React Native
- React Native Paper (for UI components)
- Expo (for development environment)

## Installation

To run this app, make sure you have the following installed:

- Node.js
- Expo CLI

Follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project folder:

    ```bash
    cd currency-converter
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    expo start
    ```

5. Scan the QR code with the Expo Go app on your mobile device to run the app, or use an Android/iOS simulator.

## Usage

1. Enter the amount you want to convert in the input field.
2. Tap on the "Convert" button to see the conversion result.
3. Toggle the conversion direction between "Rs to USD" and "USD to Rs" using the "Switch to..." button.
4. The result will be displayed below the button, showing the converted amount.

## Example

- Enter "1000" in the input field.
- Tap on the "Convert" button.
- The result shows: `1000 Rs = 5 USD` (for Rs to USD conversion).

## Components

- **App**: The main entry point of the app that handles layout, UI components, and navigation.
- **Convertor**: A child component responsible for handling currency conversion logic and UI.
  
## Code Structure

- `App.js`: Main component that wraps the app in necessary providers like `PaperProvider`, `SafeAreaProvider`, and handles layout with a keyboard-aware scroll view.
- `Convertor.js`: Component that handles the input, conversion logic, and displaying results. It uses `useState` for state management of amount, converted amount, and conversion direction.

## Screenshot
![alt text](./output/RS%20to%20USD.jpg).
![alt text](./output/USD%20to%20RS.jpg).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Made by: IT3133 Practical Sessions
