# Selenium Framework

## Project Overview
This project is an automation framework built using Selenium WebDriver, Java, Maven, and TestNG. It is designed to automate the login functionality of the Salesforce login page, following the Page Object Model (POM) design pattern.

## Project Structure
```
selenium-framework
├── src
│   ├── main
│   │   └── java
│   │       └── pages
│   │           └── LoginPage.java
│   └── test
│       └── java
│           └── tests
│               └── LoginTest.java
├── pom.xml
├── testng.xml
└── README.md
```

## Setup Instructions
1. **Clone the Repository**: 
   Clone the repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Maven Installation**: 
   Ensure that Maven is installed on your machine. You can download it from [Maven's official website](https://maven.apache.org/download.cgi).

3. **Project Dependencies**: 
   Navigate to the project directory and run the following command to install the required dependencies:
   ```
   mvn clean install
   ```

4. **IDE Setup**: 
   Open the project in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).

## Running Tests
To execute the tests, you can use the following command:
```
mvn test
```
Alternatively, you can run the tests directly from your IDE using the TestNG runner.

## TestNG Configuration
The `testng.xml` file defines the test suite and specifies the test classes to be executed. You can modify this file to include additional test classes or parameters as needed.

## Contribution
Feel free to contribute to this project by submitting issues or pull requests. For any questions or suggestions, please contact the project maintainer.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.