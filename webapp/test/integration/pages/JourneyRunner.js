sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demoproject/demotravel/test/integration/pages/ZC_TRAVEL_THAList",
	"demoproject/demotravel/test/integration/pages/ZC_TRAVEL_THAObjectPage"
], function (JourneyRunner, ZC_TRAVEL_THAList, ZC_TRAVEL_THAObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demoproject/demotravel') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_TRAVEL_THAList: ZC_TRAVEL_THAList,
			onTheZC_TRAVEL_THAObjectPage: ZC_TRAVEL_THAObjectPage
        },
        async: true
    });

    return runner;
});

