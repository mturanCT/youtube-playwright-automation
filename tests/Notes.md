
# PLAYWRIGHT

## 3/17/2024

```javascript
const {test, expect} = require("@playwright/test");

// Page Fixtures: they are predefined variables, which we can use in our framework.
test.only("My First Playwright automation", async function({page}) {

    await page.goto("https://www.google.com/");

    let title = await page.title();
    console.log(title);

    await expect(page).toHaveTitle("Google");

});
```

### Arrow Functions

```javascript
test.only("My First Playwright automation", async ({page}) => {

});
```

**NOTE:**
We need to provide async and await in the function to make the code synchronized.

### TIMEOUTS

- Default TimeOut: if one of the page functions fails, it waits 30 sec to fail the test.

- Assertion - Expect default timeout: If the expect assertion fails, it tries 5 sec by default before failing the test.

### SELENIUM

```java
String actual = driver.getTitle();

Assert.assertEquals(actual, expected);
```

### PLAYWRIGHT

```javascript
expect(page).toHaveTitle(expected);
```

---

## 3/19/2024

### PLAYWRIGHT

Page Fixture: we have predefined properties which we can use in our automation script.

```javascript
test("Text", ({page}) => {

});
```

### PAGE METHODS:

1. goTo(url);
2. goBack()
3. goForward();
4. close(); --> it will close the page in our code.
5. isClosed();
6. pause(); --> it will pause the execution and open the inspector.
7. reload()
8. title();
9. url();
10. waitForUrl(url);

### LOCATORS:

#### 1 PART

- page.getByRole() to locate by explicit and implicit accessibility attributes.
- page.getByText() to locate by text content.
- page.getByLabel() to locate a form controlled by the associated label's text.
- page.getByPlaceholder() to locate an input by a placeholder.
- page.getByAltText() to locate an element, usually an image, by its text alternative.
- page.getByTitle() to locate an element by its title attribute.
- page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

#### 2- PART

- page.locator()
- page.locator("xpath=value")
- page.locator("css=value")
- page.locator("value")

### LOCATOR METHODS

1. fill() , clear()

```javascript
page.locator("//div").fill("textToSend");

page.locator("//div").clear();

page.fill("//div", "textToSend");
// this is the older version of playwright. It is not recommended to use.
```

2. click()

3. check(), uncheck()

```javascript
page.locator("#checkbox-1").check();

page.locator("#checkbox-1").uncheck();

page.locator("#checkbox-1").click();
```

4. getAttribute(name);

```javascript
page.locator("h1").getAttribute("class");
```

### ----------------------List Of WebElements---------------------

```javascript
let elements = page.locator('css.xpath')
page.getByRole();
page.getByText('check')

elements.last();
elements.first();

elements.nth(indexNumber);

// all()

let arr = page.locator('css.xpath').all() // it returns an array of all matching elements.

// we will be using the array methods.
arr[indexNumber]
arr.at(indexNumber);
```

---

## 3/23/2024

### ------------- ASSERTION -------------

```javascript
await expect(locator).toContainText().
// Element contains text
await expect(locator).toHaveText() // Element matches text
await expect(page).toHaveScreenshot() // Page has a screenshot
await expect(page).toHaveTitle() // Page has a title
await expect(page).toHaveURL() // Page has a URL
```

### -------------List Of WebElements-------------

1. -------------

```javascript
const links = page.locator('//a');

links.first().click();
links.last().click();

let count = await links.count();

for(let i = 0; i < count; i++){
    links.nth(i);
}
```

2. -------------

```javascript
const links = page.locator('//a').all(); // it returns an array

for(let link of links){
    link.click();
}

fill('value'), fill(''); // it will clear the text in the textbox
```

### ---------------- Mouse Actions -------------

- Left Click

```javascript
page.locator('//button').click();
```

- Right Click

```javascript
page.locator('//button').click({button : 'right'}); // right, middle, left
```

- Double click

```javascript
page.locator('//button').dblClick();
```

### ------------ KeyBoard Buttons ----------------

