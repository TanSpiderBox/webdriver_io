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
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_rto, '');
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
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_course, '');
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
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_unit, '');
})

/* TestCase005 */
When("User select unit and start Mapping", () => {
    // $(MapObject.btn_Scourse).click();
    // $(MapObject.btn_Sunit).click();
    $(MapObject.btn_Snewmap).click();

    $(MapObject.btn_newassetmenttaks).click();
    $(MapObject.btn_newassetmenttaks).click();
    $(MapObject.btn_newassetmenttaks).click();

    $(MapObject.txt_assetment1).click();
    $(MapObject.txt_assetment1).setValue(MapData.assetment1);

    $(MapObject.txt_assetment2).click();
    $(MapObject.txt_assetment2).setValue(MapData.assetment2);

    $(MapObject.txt_assetment3).click();
    $(MapObject.txt_assetment3).setValue(MapData.assetment3);

    $(MapObject.txt_references1).click();

    $(MapObject.txt_references2).doubleClick();
    $(MapObject.txt_references2).setValue(MapData.references2);

    $(MapObject.txt_references3).doubleClick();
    $(MapObject.txt_references3).setValue(MapData.references3);
    $(MapObject.txt_references3).click();
    $(MapObject.btn_markcomplted3).click();

    $(MapObject.btn_mapsave).click();
    $(MapObject.txt_mapname).setValue(MapData.mapname);
    $(MapObject.txt_mapnote).setValue(MapData.mapnote);
    $(MapObject.drop_rtoassign).click();
    $(MapObject.value_rto).click();
    $(MapObject.txt_mapnote).click();
    browser.pause(5000)
    $(MapObject.btn_savsubmit).click();    
    
    browser.pause(5000)
    $(MapObject.btn_back).click();
    // $(MapObject.btn_back).click();
})
Then("User can create new Mapping", () => {
    assert.equal($(MapVerify.lbl_mapname).getText(), MapData.map_unit, '');

    assert.equal($(MapVerify.lbl_unitrelease).getText(), MapData.map_unit, '');

    assert.equal($(MapVerify.lbl_mapversion).getText(), MapData.map_unit, '');

    assert.equal($(MapVerify.lbl_maprto).getText(), MapData.map_unit, '');

    assert.equal($(MapVerify.lbl_mapnote).getText(), MapData.map_unit, '');

    assert.equal($(MapVerify.lbl_mapupdate).getText(), MapData.map_unit, '');

    $(MapObject.btn_mapdropdown).click();
    $(MapObject.btn_maprm).click();

}) 
