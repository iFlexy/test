// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label144")
                .setLeft("10.08em")
                .setTop("7.413333333333333em")
                .setCaption("Angiorithm Prototype 1.0")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "1.25em"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon68")
                .setLeft("27.266666666666666em")
                .setTop("3.933333333333333em")
                .setWidth("6.666666666666667em")
                .setHeight("3.3333333333333335em")
                .setImageClass("fa fa-lg fa-american-sign-language-interpreting")
                .setIconFontSize("3em")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("15.933333333333334em")
                .setTop("15.266666666666667em")
                .setWidth("6.933333333333334em")
                .setHeight("2.6em")
                .setCaption("Open it")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.Options",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
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