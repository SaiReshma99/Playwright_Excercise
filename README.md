# Selenium Framework

## Project Overview
This project is an automation framework built using Selenium WebDriver, Java, Maven, and TestNG. It is designed to automate the login functionality of the Salesforce login page, following the Page Object Model (POM) design pattern.

## Project Structure
```
selenium-framework
├── .gitignore
├── pom.xml
├── README.md
├── testng.xml
├── src
│   ├── main/java/pages/LoginPage.java
│   └── test/java/tests/LoginTest.java
```

### File and Folder Details
- `.gitignore` excludes generated Maven build output in `target/`.
- `pom.xml` defines the Java 11 build, Selenium and TestNG dependencies, and Maven test configuration.
- `testng.xml` selects the `tests.LoginTest` class for the TestNG suite.
- `src/main/java/pages/LoginPage.java` implements the Salesforce login page using the Page Object Model.
- `src/test/java/tests/LoginTest.java` contains the valid- and invalid-credentials browser tests and Chrome setup/cleanup.
- `README.md` documents the project, prerequisites, and commands.

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