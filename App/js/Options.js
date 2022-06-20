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
                .setHost(host,"xui_ui_input32")
                .setHoverPop("xui_ui_list22")
                .setLeft("0.6em")
                .setTop("2.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Vessel Size")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input41")
                .setHoverPop("xui_ui_list43")
                .setLeft("0.6em")
                .setTop("6.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Sheath Size")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input60")
                .setHoverPop("xui_ui_list70")
                .setLeft("2em")
                .setTop("10.666666666666666em")
                .setWidth("19.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Arterial Bifurcation")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input67")
                .setHoverPop("xui_ui_list81")
                .setLeft("2em")
                .setTop("14.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Inguinal Ligament Location")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput364")
                .setLeft("5.333333333333333em")
                .setTop("22.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Drop List Input")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item 2",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "item 3",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "d",
                        "caption" : "item 4",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : true
                    }
                ])
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_list108",
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
                .setLeft("8.6em")
                .setTop("3.933333333333333em")
                .setHeight("7em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc" : "set value",
                        "type" : "control",
                        "target" : "xui_ui_input32",
                        "args" : [
                            "{page.xui_ui_input32.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[1] caption}"
                        ],
                        "method" : "setUIValue",
                        "redirection" : "other:callback:call",
                        "event" : 2
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
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list108")
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
                .setLeft("13.266666666666667em")
                .setTop("23.933333333333334em")
                .setHeight("11em")
                .setVisibility("hidden")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc" : "set value",
                        "type" : "control",
                        "target" : "xui_ui_comboinput364",
                        "args" : [
                            "{page.xui_ui_comboinput364.setUIValue()}",
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
                        "target" : "xui_ui_list108",
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