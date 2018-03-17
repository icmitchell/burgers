var orm = require("../config/orm.js");

var burger = {

	all: function(callB){
		orm.select("burgers", function(res){
			callB(res)
		});
	},

	new: function(cols, name, callB){
		orm.new("burgers", cols, name, function(res){
			callB(res)
		})
	},

	update: function(values, instance, callB) {
		orm.update("burgers", values, instance, function(res){
			callB(res);
		});
	}

}

module.exports = burger
