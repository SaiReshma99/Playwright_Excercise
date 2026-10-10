package tests;

import java.lang.reflect.Method;
import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.LoginPage;

public class LoginTest {
    private static final String LOGIN_URL = "https://login.salesforce.com/?locale=in";

    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeMethod
    public void setUp(Method testMethod) {
        if ("validCredentialsShouldSignIn".equals(testMethod.getName())
                && (isBlank(System.getenv("SALESFORCE_USERNAME"))
                        || isBlank(System.getenv("SALESFORCE_PASSWORD")))) {
            throw new SkipException(
                    "Set SALESFORCE_USERNAME and SALESFORCE_PASSWORD to run the valid login test.");
        }

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-dev-shm-usage");
        if (Boolean.parseBoolean(System.getProperty("browser.headless", "true"))) {
            options.addArguments("--headless=new");
        } else {
            options.addArguments("--start-maximized");
        }

        driver = new ChromeDriver(options);
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(45));
        driver.get(LOGIN_URL);
        loginPage = new LoginPage(driver);
    }

    @Test
    public void validCredentialsShouldSignIn() {
        loginPage.login(System.getenv("SALESFORCE_USERNAME"), System.getenv("SALESFORCE_PASSWORD"));
        Assert.assertTrue(loginPage.hasLeftLoginPage(),
                "Expected valid credentials to navigate away from the Salesforce login page.");
    }

    @Test
    public void invalidCredentialsShouldShowError() {
        loginPage.login("invalid.user@example.invalid", "invalid-password");
        Assert.assertFalse(loginPage.getErrorMessage().isEmpty(),
                "Expected Salesforce to display an error for invalid credentials.");
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }
}
