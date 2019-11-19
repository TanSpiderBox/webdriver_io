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
    btn_courseBSBSS00090: 'div[data - title= "Auditing Skill Set"]> div > button',
    btn_courseBSB51615: 'div[data-title="Diploma of Quality Auditing"]>div>button',
}

const MapVerify = {
    lbl_header: 'h2[class="text-peach mb-0"]',
    lbl_warmingmess: 'div[class="invalid-feedback"]',
}
export { MapObject, MapVerify }