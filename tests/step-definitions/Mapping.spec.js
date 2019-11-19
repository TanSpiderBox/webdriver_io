import { When, Then } from "cucumber";
import { assert } from 'chai'
import { MapData } from "../data/Data_Mapping";
import { MapObject, MapVerify } from "../page-object/Mapping.po"

/* TestCase002 */
When("User input RTO and click button sync", () => {
    $(MapObject.btn_strmap).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.rto);
    $(MapObject.txt_resultRTO).click();
    $(MapObject.btn_search).click();
})
Then("User can sync new RTO", () => {
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_rto,'');
})

/* TestCase003 */
When("User input Course and click button sync", () => {
    $(MapObject.btn_nwsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.course);
    $(MapObject.txt_resultCourse).click();
    $(MapObject.btn_search).click();
})
Then("User can sync new Course", () => {
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_course,'');
})

/* TestCase004 */
When("User input Unit and click button sync", () => {
    $(MapObject.btn_nwsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
})
Then("User can sync new Unit", () => {
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_unit,'');
})

