//jQuery.sap.declare("sap.demo2020.Component");
jQuery.sap.registerModulePath("sap.demo2020.Component", "/sap/bc/ui5_ui5/sap/zbinding_under");
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel ) {
    "use strict";
    return UIComponent.extend("sap.demo2020.Component", {
 
    metadata : {
             manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          
       } 
       
       
       
    });
 });