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
                .setLeft("12em")
                .setTop("29.333333333333332em")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input41")
                .setHoverPop("xui_ui_list43")
                .setLeft("8.666666666666666em")
                .setTop("16.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Sheath Size")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input60")
                .setHoverPop("xui_ui_list70")
                .setLeft("10.066666666666666em")
                .setTop("20.733333333333334em")
                .setWidth("19.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Arterial Bifurcation")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input67")
                .setHoverPop("xui_ui_list81")
                .setLeft("10.066666666666666em")
                .setTop("24.733333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Inguinal Ligament Location")
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
                        "caption" : "< 5 mm",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "5 mm",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "> 5 mm",
                        "imageClass" : "xui-icon-number3"
                    }
                ])
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_list22",
                        "args" : [ ],
                        "method" : "show",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list22")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "< 5 mm",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "5 mm",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "> 5 mm",
                        "imageClass" : "xui-icon-number3"
                    }
                ])
                .setLeft("18.6em")
                .setTop("9.933333333333334em")
                .setHeight("7em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc" : "set value",
                        "type" : "control",
                        "target" : "xui_ui_comboinput392",
                        "args" : [
                            "{page.xui_ui_comboinput392.setUIValue()}",
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
                        "target" : "xui_ui_list22",
                        "args" : [ ],
                        "method" : "hide"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list43")
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
                        "caption" : "> 8 Fr",
                        "imageClass" : "xui-icon-number5"
                    }
                ])
                .setLeft("8.6em")
                .setTop("7.933333333333334em")
                .setHeight("11em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc" : "set value",
                        "type" : "control",
                        "target" : "xui_ui_input41",
                        "args" : [
                            "{page.xui_ui_input41.setUIValue()}",
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
                        "target" : "xui_ui_list43",
                        "args" : [ ],
                        "method" : "hide"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list70")
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
                .setTop("11.933333333333334em")
                .setHeight("5em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc" : "set value",
                        "type" : "control",
                        "target" : "xui_ui_input60",
                        "args" : [
                            "{page.xui_ui_input60.setUIValue()}",
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
                        "target" : "xui_ui_list70",
                        "args" : [ ],
                        "method" : "hide"
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