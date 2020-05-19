const MapObject = {
    btn_nwsyncs: '(//*[contains(@href,"/start_mappings/new")])[2]',
    btn_addsyncs: '(//*[contains(@href,"/start_mappings/new")])[1]',
    btn_strmap: '(//*[contains(@href,"/start_mappings/new")])[2]',
    btn_sidebar: '//*[@id="sidebar-collapse-wrapper"]/div[1]/button/div',
    searchbox: '//input[@name="search"]',

    btn_nwfolder: '//a[@href="#new-folder"]',
    btn_mymaps: '//*[text()="My maps"]',
    btn_savefolder: '//*[@id="new_user_sidebar"]/div/div/button',
    txt_foldername: '//input[@id="user_sidebar_name"]',
    folder: '//*[@id="bd-profile-nav"]/a[3]',

    txt_search: 'span[aria-labelledby="select2-user_sidebar_code-container"]',
    txt_inputsearch: 'input[type = "search"]',
    btn_search: 'button[class="btn btn btn-continue position-relative js_start_mapping_submit"]',
    txt_resultRTO: 'li[aria-label="RTO(s)"]>ul>li',
    txt_resultCourse: 'li[aria-label="Course(s)"]>ul>li:last-child',
    txt_resultUnits: 'li[aria-label="Unit(s)"]>ul>li:last-child',
    btn_delete: '(//*[contains(@data-method,"delete")])[2]',

    //Synced
    btn_Scourse: 'div[id="pills-synced"]>div>div>div>div>button',
    btn_Sunit: 'tr[data-href="/units/37379"]',
    btn_addmaps: '//button[contains(text(),"Add To Library")]',
    btn_continue: '//button[contains(@class,"swal2-confirm")]',
    btn_Snewmap: '//*[contains(@class,"js_new_map")]',
    btn_downloadUnitpack: '//*[contains(@class,"dropdown js_download_pack")]',
    btn_downloadUnitpackExcel: '(//*[contains(@class,"dropdown js_download_pack")]//a)[1]',
    btn_downloadUnitpackWord: '(//*[contains(@class,"dropdown js_download_pack")]//a)[2]',
    btn_downloadUnitpackPDF: '(//*[contains(@class,"dropdown js_download_pack")]//a)[3]',
    btn_newassetmenttaks: 'a[data-association="assessment_task"]',
    txt_assetment1: '(//textarea[contains(@name,"assessment_mapping")])[1]',
    txt_assetment2: '(//textarea[contains(@name,"assessment_mapping")])[2]',
    txt_assetment3: '(//textarea[contains(@name,"assessment_mapping")])[3]',
    txt_references1: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[1]',
    txt_references2: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[2]',
    txt_references3: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[3]',
    btn_markcomplted3: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[3]/following-sibling::div[@x-placement="bottom-start"]//button[text()="Mark as complete"]',
    btn_mapsave: '//a[contains(@data-url,"popup_save")]',
    tab_maps: '//*[contains(@id,"pills-maps-tab")]',
    btn_newmap: '//*[@id="pills-maps"]/div/a',

    txt_mapname: 'input[id="release_name_box"]',
    txt_mapnote: 'textarea[id="release_comment_box"]',

    drop_rtoassign: 'select[id="rto_ids"]+div>button',
    btn_adnew: '//*[text()="+ Add New"]',
    rt_search: 'input[id="search"]',
    value_rto: '//*[@id="rtos_section"]/div/button',
    value_course: '//*[@id="rtos_section"]/div/button/div/div[1]/div/input',
    rto_group: '//input[@data-name="selectGrouprto_ids[]"]',

    drop_folderassign: 'select[id="folder_ids"]+div>button',
    value_folder: 'input[data-name="selectItemfolder_ids[]"]',
    btn_savsubmit: 'div[aria-describedby="swal2-content"]>div:nth-child(3)>button[class="swal2-confirm btn btn-success"]',
    btn_back: '//div[@class="d-inline-flex"]/a[contains(@href,"/units")]',

    btn_mapdropdown: '//div[@class="dropdown"]//button[@class="btn p-0 w-100 text-right"]',
    btn_maprm: '//a[contains(@class,"js_remove_map")]',
    btn_duplicate: '(//*[text()="Duplicate Map"])[1]',
    btn_reassign: '(//span[contains(text(),"Rename/Reassign")])[1]',

    lbl_maptitle: '(//*[@id="release_name"])[1]',
    btn_actiondropdown: '//div[@class="dropdown"]//button[@data-toggle="dropdown"]//img[contains(@src,"dots")]',
    btn_actiondelete: '//a[@data-method="delete"]/*[text()="Delete"]',

    //Ready To Sync
    selectRTScourse: (codeCourse) => {
        return "//div[contains(text()," + "'" + codeCourse + "'" + ")]"
    },
    selectRTSunit: (unitCode) => {
        return "//td[contains(text()," + "'" + unitCode + "'" + ")]"
    },
    btnAddUnit: '//button[contains(@class,"btn btn-add js_single_sync")]',
    selectRTO: (codeRTO) =>{
        return "//*[contains(@aria-filter--value," + "'" + codeRTO + "'" + ")]"
    },
    btn_ViewLibary: '//a[@class="btn btn-view-library px-5"]//span[contains(text(),"View Library")]',
    btn_UnitesSynced: '//*[@id="collapse-4613"]/div[3]/table/tbody/tr',
    btn_dropdown: '//*[@id="collapse-4613"]/div[3]/table/tbody/tr/td[8]/button',
    btn_deletemaps: '//*[@id="collapse-4613"]/div[3]/table/tbody/tr/td[8]/div/a[5]',
}

const MapVerify = {
    lbl_header: '//h2[contains(@class,"js_page_title")]',
    lbl_unitheader: '//h2[contains(@class,"text-peach mb-0")]',
    lbl_warmingmess: 'div[class="invalid-feedback"]',
    header: '/html/body/div[1]/div/div[2]/div/div[1]',

    lbl_mapname: '(//table[contains(@class,"table-striped")]//tbody//td)[2]',
    lbl_unitrelease: '(//table[contains(@class,"table-striped")]//tbody//td)[3]',
    lbl_mapversion: '(//table[contains(@class,"table-striped")]//tbody//td)[4]',
    lbl_maprto: '(//table[contains(@class,"table-striped")]//tbody//td)[5]',
    lbl_mapnote: '(//table[contains(@class,"table-striped")]//tbody//td)[6]',
    lbl_mapupdate: '(//table[contains(@class,"table-striped")]//tbody//td)[7]',

    lbl_verify: '//*[@id="swal2-content"]/div[1]',

    lbl_maprename: '//*[@id="swal2-content"]/div/div[1]',
    lbl_maprenote: '//*[@id="swal2-content"]/div/div[2]',
    llb_maprefoder: '//*[@id="swal2-content"]/div/div[4]/div[2]/div'
}
export { MapObject, MapVerify }