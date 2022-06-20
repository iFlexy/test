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
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon68")
                .setLeft("15em")
                .setTop("0.8333333333333334em")
                .setWidth("6.666666666666667em")
                .setHeight("3.3333333333333335em")
                .setImageClass("fa fa-lg fa-american-sign-language-interpreting")
                .setIconFontSize("3em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label144")
                .setLeft("10.5em")
                .setTop("2.6666666666666665em")
                .setCaption("Prototype")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "1.25em"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper1")
                .setLeft("4.6em")
                .setTop("6.6em")
                .setWidth("33.125em")
                .setHeight("22.6875em")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"xui_ui_icon37")
                .setLeft("19.3125em")
                .setTop("2.0833333333333335em")
                .setImageClass("fa fa-lg fa-users")
                .setIconFontSize("3em")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label107")
                .setLeft("24.3125em")
                .setTop("3.6875em")
                .setCaption("Participants")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"xui_svg_path1")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path" : "M,230,5L,230,340",
                    "stroke" : "#004A7F",
                    "fill" : "#ffffff",
                    "stroke-dasharray" : "-."
                })
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.rectComb")
                .setHost(host,"xui_svg_rectcomb23")
                .setSvgTag("FlowChart:Process")
                .setAttr({
                    "KEY" : {
                        "x" : 160,
                        "y" : 140,
                        "width" : 120,
                        "height" : 40,
                        "fill" : "90-#FF9A9A:0-#FF4040:50-#FF6767:100",
                        "stroke" : "#004A7F",
                        "cursor" : "pointer"
                    },
                    "TEXT" : {
                        "text" : "Open it",
                        "font-size" : "14px",
                        "fill" : "#fff",
                        "font-weight" : "bold",
                        "cursor" : "pointer"
                    }
                })
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