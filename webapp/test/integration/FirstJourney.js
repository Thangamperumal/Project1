sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_TRAVEL_THAList.iSeeThisPage();
            Then.onTheZC_TRAVEL_THAList.onTable().iCheckColumns(5, {"TravelId":{"header":"Travel ID"},"AgencyId":{"header":"Agency ID"},"CustomerId":{"header":"Customer ID"},"BeginDate":{"header":"Starting Date"},"EndDate":{"header":"End Date"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_TRAVEL_THAList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_TRAVEL_THAList.onTable().iCheckRows();

            When.onTheZC_TRAVEL_THAList.onTable().iPressRow(0);
            Then.onTheZC_TRAVEL_THAObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});