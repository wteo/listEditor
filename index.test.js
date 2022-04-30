import List from "./index.js";
import chalk from "chalk";

const shopping = new List(["bread", "milk", "eggs"]);

const test = (description, func) => {
    console.log("-------", description);
    try {
        func();
        console.log(chalk.green("OK - ", "Passed test."));
    } catch (err) {
        console.log(chalk.red("ERR - ", err.message));
    }
}

test("Test 1: AddFirst Function", () => {
    shopping.addFirst("rice");
    if (shopping.listedItems[0] !== "rice") {
        throw new Error("Expected Item Rice");
    }
});

test("Test 2: RemoveFirst Function", () => {
    shopping.removeFirst();
    if (shopping.listedItems.length !== 3) {
        throw new Error("There should be 3 items in the shopping list");
    }
});

test("Test 3: AddLast Function", () => {
    shopping.addLast("flour");
    if (shopping.listedItems[shopping.numOfItems - 1] !== "flour") {
        throw new Error("Expected item flour.");
    }
});

test("Test 4: RemoveLast Function", () => {
    shopping.removeLast();
    if (shopping.listedItems.length !== 3) {
        throw new Error("There should be 3 items in the shopping list");
    }
});

test ("Test 5: Reverse Function", () => {
    shopping.reverseList();
    if (shopping.listedItems[0] !== "eggs") {
        throw new Error("First item in the list should be eggs.")
    }
});

test ("Test 6: Find Function", () => {
    const result = shopping.find("eggs");
    if (result !== "eggs") {
        throw new Error("Expected item eggs");
    }
});

test ("Test 7: Reset Function", () => {
    shopping.reset();
    if (shopping.listedItems[0] !== undefined) {
        throw new Error("List should be empty");
    }
});