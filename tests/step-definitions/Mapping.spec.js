import { When, Then } from "cucumber";
import { assert } from 'chai'
import { MapData, MapSuccess, MapError } from "../data/Data_Mapping";
import { MapObject, MapVerify } from "../page-object/Mapping.po"

/* MP001 */
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

/* MP002 */
When("User add new map to libary in RTO succesfull", () => {
    const timeout = 1000
    $(MapObject.btn_RTScourse).click();
    browser.pause(timeout)
    $(MapObject.btn_RTSunit).click();
    browser.pause(timeout)
    $(MapObject.btn_continue).click();
    browser.pause(timeout)
    $(MapObject.tab_synced).click();
    browser.pause(timeout)
    $(MapObject.btn_RTScourseSynced).click();
    browser.pause(timeout)
    $(MapObject.btn_UnitesSynced).click();
    browser.pause(timeout)

    $(MapObject.btn_Snewmap).click();

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

    $(MapObject.btn_mapsave).click();
    $(MapObject.txt_mapname).setValue(MapData.mapname);
    $(MapObject.txt_mapnote).setValue(MapData.mapnote);
    $(MapObject.btn_savsubmit).click();
    browser.pause(5000)
    $(MapObject.btn_back).click();
})
Then("User can add new maps in RTO", () => {
    $(MapObject.tab_maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_mapname).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_unitrelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_mapnote).getText(), MapSuccess.verify_mapnote, '');

    $(MapObject.btn_mapdropdown).click();
    $(MapObject.btn_maprm).click();
    browser.pause(2000)
})

// /* MP003 */
// When('User click button delete RTO have maps', () => {
//     $(MapObject.btn_sidebar).click();
//     browser.pause(1000)
//     $(MapObject.btn_addsyncs).click();
//     $(MapObject.txt_search).click();
//     $(MapObject.txt_inputsearch).setValue(MapData.rto);
//     $(MapObject.txt_resultRTO).click();
//     $(MapObject.btn_search).click();
//     $(MapObject.btn_delete).click();
// })
// Then("User will see warning can't delte RTO", () => {
//     assert.equal($(MapVerify.lbl_verify).getText(), MapError.deleteRTO, '');
//     browser.keys("Escape")
// })

/* MP004 */
When("User click button delete RTO don't have maps", () => {
    const timeout = 2000
    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.rto);
    $(MapObject.txt_resultRTO).click();
    $(MapObject.btn_search).click();

    browser.pause(timeout)
    $(MapObject.tab_synced).click();
    browser.pause(timeout)
    $(MapObject.btn_RTScourseSynced).click();
    browser.pause(timeout)
    $(MapObject.btn_dropdown).click();
    browser.pause(timeout)
    $(MapObject.btn_deletemaps).click();
    browser.pause(timeout)

    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.rto);
    $(MapObject.txt_resultRTO).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_delete).click();
})
Then("User can delete RTO succesfull", () => {
    assert.exists($(MapObject.btn_strmap), '');
})

/* MP005 */
When("User input Course and click button sync", () => {
    $(MapObject.btn_sidebar).click();
    browser.pause(1000)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.course);
    $(MapObject.txt_resultCourse).click();
    $(MapObject.btn_search).click();

})
Then("User can sync new Course", () => {
    assert.equal($(MapVerify.lbl_header).getText(), MapData.map_course, '');
})

/* MP006 */
When("User add new map to libary in Course succesfull", () => {
    const timeout = 1000
    $(MapObject.btn_RTSunit).click();
    browser.pause(timeout)
    $(MapObject.btn_continue).click();
    browser.pause(timeout)
    $(MapObject.tab_synced).click();
    browser.pause(timeout)
    $(MapObject.btn_UnitesSynced).click();
    browser.pause(timeout)

    $(MapObject.btn_Snewmap).click();

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

    $(MapObject.btn_mapsave).click();
    $(MapObject.txt_mapname).setValue(MapData.mapname);
    $(MapObject.txt_mapnote).setValue(MapData.mapnote);
    $(MapObject.btn_savsubmit).click();
    browser.pause(5000)
    $(MapObject.btn_back).click();
})
Then("User can add new maps in Course", () => {
    $(MapObject.tab_maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_mapname).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_unitrelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_mapnote).getText(), MapSuccess.verify_mapnote, '');

    $(MapObject.btn_mapdropdown).click();
    $(MapObject.btn_maprm).click();
    browser.pause(2000)
})

/* MP007 */
When("User input Unit and click button sync", () => {
    $(MapObject.btn_sidebar).click();
    browser.pause(1000)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
})
Then("User can sync new Unit", () => {
    assert.equal($(MapVerify.lbl_unitheader).getText(), MapData.map_unit, '');
})

/* MP008 */
When("User select unit and start Mapping", () => {
    $(MapObject.btn_Snewmap).click();

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

    $(MapObject.btn_mapsave).click();
    $(MapObject.txt_mapname).setValue(MapData.mapname);
    $(MapObject.txt_mapnote).setValue(MapData.mapnote);

    $(MapObject.drop_rtoassign).click();
    $(MapObject.btn_adnew).click();
    $(MapObject.rt_search).click();
    $(MapObject.rt_search).setValue(MapData.rto);
    browser.pause(2000)
    $(MapObject.value_rto).click();
    browser.pause(2000)
    $(MapObject.value_course).click();
    browser.pause(2000)
    $(MapObject.btn_savsubmit).click();
    browser.pause(2000)

    $(MapObject.drop_rtoassign).click();
    $(MapObject.rto_group).click();
    $(MapObject.txt_mapnote).click();
    $(MapObject.btn_savsubmit).click();

    browser.pause(5000)
    $(MapObject.btn_back).click();
})
Then("User can create new Mapping", () => {
    $(MapObject.tab_maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_mapname).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_unitrelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_mapnote).getText(), MapSuccess.verify_mapnote, '');

})

/* MP009 */
When("User click button duplicate maps", () => {
    $(MapObject.btn_mapdropdown).click();
    $(MapObject.btn_duplicate).click();

    $(MapObject.txt_mapname).clearValue();
    $(MapObject.txt_mapname).setValue(MapData.mapduplicate);
    $(MapObject.txt_mapnote).clearValue();
    $(MapObject.txt_mapnote).setValue(MapData.noteduplicate);
    $(MapObject.btn_savsubmit).click();


})
Then("User can duplicate map succesfull", () => {
    const timeout = 3000
    browser.pause(timeout)
    $(MapObject.btn_mapsave).click();
    browser.pause(timeout)

    assert.equal($(MapObject.lbl_maptitle).getValue(), MapData.mapduplicate, '');

    assert.equal($(MapObject.txt_assetment1).getText(), MapData.assetment1, '');

    assert.equal($(MapObject.txt_assetment2).getText(), MapData.assetment2, '');
    assert.equal($(MapObject.txt_references2).getText(), MapData.references2, '');

    assert.equal($(MapObject.txt_assetment3).getText(), MapData.assetment3, '');
    assert.equal($(MapObject.txt_references3).getText(), MapData.references3, '');
})

/* MP010 */
When("User click button delete duplicate maps", () => {
    $(MapObject.btn_actiondropdown).click();
    $(MapObject.btn_actiondelete).click();
})
Then("User can delete duplicate map succesfull", () => {
    $(MapObject.tab_maps).click()
    browser.pause(2000)
    assert.equal($(MapVerify.lbl_mapname).getText(), MapSuccess.verify_mapname, '');

    assert.equal($(MapVerify.lbl_unitrelease).getText(), MapSuccess.verify_unitrelease, '');

    assert.equal($(MapVerify.lbl_mapnote).getText(), MapSuccess.verify_mapnote, '');
})

/* MP011 */
When("User click re-assign maps", () => {
    const timeout = 3000
    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_nwfolder).click();

    $(MapObject.txt_foldername).click();
    browser.pause(timeout)
    $(MapObject.txt_foldername).setValue(MapData.foldername);
    browser.pause(timeout)
    $(MapObject.btn_savefolder).click();

    $(MapObject.tab_maps).click()
    browser.pause(timeout)
    $(MapObject.btn_mapdropdown).click();
    $(MapObject.btn_reassign).click();

    browser.pause(timeout)
    $(MapObject.txt_mapname).clearValue();
    $(MapObject.txt_mapname).setValue(MapData.maprename);
    $(MapObject.txt_mapnote).clearValue();
    $(MapObject.txt_mapnote).setValue(MapData.maprenote);

    browser.pause(timeout)
    $(MapObject.drop_folderassign).click();
    $(MapObject.value_folder).click();
    $(MapObject.txt_mapnote).click();

    $(MapObject.btn_savsubmit).click();
    browser.pause(timeout)
})
Then("User can re-assign maps succesfull", () => {
    assert.equal($(MapVerify.lbl_maprename).getText(), MapData.maprename, '');
    assert.equal($(MapVerify.lbl_maprenote).getText(), MapData.maprenote, '');
    assert.equal($(MapVerify.llb_maprefoder).getText(), MapData.foldername, '');
    browser.keys("Escape")
})

// /* MP012 */
// When("User click button delete folder have maps", () => {
//     $(MapObject.btn_sidebar).click();
//     browser.pause(1000)
//     $(MapObject.folder).click();
//     browser.pause(5000)
//     $(MapObject.btn_delete).click();
// })
// Then("User can't delete folder succesfull", () => {
//     assert.equal($(MapVerify.lbl_verify).getText(), MapError.deleteRTO, '');
//     browser.keys("Escape")
// })

/* MP013 */
When("User click button delete re-assign maps", () => {
    $(MapObject.btn_sidebar).click();
    browser.pause(1000)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
})
Then("User can delete re-assign maps succesfull", () => {
    $(MapObject.tab_maps).click()
    browser.pause(1000)
    $(MapObject.btn_mapdropdown).click();
    $(MapObject.btn_maprm).click();

    $(MapObject.btn_sidebar).click();
    browser.pause(1000)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_delete).click();
})

/* MP014 */
When("User click button delete folder don't have maps", () => {
    $(MapObject.btn_sidebar).click();
    browser.pause(1000)
    $(MapObject.folder).click();
    browser.pause(3000)
    $(MapObject.btn_delete).click();
})
Then("User can delete folder succesfull", () => {
    $(MapObject.btn_sidebar).click();
    browser.pause(1000)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(MapData.rto);
    $(MapObject.txt_resultRTO).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_delete).click();
})

