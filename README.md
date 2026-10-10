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

## Requirements
- Java 11 or newer
- Maven 3.6 or newer
- Google Chrome

Selenium Manager downloads and configures the matching ChromeDriver on the first test run.

## Run Tests

Run the invalid-credentials test with:

```text
mvn test
```

The valid-credentials test is skipped unless `SALESFORCE_USERNAME` and `SALESFORCE_PASSWORD` are set in the environment. Never commit real account credentials.

To run Chrome with a visible window, set the `browser.headless` system property to `false`:

```text
mvn test -Dbrowser.headless=false
```

The TestNG suite is configured in `testng.xml`.