const MapObject = {
    btn_nwsyncs: '(//*[@href="/start_mappings/new"])[1]',
    btn_strmap: '(//*[@href="/start_mappings/new"])[2]',
    btn_nwfolder: '//a[@href="#new-folder"]',
    btn_mymaps: '//*[text()="My maps"]',
    txt_search: 'span[aria-labelledby="select2-user_sidebar_code-container"]',
    txt_inputsearch: 'input[type = "search"]',
    btn_search: 'div[class="d-flex justify-content-center"]>button',
    tab_synced: '//*[text()="Synced"]',
    tab_readysync: '//*[text()="Ready to sync"]',
    txt_resultRTO: 'li[aria-label="RTO(s)"]>ul>li',
    txt_resultCourse: 'li[aria-label="Course(s)"]>ul>li:last-child',
    txt_resultUnits: 'li[aria-label="Unit(s)"]>ul>li:last-child',
    //Synced
    btn_Scourse: 'div[id="pills-synced"]>div>div>div>div>button',
    btn_Sunit: 'tr[data-href="/units/37379"]',
    btn_Snewmap: '//div[contains(@class,"control-bar")]//a[contains(@class,"js_new_map")]',
    btn_newassetmenttaks: 'a[data-association="assessment_task"]',
    txt_assetment1: '(//textarea[contains(@name,"assessment_mapping")])[1]',
    txt_assetment2: '(//textarea[contains(@name,"assessment_mapping")])[2]',
    txt_assetment3: '(//textarea[contains(@name,"assessment_mapping")])[3]',
    txt_references1: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[1]',
    txt_references2: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[2]',
    txt_references3: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[3]',
    btn_markcomplted3: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[3]/following-sibling::div[@x-placement="bottom-start"]//button[text()="Mark as complete"]',
    btn_mapsave: '//a[contains(@data-url,"popup_save")]',

    txt_mapname: 'input[id="release_name_box"]',
    txt_mapnote: 'textarea[id="release_comment_box"]',
    drop_rtoassign: 'select[id="rto_ids"]+div>button',
    value_rto: 'label[class="optgroup "]>input',
    drop_folderassign: 'select[id="folder_ids"]+div>button',
    value_folder: '//span[text()="You "]',
    btn_savsubmit: 'div[aria-describedby="swal2-content"]>div:nth-child(3)>button[class="swal2-confirm btn btn-success"]',
    btn_back: 'div[class="d-inline-flex"]>a[href="/units/37379"]',

    
    btn_mapdropdown: 'tbody>tr>td:last-child',
    btn_maprm: '[class="dropdown-menu dropdown-menu-right mini-dropdown-menu show"]>a',

    //Ready To Sync
    btn_RTScourseBSBSS00090: 'div[data-title= "Auditing Skill Set"]>div>button',
    btn_RTScourseBSB51615: 'div[data-title="Diploma of Quality Auditing"]>div>button',
    checkbox_RTSunitBSBAUD504: 'input[value="BSBAUD504"]',
    btn_RTSsyncselected: 'button[data-disable-with="Syncing..."]',
    btn_RTScontinuesync: 'button[style="display: inline-block;"]',
}

const MapVerify = {
    lbl_header: 'h2[class="text-peach mb-0"]',
    lbl_warmingmess: 'div[class="invalid-feedback"]',

    lbl_mapname: 'tbody>tr>td:nth-child(2)>a',
    lbl_unitrelease: 'tbody>tr>td:nth-child(3)',
    lbl_mapversion: 'tbody>tr>td:nth-child(4)',
    lbl_maprto: 'tbody>tr>td:nth-child(5)',
    lbl_mapnote: 'tbody>tr>td:nth-child(6)',
    lbl_mapupdate: 'tbody>tr>td:nth-child(7)',
}
export { MapObject, MapVerify }