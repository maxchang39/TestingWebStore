// require js config
require.config({
    baseUrl:"js",
    
    paths:{
    	"vue":"lib/vue.min",
    	"shopify":["http://sdks.shopifycdn.com/js-buy-sdk/v0/latest/shopify-buy.umd.polyfilled.min"],
    	"jquery":"lib/jquery-3.2.1.min"
    }
});

require(["index"]);