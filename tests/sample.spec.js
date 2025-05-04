const {test , expect} = require ('@playwright/test')

test("My First Test", async function ({page}) {
    expect(10).toBe(10);
})

test.skip("My Second Test", async function ({page}) {
    expect(101).toBe(100);
})

test("My Third Test", async function ({page}) {
    expect(3.0).toBe(3.0);
})

test("My Fourth Test", async function ({page}) {
    expect("Reza Dodangeh").toContain("Reza");
    expect(true).toBeTruthy();
})

test("My Fifth Test", async function ({page}) {
     expect(false).toBeFalsy();
})

test("My Sixth Test", async function ({page}) {
    expect("Reza Dodangeh".includes("Dodangeh")).toBeTruthy();
})