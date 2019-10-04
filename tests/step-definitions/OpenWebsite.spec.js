import { Given } from "cucumber";
import { LoginData } from "../data/Data_Login";

/* Open Website MMAP */
Given("User Open website MMAP", () => {
  browser.url(LoginData.url);
});