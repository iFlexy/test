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
                .setLeft("0em")
                .setTop("0em")
                .setWidth("39.86666666666667em")
                .setHeight("63.8em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput13")
                .setLeft("1.6666666666666667em")
                .setTop("1.6666666666666667em")
                .setWidth("18.9375em")
                .setHeight("4.5625em")
                .setPlaceholder("Input here...")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Vessel Size")
                .setLabelHAlign("left")
                .setValue("What color do you prefer?")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button26")
                .setLeft("22.5em")
                .setTop("33.25em")
                .setWidth("5em")
                .setCaption("选项")
                .setImageClass("fa fa-lg fa-plus")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput203")
                .setLeft("13.25em")
                .setTop("42.416666666666664em")
                .setWidth("15.833333333333334em")
                .setHeight("1.8333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("过期时间")
                .setType("counter")
                .setUnit("分钟")
                .setPrecision(0)
                .setValue(10)
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("1.875em")
                .setTop("6.875em")
                .setWidth("18.875em")
                .setCaption("Set the options")
                .setHAlign("left")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton2")
                .setLeft("5.933333333333334em")
                .setTop("35.93333333333333em")
                .setWidth("13.125em")
                .setHeight("2.5em")
                .setCaption("Send to participants")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            {
                                "tab" : "receive",
                                "ipage" : "receive"
                            }
                        ],
                        "method" : "setFI",
                        "event" : 1
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input29")
                .setLeft("4.666666666666667em")
                .setTop("12em")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input32")
                .setHoverPop("xui_ui_list22")
                .setLeft("22em")
                .setTop("8.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("hover pop")
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
                    },
                    {
                        "id" : "d",
                        "caption" : "",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : true
                    }
                ])
                .setLeft("29.933333333333334em")
                .setTop("9.933333333333334em")
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