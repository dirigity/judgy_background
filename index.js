
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppetter = require("puppeteer");
const fs = require("fs");
import { setWallpaper } from 'wallpaper';

const { username, password } = JSON.parse(fs.readFileSync("secrets.json"));

const URL = "http://ed.fdi.ucm.es/domjudge/team";
const frequency = 60 // each 10s;

const take_pic = async () => {
    const browser = await puppetter.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(URL);

    const res = 1;
    page.setViewport({
        width: 1600 * res,
        height: 900 * res,

    })
    await page.waitForSelector("#username")
    await page.waitForSelector("#inputPassword")
    await page.waitForSelector(".btn.btn-lg.btn-primary.btn-block")

    //console.log("login loaded")

    await page.type("#username", username);
    await page.type("#inputPassword", password);
    await page.click(".btn.btn-lg.btn-primary.btn-block")

    //console.log("loged in")


    const linkHandlers = await page.$x("//a[contains(text(), 'Scoreboard')]");

    if (linkHandlers.length > 0) {
        await linkHandlers[0].click();
    } else {
        throw new Error("Link not found");
    }

    //console.log("browsing to score board")


    await page.waitForTimeout(1000)


    await page.screenshot({ path: "screenshot.png" });
    await browser.close();


}

const loop = async () => {
    try {
        await take_pic();
        console.log("posting wallpaper")
        await setWallpaper('screenshot.png');
    } catch (e) { }
}

loop();
setInterval(loop, frequency * 1000)
