
// a) launchBrowser function with if-else
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser...");
    } else if (browserName === "firefox") {
        console.log("Launching Firefox browser...");
    } else if (browserName === "safari") {
        console.log("Launching Safari browser...");
    } else {
        console.log("Launching " + browserName + " browser...");
        // or default to chrome
        // console.log("Unknown browser, launching Chrome as default...");
    }
}

// b) runTests function with switch
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke tests...");
            break;
        case "sanity":
            console.log("Running Sanity tests...");
            break;
        case "regression":
            console.log("Running Regression tests...");
            break;
        default:
            console.log("Unknown test type, Running Smoke tests as default...");
            break;
    }
}

// Call the functions
launchBrowser("chrome");
launchBrowser("firefox");
launchBrowser("edge");

console.log("---");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("performance"); // will go to default (smoke)

