const MapData = {
    rto: '45123',
    course: 'BSBSS00090',
    unit: 'BSBAUD504',
    map_course: 'Course: BSBSS00090',
    map_rto: 'RTO# 45123',
    map_unit: 'BSBAUD504',

    assetment1: 'Start',
    assetment2: 'Inprogress',
    assetment3: 'Completed',

    references2: 'Stuck',
    references3: 'Done',

    mapname: 'TestMap',
    mapnote: 'TestMap',

    mapduplicate: 'TestMapDuplicate',
    noteduplicate: 'TestMapDuplicate',

    maprename: 'TestMapRename',
    maprenote: 'TestMapRename',
    foldername: 'Test Folder',
}
const MapError = {
    deleteRTO: "You can only delete empty folders/RTO(s)."
}

const MapSuccess = {
    verify_mapname: 'TestMap',
    verify_unitrelease: '1',
    verify_mapversion: '1.1',
    verify_maprto: '45123',
    verify_mapnote: 'TestMap',
    verify_mapupdate: '07 Apr',
}

export { MapData, MapSuccess, MapError };