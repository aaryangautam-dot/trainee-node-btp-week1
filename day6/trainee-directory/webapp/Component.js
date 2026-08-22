sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./model/models"
], function (UIComponent, JSONModel, models) {
    "use strict";

    return UIComponent.extend("trainee.directory.traineedirectory.Component", {

        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);

            // Device model
            this.setModel(models.createDeviceModel(), "device");

            // Employee JSON model
            const oModel = new JSONModel(
                sap.ui.require.toUrl(
                    "trainee/directory/traineedirectory/model/employees.json"
                )
            );

            this.setModel(oModel, "employees");

            // Routing
            this.getRouter().initialize();
        }

    });
});