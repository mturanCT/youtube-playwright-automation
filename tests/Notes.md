
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

domcontentloaded = waits until the page is loaded. However it doesnt wait for the images, subframes, style
load = waits until the page is loaded. It waits for the images, subframes, styles to load as well.
networkIdle= it waits until api calls loaded on the page as well. 

Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,
ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,
ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.

Following modification shortcuts are also supported: Shift, Control, Alt.

```html
< select multiple id='selectoptions' >
    <option value='red'> Red </option>
    <option value='blue'> Blue </option>
<select>
```
We can click the button in keyboard using the press methods which comes from the locator. 

### How to select value from the Dropdown? 

    we can use selectOption() method to select the values from the drop down. 

    1- selectOption("optionName") --> it will check values or labels for the <option> then select the matching value
    2- selectOption({label:'labelname'})
       selectOption({value:'value'})
       selectOption({index: 2})
    3- selectOption(["red","blue"])


    const selectElement=await page.locator("#selectoptions"); 

    // element.locator("options"); 
    let optionList=selectElement.locator("options");

### How to handle the Alert using Playwright? 

By default all the alerts in playwright is dismissed. If you want to perform other actions like accept(), dismiss(), message()

Before clicking the buttons which will trigger the alert, we need to define our actions. 

page.on('dialog', dialog => dialog.accept())
page.on('dialog', dialog => dialog.accept("message into the box"))
-->it will listen the following code which will trigger the alert. 
page.on('dialog', dialog => dialog.dismiss())
page.on('dialog', dialog => dialog.message())
page.locator("//button").click(); --> opens the alert

### How to switch windows using Playwright? 

context() --> it will give us the context which has a pages. 

waitForEvent('page) --> it will wait for new page to opened. 

PROMISES

pending
rejected
fullfilled


let numbers=[1,2,3]; 

let [num1, num2, num3]=numbers; 

log(num1)
log(num2)

### WINDOW HANDLE

const pagePromises=page.context().waitForEvent('page'); 

await page.locator("//xpath").click(); 

const newPage=await pagePromises;

await page.waitforLoadState("domcontentload"); 


----------

```javascript 
const pagePromises= Promise.all([
    page.context().waitForEvent('page'), pending, fullfilled
    page.locator("//xpath").click(), pending, fullfilled
])
const newPage=pagePromises; 
```

There are 3 status for the promises: pending, fullfilled, rejected

### IFRAME

```javascript 
async({page})=>{

    const iframe=page.frameLocator("//xpath"); 
    iframe.locator("//xapth").fill(); 

    //inner frame
    const innerFrame=iframe.frameLocator("#css"); 
    innerFrame.locator("//xapth").click();

    page.locator(); 
}
```












