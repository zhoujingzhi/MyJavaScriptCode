require.config({
    baseUrl:'.',
    paths:{
        "jquery":"lib/jquery-3.1.1",
        "jsPlumb":"lib/jquery.jsPlumb-1.7.2",
        "jquery-ui":"lib/jquery-ui-1.11.2.min",
        
    },
    shim:{
        "jsPlumb":{
            deps:["jquery","jquery-ui"]
        },

    }
})
requirejs(["js/index"], function() {
    
});