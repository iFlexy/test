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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label19")
                .setSpaceUnit("px")
                .setLeft("130px")
                .setTop("30px")
                .setWidth("334px")
                .setHeight("47px")
                .setCaption("Angiorithm")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#4B0082",
                        "font-family" : "comic sans ms,cursive",
                        "font-size" : "2em",
                        "font-weight" : "bold",
                        "text-shadow" : "0px 0px 9px #DA70D6",
                        "opacity" : 0.8
                    }
                })
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput489")
                .setRequired(true)
                .setLeft("10.666666666666666em")
                .setTop("6.666666666666667em")
                .setWidth("21.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Type of Vessel")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Common Femoral Artery",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Superficial Femoral Artery",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "Deep Femoral Artery",
                        "imageClass" : "xui-icon-number3"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput392")
                .setRequired(true)
                .setLeft("10.666666666666666em")
                .setTop("11.333333333333334em")
                .setWidth("21.333333333333332em")
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
                .setRequired(true)
                .setLeft("10.666666666666666em")
                .setTop("16.666666666666668em")
                .setWidth("21.333333333333332em")
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
                .setRequired(true)
                .setLeft("10em")
                .setTop("22em")
                .setWidth("22em")
                .setLabelSize("9em")
                .setLabelGap("0.26666666666666666em")
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
                .setRequired(true)
                .setLeft("6em")
                .setTop("27.333333333333332em")
                .setWidth("26em")
                .setLabelSize("13em")
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
                .setRequired(true)
                .setLeft("8.666666666666666em")
                .setTop("32em")
                .setWidth("23.333333333333332em")
                .setLabelSize("10em")
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
                .setRequired(true)
                .setLeft("6.666666666666667em")
                .setTop("36.666666666666664em")
                .setWidth("25.333333333333332em")
                .setLabelSize("12em")
                .setLabelCaption("Use of Antiplatelets")
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
                xui.create("xui.UI.Button")
                .setHost(host,"submit")
                .setLeft("13.333333333333334em")
                .setTop("56.666666666666664em")
                .setWidth("13.125em")
                .setHeight("2.5em")
                .setCaption("Submit")
                .onClick([
                    {
                        "desc" : "Action 3",
                        "type" : "control",
                        "target" : "xui_ui_comboinput476",
                        "args" : [
                            "{page.xui_ui_comboinput476.getUIValue()}"
                        ],
                        "method" : "getUIValue",
                        "event" : 1,
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Angiorithm",
                            "Input"
                        ],
                        "method" : "pop",
                        "event" : 1,
                        "conditions" : [
                            {
                                "left" : "{page.xui_ui_comboinput476}",
                                "symbol" : "empty",
                                "right" : ""
                            }
                        ]
                    },
                    "_submit_onclick"
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput100")
                .setRequired(true)
                .setLeft("4.666666666666667em")
                .setTop("46em")
                .setWidth("27.333333333333332em")
                .setLabelSize("14em")
                .setLabelCaption("Activated Clotting Time (ACT)")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "≤300 seconds",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : ">300 seconds",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput105")
                .setRequired(true)
                .setLeft("2em")
                .setTop("51.333333333333336em")
                .setWidth("30em")
                .setLabelSize("17em")
                .setLabelCaption("International Normalised Ratio (INR)")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "≤1.5",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : ">1.5",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput76")
                .setRequired(true)
                .setLeft("6.666666666666667em")
                .setTop("41.333333333333336em")
                .setWidth("25.333333333333332em")
                .setLabelSize("12em")
                .setLabelCaption("Use of DOAC")
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
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
        // Give a chance to determine which UI controls will be appended to parent container
        //customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
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