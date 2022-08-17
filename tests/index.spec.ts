import { Builder, Browser, By, Key } from "selenium-webdriver";
import { should } from "chai";

describe("Add todo tests", async function () {
  it("Should successfully add a new todo to the list", async function () {
    const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    should();
    //launch the browser and navigate to our application
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

    //assert using node assertion
    // assert.strictEqual(todoText, message, "Falha na criação da tarefa");

    //assert using chai should. the advantage is code semantics and readability
    todoText.should.equal(message, "Falha na criação da tarefa");

    //close the browser
    await driver.quit();
  });
});
