sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'demoproject.demotravel',
            componentId: 'ZC_TRAVEL_THAList',
            contextPath: '/ZC_TRAVEL_THA'
        },
        CustomPageDefinitions
    );
});