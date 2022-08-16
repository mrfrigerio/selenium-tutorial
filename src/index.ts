import { Builder, Browser, By, Key } from "selenium-webdriver";
import assert from "assert";

async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    //launch the browser

    //navigate to our application
    const url = "https://lambdatest.github.io/sample-todo-app";
    await driver.get(url);

    //add a todo
    const message = "Ragnelli test example";
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys(message, Key.RETURN);

    //assert
    const todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText();

    assert.strictEqual(todoText, message, "Falha na criação da tarefa");

    console.log(todoText);
    //close the browser
  } catch (err) {
    console.log(err);
  } finally {
    await driver.quit();
  }
}

example();
