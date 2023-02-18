import { Builder, Capabilities, By, Button, until } from "selenium-webdriver";
var chrome = require("selenium-webdriver/chrome");
var options = new chrome.Options();
options.setChromeBinaryPath(
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
);

require("chromedriver");

const driver = new Builder().forBrowser("chrome").build();

beforeEach(async () => {
  driver.get("http://localhost:4000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Clicking draw button displays the choices div", async () => {
  const draw = await driver.findElement(By.id("draw"));
  draw.click();
  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test("clicking add to duo displays player duo div", async () => {
  const draw = await driver.findElement(By.id("draw"));
  await draw.click();
  const cards = await driver.findElements(By.className("bot-btn"));
  const button = await driver.wait(until.elementIsVisible(cards[0]));

  await button.click();

  const playerDuo = await driver.wait(
    until.elementIsVisible(await driver.findElement(By.id("player-duo"))),
    3000
  );
  const displayed = await playerDuo.isDisplayed();
  expect(displayed).toBe(true);
});
