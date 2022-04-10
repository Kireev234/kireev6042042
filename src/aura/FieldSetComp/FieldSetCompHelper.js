/**
 * Created by akireyeu on 11.07.2019.
 */
({
    configMap: {
        "string": {
            componentDef: "lightning:input",
            attributes: {"class" : "slds-input container"}},
        "checkbox": {
            componentDef: "lightning:input",
            attributes: {"class" : "slds-checkbox__label"}},
        "button" : {
            componentDef : "lightning:button",
            attributes : {"variant" : "brand",
                "iconName" : "utility:automate",
                "label" : "Submit Form"}},
        "picklist" : {
            componentDef : "ui:inputSelect",
            attributes : {"class" : "slds-select slds-select_container container"}},
        "multipicklist" : {
            componentDef : "lightning:dualListbox",
            attributes : {"sourceLabel" : "Available Options",
                "selectedLabe" : "Selected Options",
                "readonly" : false}},
        "textarea" : {componentDef : "lightning:textarea", attributes : {"class" : "slds-input container"}},
    },
    getFieldSet: function (cmp, event, helper) {
        console.log('*****');
        var objectName = cmp.get("v.objectName");
        var fieldSetName = cmp.get("v.fieldSetName");
        var action = cmp.get("c.getFields");
        action.setParams({
            "sObjectName": objectName,
            "fieldSetName" : fieldSetName
        });
        action.setCallback(this, function (response) {
            var fieldSetMember = JSON.parse(response.getReturnValue());
            cmp.set('v.listFieldSet', fieldSetMember);
            console.log('listFieldSet ',fieldSetMember);
            this.createForm(cmp, event, helper, fieldSetMember);
        });
        $A.enqueueAction(action);
    },
    createForm : function(component, event, helper, fieldSetMember){
        // Create a map with availale inputs and according to this use the global map.
        var lightningInputMap = new Map();
        lightningInputMap.set('string','string');
        lightningInputMap.set('checkbox','checkbox');
        lightningInputMap.set('date','date');
        lightningInputMap.set('datetime','datetime');
        lightningInputMap.set('email','email');
        lightningInputMap.set('file','file');
        lightningInputMap.set('password','password');
        lightningInputMap.set('search','search');
        lightningInputMap.set('tel','tel');
        lightningInputMap.set('url','url');
        lightningInputMap.set('number','number');
        lightningInputMap.set('radio','radio');

        // list of components to create and put into the component body..
        var inputDesc = [];
        var config = null;

        /*
         * parse the FieldSet members and then create the members dynamically
         * and put those components into the component.
         */
        for(var i=0; i < fieldSetMember.length; i++){
            var objectName = component.getReference("v.sObjectName");
            if(lightningInputMap.has(fieldSetMember[i].fieldType.toLowerCase())){
                config = JSON.parse(
                    JSON.stringify(this.configMap['string'])
                );
                if(config){
                    config.attributes.label = fieldSetMember[i].fieldLabel;
                    config.attributes.type = fieldSetMember[i].fieldType;
                    config.attributes.required =
                        fieldSetMember[i].isRequired || fieldSetMember[i].isDBRequired;
                    config.attributes.value =
                        component.getReference('v.sObjectName.' + fieldSetMember[i].fieldAPIName);
                    inputDesc.push([
                        config.componentDef,
                        config.attributes
                    ]);
                }
            }else{
                if(fieldSetMember[i].fieldType.toLowerCase() === 'integer'){
                    config = JSON.parse(
                        JSON.stringify(this.configMap['string'])
                    );
                    config.attributes.label = fieldSetMember[i].fieldLabel;
                    config.attributes.type = 'number';
                    config.attributes.required =
                        fieldSetMember[i].isRequired || fieldSetMember[i].isDBRequired;
                    config.attributes.value =
                        component.getReference('v.sObjectName.' + fieldSetMember[i].fieldAPIName);
                    inputDesc.push([
                        config.componentDef,
                        config.attributes
                    ]);
                }else if(fieldSetMember[i].fieldType.toLowerCase() === 'phone'){
                    config = JSON.parse(
                        JSON.stringify(this.configMap['string'])
                    );
                    config.attributes.label = fieldSetMember[i].fieldLabel;
                    config.attributes.type = 'tel';
                    config.attributes.required =
                        fieldSetMember[i].isRequired || fieldSetMember[i].isDBRequired;
                    config.attributes.value =
                        component.getReference('v.sObjectName.' + fieldSetMember[i].fieldAPIName);

                    inputDesc.push([
                        config.componentDef,
                        config.attributes
                    ]);
                }else if(fieldSetMember[i].fieldType.toLowerCase() === 'textarea'){
                    config = JSON.parse(
                        JSON.stringify(this.configMap['textarea'])
                    );
                    config.attributes.label = fieldSetMember[i].fieldLabel;
                    config.attributes.name = fieldSetMember[i].fieldLabel;

                    config.attributes.required =
                        fieldSetMember[i].isRequired || fieldSetMember[i].isDBRequired;
                    config.attributes.value =
                        component.getReference('v.sObjectName.' + fieldSetMember[i].fieldAPIName);

                    inputDesc.push([
                        config.componentDef,
                        config.attributes
                    ]);
                }else if(fieldSetMember[i].fieldType.toLowerCase() === 'picklist'){
                    config = JSON.parse(
                        JSON.stringify(this.configMap['picklist'])
                    );
                    config.attributes.label = fieldSetMember[i].fieldLabel;
                    config.attributes.name = fieldSetMember[i].fieldLabel;
                    var pickList = fieldSetMember[i].pickListValues;
                    var options = [];
                    for(var k=0; k<pickList.length; k++){
                        if(pickList[k].active){
                            options.push({
                                value : pickList[k].value,
                                label : pickList[k].label
                            });
                        }
                    }
                    config.attributes.options = options;
                    config.attributes.required =
                        fieldSetMember[i].isRequired || fieldSetMember[i].isDBRequired;
                    config.attributes.value =
                        component.getReference('v.sObjectName.' + fieldSetMember[i].fieldAPIName);

                    inputDesc.push([
                        config.componentDef,
                        config.attributes
                    ]);
                }else if(fieldSetMember[i].fieldType.toLowerCase() === 'multipicklist'){
                    config = JSON.parse(
                        JSON.stringify(this.configMap['multipicklist'])
                    );
                    config.attributes.label = fieldSetMember[i].fieldLabel;
                    config.attributes.name = fieldSetMember[i].fieldLabel;
                    var pickList = fieldSetMember[i].pickListValues;
                    var options = [];
                    for(var k=0; k<pickList.length; k++){
                        if(pickList[k].active){
                            options.push({
                                value : pickList[k].value,
                                label : pickList[k].label
                            });
                        }
                    }
                    config.attributes.options = options;
                    config.attributes.required =
                        fieldSetMember[i].isRequired || fieldSetMember[i].isDBRequired;
                    config.attributes.value =
                        component.getReference('v.sObjectName.' + fieldSetMember[i].fieldAPIName);
                    /*
                    inputDesc.push([
                        config.componentDef,
                        config.attributes
                    ]);*/
                }
            }
        }
        var newConfig = JSON.parse(
            JSON.stringify(this.configMap['button'])
        );
        //newConfig.attributes.onclick = component.getReference("c.handlePress");

        inputDesc.push([
            newConfig.componentDef,
            newConfig.attributes
        ]);

        $A.createComponents(inputDesc,
            function(components, status, errorMessage){
                if (status === "SUCCESS") {
                    var form = [];
                    for(var j=0; j < components.length; j++){
                        form.push(components[j]);
                    }
                    component.set("v.theForm", form);
                }else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.");
                }else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    console.log(errorMessage);
                }
            }
        );
    },
})