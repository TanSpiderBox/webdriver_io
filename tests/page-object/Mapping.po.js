const MapObject = {
    //Home Board
    btn_NewSyncs: '//*[contains(@class,"js_start_mapping_btn")]//*[contains(@href,"/start_mappings/new")]',
    btn_AddSyncs: '//nav[@id="bd-profile-nav"]//*[contains(@href,"/start_mappings/new")]',
    btn_SideBar: '//*[@id="sidebar-collapse-wrapper"]/div[1]/button/div',
    search_Box: '//input[@name="search"]',

    //Sidebar
    btn_Newfolder: '//nav[@id="bd-profile-nav"]//a[@href="#new-folder"]',
    btn_Mymaps: '//*[contains(@class,"js_start_mapping_btn")]/following-sibling::a[contains(@href,"/w/307/my_maps")]',
    btn_Savefolder: '//*[@id="new-folder"]//button',
    txt_Foldername: '//*[@id="new-folder"]//input[@id="user_sidebar_name"]',
    filter_Result: (result) => {
        return "//*[@id='bd-profile-nav']/a[@aria-filter--value=" + "'" + result + "'" + "]"
    },
    txt_Search: 'span[aria-labelledby="select2-user_sidebar_code-container"]',
    txt_InputSearch: 'input[type = "search"]',
    btn_Search: 'button[class="btn btn btn-continue position-relative js_start_mapping_submit"]',
    rto_Result: (rtoresult) => {
        return "//li[@aria-label='RTO(s)']/ul/li[contains(text()," + "'" + rtoresult + "'" + ")]"
    },
    course_Result: (courseresult) => {
        return "//li[@aria-label='Course(s)']/ul/li[contains(text()," + "'" + courseresult + "'" + ")]"
    },
    units_Result: (unitsresult) => {
        return "//li[@aria-label='Unit(s)']/ul/li[contains(text()," + "'" + unitsresult + "'" + ")]"
    },
    btn_Delete: '//div[contains(@class,"control-bar")]//*[contains(@data-method,"delete")]',

    //Map Board
    btn_Addmaps: '//button[contains(text(),"Add To Library")]',
    btn_Continue: '//button[contains(@class,"swal2-confirm")]',
    btn_NewMap: '//*[contains(@class,"js_new_map")]',
    btn_DownloadUnitpack: '//*[contains(@class,"dropdown js_download_pack")]',
    btn_DownloadUnitpackExcel: '//*[contains(@class,"dropdown js_download_pack")]//*[contains(text(),"Export to Excel")]',
    btn_DownloadUnitpackWord: '//*[contains(@class,"dropdown js_download_pack")]//*[contains(text(),"Export to Word")]',
    btn_DownloadUnitpackPDF: '//*[contains(@class,"dropdown js_download_pack")]//*[contains(text(),"Export to PDF")]',
    tab_Maps: '//*[contains(@id,"pills-maps-tab")]',

    //Synced
    btn_Note: "//button[contains(@class,'js_show_note')]",
    txt_Note: "//textarea[contains(@id,'release_comment')]",
    btn_Downloadtemplate: "//button/span[contains(text(),'Download')]",
    btn_Downloadtemplateexcel: "//button/span[contains(text(),'Download')]/parent::button/parent::div//span[contains(text(),'Export to Excel')]",
    btn_Downloadtemplateword: "//button/span[contains(text(),'Download')]/parent::button/parent::div//span[contains(text(),'Export to Word')]",
    btn_Downloadtemplatepdf: "//button/span[contains(text(),'Download')]/parent::button/parent::div//span[contains(text(),'Export to PDF')]",
    btn_Newassetmenttask: 'a[data-association="assessment_task"]',
    txt_Assetment: (assetment_field) => {
        return "(//*[@mapping-header='sticky-top']//textarea[contains(@name,'assessment_mapping')])[" + "'" + assetment_field + "'" + "]"
    },
    txt_References: (references_field) => {
        return "(//div[contains(@class,'ui-resizable')]//textarea[@id='references'])[" + "'" + references_field + "'" + "]"
    },
    btn_Markcomplted: (references_field) => {
        return "(//div[contains(@class,'ui-resizable')]//textarea[@id='references'])[" + "'" + references_field + "'" + "]/following-sibling::div[@x-placement='bottom - start']//button[text()='Mark as complete']"
    },
    txt_assetment1: '(//textarea[contains(@name,"assessment_mapping")])[1]',
    txt_assetment2: '(//textarea[contains(@name,"assessment_mapping")])[2]',
    txt_assetment3: '(//textarea[contains(@name,"assessment_mapping")])[3]',
    txt_references1: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[1]',
    txt_references2: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[2]',
    txt_references3: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[3]',
    btn_markcomplted3: '(//div[contains(@class,"ui-resizable")]//textarea[@id="references"])[3]/following-sibling::div[@x-placement="bottom-start"]//button[text()="Mark as complete"]',
    btn_MapSave: '//a[contains(@data-url,"popup_save")]',

    //Save Box
    txt_MapName: '//*[@id="swal2-content"]//input[@id="release_name_box"]',
    txt_MapNote: '//*[@id="swal2-content"]//textarea[@id="release_comment_box"]',
    drop_RtoAssign: '//select[@name="rto_ids[]"]/following-sibling::div/button',
    btn_Adnew: '//*[text()="+ Add New"]',
    search_Rto: 'input[id="search"]',
    selectRto: (rtoname) => {
        return "//*[@id='rtos_section']//*[contains(text()," + "'" + rtoname + "'" + ")]/ancestor::button"
    },
    value_course: '//*[@id="rtos_section"]/div/button/div/div[1]/div/input',
    rto_group: '//input[@data-name="selectGrouprto_ids[]"]',

    drop_FolderAssign: '//select[@name="folder_ids[]"]/following-sibling::div/button',
    value_Folder: (foldername) => {
        return "//input[@data-name='selectItemfolder_ids[]']/following-sibling::span[contains(text()," + "'" + foldername + "'" + ")]"
    },
    btn_savsubmit: 'div[aria-describedby="swal2-content"]>div:nth-child(3)>button[class="swal2-confirm btn btn-success"]',
    btn_Back: '//div[@class="d-inline-flex"]/a[contains(@href,"/units")]',

    btn_MapDropDown: '//*[contains(@class,"table-borderless")]//button[@data-toggle="dropdown"]',
    btn_Deletemaps: '//*[contains(@class,"table-borderless")]//*[contains(text(),"Delete")]',
    btn_Duplicate: '//*[contains(@class,"table-borderless")]//*[text()="Duplicate Map"]',
    btn_Reassign: '//*[contains(@class,"table-borderless")]//span[contains(text(),"Rename/Reassign")]',

    lbl_Maptitle: '//form[@class="js_edit_name_release"]//*[@id="release_name"]',
    btn_ActionDropdown: '//div[@class="dropdown"]//button[@data-toggle="dropdown"]//img[contains(@src,"dots")]',
    btn_ActionDuplicate: '//*[contains(@class,"js_dup_map")]//*[text()="Duplicate Map"]',
    btn_ActionReassign: '//*[contains(@class,"js_reassign")]//*[text()="Rename/Reassign"]',
    btn_ActionDelete: '//*[contains(@class,"js_remove_map")]//*[text()="Delete"]',

    //Ready To Sync
    selectRTScourse: (codeCourse) => {
        return "//div[contains(text()," + "'" + codeCourse + "'" + ")]"
    },
    selectRTSunit: (unitCode) => {
        return "//td[contains(text()," + "'" + unitCode + "'" + ")]"
    },
    btnAddUnit: '//button[contains(@class,"btn btn-add js_single_sync")]',
    selectFilter: (result) => {
        return "//*[contains(@aria-filter--value," + "'" + result + "'" + ")]"
    },
    btn_ViewLibary: '//a[@class="btn btn-view-library px-5"]//span[contains(text(),"View Library")]',
    btn_UnitesSynced: '//*[@id="collapse-4613"]/div[3]/table/tbody/tr',
    btn_Dropdown: '//*[@id="collapse-4613"]/div[3]/table/tbody/tr/td[8]/button',
}

const MapVerify = {
    lbl_header: '//h2[contains(@class,"js_page_title")]',
    lbl_unitheader: '//h2[contains(@class,"text-peach mb-0")]',
    lbl_warmingmess: 'div[class="invalid-feedback"]',
    header: '/html/body/div[1]/div/div[2]/div/div[1]',

    lbl_MapName: '(//table[contains(@class,"table-striped")]//tbody//td)[2]',
    lbl_UnitRelease: '(//table[contains(@class,"table-striped")]//tbody//td)[3]',
    lbl_MapVersion: '(//table[contains(@class,"table-striped")]//tbody//td)[4]',
    lbl_MapRto: '(//table[contains(@class,"table-striped")]//tbody//td)[5]',
    lbl_MapNote: '(//table[contains(@class,"table-striped")]//tbody//td)[6]',
    lbl_MapUpdate: '(//table[contains(@class,"table-striped")]//tbody//td)[7]',

    lbl_MapRename:'//*[@id="swal2-content"]//div[contains(@class,"text-pink mr-5")]',
    lbl_MapRenote:'//*[@id="swal2-content"]//div[contains(@class,"my-3")]',
    llb_MapReFoder:'//*[@id="swal2-content"]//div[contains(@class,"row")]/div[contains(text(),"Assign to Folder(s):")]/following-sibling::div/div',

    lbl_verify: '//*[@id="swal2-content"]/div[1]',
    lbl_MapRto: '//select[@name="rto_ids[]"]/following-sibling::div/following-sibling::div',
    lbl_MapFolder: '//select[@name="folder_ids[]"]/following-sibling::div/following-sibling::div'
}
export { MapObject, MapVerify }