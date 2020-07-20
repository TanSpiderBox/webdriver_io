import { When, Then } from "cucumber";
import { assert } from 'chai'
import { MapData, MapSuccess, MapWarning } from "../data/Data_Mapping";
import { MapObject, MapVerify } from "../page-object/Mapping.po"

/* MP001 */
When("User input RTO and click button sync", () => {
    $(MapObject.btn_NewSyncs).click();
    $(MapObject.txt_Search).click();
    $(MapObject.txt_InputSearch).setValue(MapData.rto);
    $(MapObject.rto_Result(MapData.rto)).click();
    $(MapObject.btn_Search).click();
})
Then("User can sync new RTO", () => {
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_rto, '');
})

/* MP002 */
When("User add new map to libary in RTO succesfull", () => {
    $(MapObject.selectRTScourse(MapData.course)).click();
    $(MapObject.selectRTSunit(MapData.unit)).$(MapObject.btnAddUnit).click();
    $(MapObject.btn_Continue).click();
    $(MapObject.btn_SideBar).click();
    $(MapObject.search_Box).setValue(MapData.rto);
    $(MapObject.selectFilter(MapData.rto)).click();
    $(MapObject.selectRTScourse(MapData.course)).click();
    $(MapObject.selectRTSunit(MapData.unit)).click();

    $(MapObject.btn_NewMap).click();

    $(MapObject.txt_assetment1).click();
    $(MapObject.txt_assetment1).setValue(MapData.assetment1);
    $(MapObject.txt_references1).click();

    $(MapObject.txt_assetment2).click();
    $(MapObject.txt_assetment2).setValue(MapData.assetment2);
    $(MapObject.txt_references2).doubleClick();
    $(MapObject.txt_references2).setValue(MapData.references2);

    $(MapObject.txt_assetment3).click();
    $(MapObject.txt_assetment3).setValue(MapData.assetment3);
    $(MapObject.txt_references3).doubleClick();
    $(MapObject.txt_references3).setValue(MapData.references3);
    $(MapObject.txt_references3).click();
    $(MapObject.btn_markcomplted3).click();

    $(MapObject.btn_MapSave).click();
    $(MapObject.txt_MapName).setValue(MapData.mapname);
    $(MapObject.txt_MapNote).setValue(MapData.mapnote);
    $(MapObject.btn_savsubmit).click();
    $(MapObject.btn_Back).click();
})
Then("User can add new maps in RTO", () => {
    browser.pause(1000)
    $(MapObject.tab_Maps).click()
    browser.pause(1000)
    assert.equal($(MapVerify.lbl_MapName).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_UnitRelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_MapNote).getText(), MapSuccess.verify_mapnote, '');

    $(MapObject.btn_MapDropDown).click();
    $(MapObject.btn_Deletemaps).click();
    $(MapObject.btn_Continue).click();
})

/* MP003 */
When("User click button delete RTO don't have maps", () => {
    const timeout = 2000
    $(MapObject.btn_SideBar).click();
    browser.pause(timeout)
    $(MapObject.search_Box).setValue(MapData.rto);
    browser.pause(timeout)
    $(MapObject.selectFilter(MapData.rto)).click();
    browser.pause(timeout)
    $(MapObject.selectRTScourse(MapData.course)).click();
    browser.pause(timeout)
    $(MapObject.selectRTSunit(MapData.unit)).click();
    browser.pause(timeout)
    $(MapObject.btn_Delete).click();

    $(MapObject.btn_SideBar).click();
    browser.pause(timeout)
    $(MapObject.search_Box).setValue(MapData.rto);
    browser.pause(timeout)
    $(MapObject.selectFilter(MapData.rto)).click();
    browser.pause(timeout)
    $(MapObject.btn_Delete).click();
})
Then("User can delete RTO succesfull", () => {
    assert.exists($(MapObject.btn_NewSyncs), '');
})

/* MP004 */
When("User input Course and click button sync", () => {
    $(MapObject.btn_SideBar).click();
    browser.pause(1000)
    $(MapObject.btn_AddSyncs).click();
    $(MapObject.txt_Search).click();
    $(MapObject.txt_InputSearch).setValue(MapData.course);
    $(MapObject.course_Result(MapData.course)).click();
    $(MapObject.btn_Search).click();

})
Then("User can sync new Course", () => {
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_course, '');
})

/* MP005 */
When("User add new map to libary in Course succesfull", () => {
    const timeout = 2000
    $(MapObject.selectRTScourse(MapData.course)).click();
    $(MapObject.selectRTSunit(MapData.unit)).$(MapObject.btnAddUnit).click();
    browser.pause(timeout)
    $(MapObject.btn_Continue).click();
    browser.pause(timeout)
    $(MapObject.btn_SideBar).click();
    browser.pause(timeout)
    $(MapObject.search_Box).setValue(MapData.unit);
    browser.pause(timeout)
    $(MapObject.selectFilter(MapData.unit)).click();

    browser.pause(timeout)
    $(MapObject.btn_NewMap).click();

    browser.pause(3000)
    $(MapObject.txt_assetment1).click();
    $(MapObject.txt_assetment1).setValue(MapData.assetment1);
    $(MapObject.txt_references1).click();

    browser.pause(2000)
    $(MapObject.txt_assetment2).click();
    $(MapObject.txt_assetment2).setValue(MapData.assetment2);
    $(MapObject.txt_references2).doubleClick();
    $(MapObject.txt_references2).setValue(MapData.references2);

    browser.pause(2000)
    $(MapObject.txt_assetment3).click();
    $(MapObject.txt_assetment3).setValue(MapData.assetment3);
    $(MapObject.txt_references3).doubleClick();
    $(MapObject.txt_references3).setValue(MapData.references3);
    $(MapObject.txt_references3).click();
    $(MapObject.btn_markcomplted3).click();

    $(MapObject.btn_MapSave).click();
    $(MapObject.txt_MapName).setValue(MapData.mapname);
    $(MapObject.txt_MapNote).setValue(MapData.mapnote);
    $(MapObject.btn_savsubmit).click();
    browser.pause(5000)
    $(MapObject.btn_Back).click();
})
Then("User can add new maps in Course", () => {
    $(MapObject.tab_Maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_MapName).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_UnitRelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_MapNote).getText(), MapSuccess.verify_mapnote, '');

    $(MapObject.btn_MapDropDown).click();
    $(MapObject.btn_Deletemaps).click();
    $(MapObject.btn_Continue).click();
    browser.pause(2000)
})

/* MP006 */
When("User input Unit and click button sync", () => {
    $(MapObject.btn_SideBar).click();
    browser.pause(1000)
    $(MapObject.btn_AddSyncs).click();
    $(MapObject.txt_Search).click();
    $(MapObject.txt_InputSearch).setValue(MapData.unit);
    $(MapObject.units_Result(MapData.unit)).click();
    $(MapObject.btn_Search).click();
})
Then("User can sync new Unit", () => {
    assert.equal($(MapVerify.lbl_unitheader).getText(), MapData.map_unit, '');
})

/* MP007 */
When("User select unit and start Mapping", () => {
    $(MapObject.btn_NewMap).click();

    browser.pause(3000)
    $(MapObject.txt_assetment1).click();
    $(MapObject.txt_assetment1).setValue(MapData.assetment1);
    $(MapObject.txt_references1).click();

    browser.pause(2000)
    $(MapObject.txt_assetment2).click();
    $(MapObject.txt_assetment2).setValue(MapData.assetment2);
    $(MapObject.txt_references2).doubleClick();
    $(MapObject.txt_references2).setValue(MapData.references2);

    browser.pause(2000)
    $(MapObject.txt_assetment3).click();
    $(MapObject.txt_assetment3).setValue(MapData.assetment3);
    $(MapObject.txt_references3).doubleClick();
    $(MapObject.txt_references3).setValue(MapData.references3);
    $(MapObject.txt_references3).click();
    $(MapObject.btn_markcomplted3).click();

    $(MapObject.btn_MapSave).click();
    $(MapObject.txt_MapName).setValue(MapData.mapname);
    $(MapObject.txt_MapNote).setValue(MapData.mapnote);

    $(MapObject.drop_RtoAssign).click();
    $(MapObject.btn_Adnew).click();
    $(MapObject.search_Rto).click();
    $(MapObject.search_Rto).setValue(MapData.rto);
    browser.pause(2000)
    $(MapObject.selectRto(MapData.rto)).click();
    browser.pause(2000)
    $(MapObject.value_course).click();
    browser.pause(2000)
    $(MapObject.btn_savsubmit).click();
    browser.pause(2000)

    $(MapObject.drop_RtoAssign).click();
    $(MapObject.rto_group).click();
    $(MapObject.txt_MapNote).click();
    $(MapObject.btn_savsubmit).click();

    browser.pause(5000)
    $(MapObject.btn_Back).click();
})
Then("User can create new Mapping", () => {
    $(MapObject.tab_Maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_MapName).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_UnitRelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_MapNote).getText(), MapSuccess.verify_mapnote, '');

})

/* MP008 */
When("User click button duplicate maps", () => {
    $(MapObject.btn_MapDropDown).click();
    $(MapObject.btn_Duplicate).click();

    $(MapObject.txt_MapName).clearValue();
    $(MapObject.txt_MapName).setValue(MapData.mapduplicate);
    $(MapObject.txt_MapNote).clearValue();
    $(MapObject.txt_MapNote).setValue(MapData.noteduplicate);
    $(MapObject.btn_savsubmit).click();


})
Then("User can duplicate map succesfull", () => {
    const timeout = 3000
    browser.pause(timeout)
    $(MapObject.btn_MapSave).click();
    browser.pause(timeout)

    assert.equal($(MapObject.lbl_Maptitle).getValue(), MapData.mapduplicate, '');

    assert.equal($(MapObject.txt_assetment1).getText(), MapData.assetment1, '');

    assert.equal($(MapObject.txt_assetment2).getText(), MapData.assetment2, '');
    assert.equal($(MapObject.txt_references2).getText(), MapData.references2, '');

    assert.equal($(MapObject.txt_assetment3).getText(), MapData.assetment3, '');
    assert.equal($(MapObject.txt_references3).getText(), MapData.references3, '');
})

/* MP009 */
When("User click button delete duplicate maps", () => {
    $(MapObject.btn_ActionDropdown).click();
    $(MapObject.btn_ActionDelete).click();
    $(MapObject.btn_Continue).click();
})
Then("User can delete duplicate map succesfull", () => {
    $(MapObject.tab_Maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_MapName).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_UnitRelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_MapNote).getText(), MapSuccess.verify_mapnote, '');
})

/* MP010 */
When("User click re-assign maps", () => {
    const timeout = 3000
    $(MapObject.btn_SideBar).click();
    browser.pause(timeout)
    $(MapObject.btn_Newfolder).click();

    $(MapObject.txt_Foldername).click();
    browser.pause(timeout)
    $(MapObject.txt_Foldername).setValue(MapData.foldername);
    browser.pause(timeout)
    $(MapObject.btn_Savefolder).click();

    $(MapObject.tab_Maps).click()
    browser.pause(timeout)
    $(MapObject.btn_MapDropDown).click();
    $(MapObject.btn_Reassign).click();

    browser.pause(timeout)
    $(MapObject.txt_MapName).clearValue();
    $(MapObject.txt_MapName).setValue(MapData.maprename);
    $(MapObject.txt_MapNote).clearValue();
    $(MapObject.txt_MapNote).setValue(MapData.maprenote);

    browser.pause(timeout)
    $(MapObject.drop_FolderAssign).click();
    $(MapObject.value_Folder(MapData.foldername)).click();
    $(MapObject.txt_MapNote).click();

    $(MapObject.btn_savsubmit).click();
    browser.pause(timeout)
})
Then("User can re-assign maps succesfull", () => {
    assert.equal($(MapVerify.lbl_MapRename).getText(), MapData.maprename, '');
    assert.equal($(MapVerify.lbl_MapRenote).getText(), MapData.maprenote, '');
    assert.equal($(MapVerify.llb_MapReFoder).getText(), MapData.foldername, '');
    browser.keys("Escape")
})

/* MP011 */
When("User click button delete re-assign maps", () => {
    $(MapObject.btn_SideBar).click();
    browser.pause(1000)
    $(MapObject.btn_AddSyncs).click();
    $(MapObject.txt_Search).click();
    $(MapObject.txt_InputSearch).setValue(MapData.unit);
    $(MapObject.units_Result(MapData.unit)).click();
    $(MapObject.btn_Search).click();
})
Then("User can delete re-assign maps succesfull", () => {
    $(MapObject.tab_Maps).click()
    browser.pause(1000)
    $(MapObject.btn_MapDropDown).click();
    $(MapObject.btn_Deletemaps).click();
    $(MapObject.btn_Continue).click();

    $(MapObject.btn_SideBar).click();
    browser.pause(1000)
    $(MapObject.btn_AddSyncs).click();
    $(MapObject.txt_Search).click();
    $(MapObject.txt_InputSearch).setValue(MapData.unit);
    $(MapObject.units_Result(MapData.unit)).click();
    $(MapObject.btn_Search).click();
    $(MapObject.btn_Delete).click();
})

/* MP012 */
When("User click button delete folder don't have maps", () => {
    $(MapObject.btn_SideBar).click();
    browser.pause(1000)
    $(MapObject.search_Box).setValue(MapData.foldername);
    $(MapObject.selectFilter(MapData.foldername)).click();
    browser.pause(3000)
    $(MapObject.btn_Delete).click();
})
Then("User can delete folder succesfull", () => {
    const timeout = 1000
    $(MapObject.btn_SideBar).click();
    browser.pause(timeout)
    $(MapObject.search_Box).setValue(MapData.rto);
    browser.pause(timeout)
    $(MapObject.selectFilter(MapData.rto)).click();
    browser.pause(timeout)
    $(MapObject.btn_Delete).click();
})

