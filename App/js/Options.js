// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.Options', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div19")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("-0.06666666666666667em")
                .setTop("-0.06666666666666667em")
                .setWidth("39.86666666666667em")
                .setHeight("63.8em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton2")
                .setLeft("13.333333333333334em")
                .setTop("40.666666666666664em")
                .setWidth("13.125em")
                .setHeight("2.5em")
                .setCaption("Submit")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [ ],
                        "method" : "pop",
                        "event" : 1
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput392")
                .setLeft("10.666666666666666em")
                .setTop("8.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Vessel Size")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "<5 mm",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "5 mm",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : ">5 mm",
                        "imageClass" : "xui-icon-number3"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput429")
                .setLeft("10.666666666666666em")
                .setTop("14em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Sheath Size")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "5 Fr",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "6 Fr",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "7 Fr",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "d",
                        "caption" : "8 Fr",
                        "imageClass" : "xui-icon-number4"
                    },
                    {
                        "id" : "e",
                        "caption" : ">8 Fr",
                        "imageClass" : "xui-icon-number5"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput448")
                .setLeft("10.666666666666666em")
                .setTop("19.333333333333332em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Arterial Bifurcation")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Above",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Below",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput455")
                .setLeft("10.666666666666666em")
                .setTop("24.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Inguinal Ligament Location")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Above",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Below",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput460")
                .setLeft("10.666666666666666em")
                .setTop("29.333333333333332em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Calcification of Vessel")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Yes",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "No",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput476")
                .setLeft("10.666666666666666em")
                .setTop("34em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Medications")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Warfarin",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Bivalirudin",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "Heparin",
                        "imageClass" : "xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list81")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Above",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Below",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setLeft("9.933333333333334em")
                .setTop("15.933333333333334em")
                .setHeight("5em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc" : "set value",
                        "type" : "control",
                        "target" : "xui_ui_input67",
                        "args" : [
                            "{page.xui_ui_input67.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[1]caption}"
                        ],
                        "method" : "setUIValue",
                        "event" : 2,
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "hide self",
                        "type" : "control",
                        "target" : "xui_ui_list81",
                        "args" : [ ],
                        "method" : "hide"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});