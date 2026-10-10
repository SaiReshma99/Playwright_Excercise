public class LoginTest {
    WebDriver driver;
    LoginPage loginPage;

    @BeforeTest
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://login.salesforce.com/?locale=in");
        loginPage = new LoginPage(driver);
    }

    @Test(priority = 1)
    public void validLoginTest() {
        loginPage.doLogin("validEmail@example.com", "validPassword");
        // Add assertions to verify successful login
    }

    @Test(priority = 2)
    public void invalidLoginTest() {
        loginPage.doLogin("invalidEmail@example.com", "invalidPassword");
        // Add assertions to verify error message is displayed
    }

    @AfterTest
    public void tearDown() {
        driver.quit();
    }
}