import { Given } from "cypress-cucumber-preprocessor/steps";
import {
  url,
} from "../dataset/datalogin.js";
//Register
Given("User Open website MMAP", () => {
  cy.visit(url);
});

