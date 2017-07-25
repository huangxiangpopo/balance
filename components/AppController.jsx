var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var App = require('./App');

var AppController = React.createClass({
	getInitialState: function() {
		return {
			items: AppStore.getAll()
		};
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			items: AppStore.getAll()
		});
	},

	getIndex: function(arr) {
		if(arr.length <= 2) {
			return -1
		};

		var sum = arr.reduce(function(a, b) {
			return a + (b - 0);
		}, 0);

		var index = -1;
		arr.reduce(function(a, b, i) {
			if(b / 2 == a) {
				index = i;
			}
			return a - b;
		}, sum / 2);

		return index;
	},

	createNewItem: function(event) {
		var arr = this.state.arr;
		arr = arr.replace(/,$/, "");
		AppActions.addNewItem("数组[" + arr + "]的“平衡位”下标是：" + this.getIndex(arr.split(",")));
		this.setState({
			arr: ""
		});
	},

	inputChange: function(event) {
		var v = event.target.value;
		v = v.replace(/^,|[^\d,]/g, "").replace(/,+/g, ",");

		this.setState({
			arr: v
		});
	},

	render: function() {
		return <App
    	arr={this.state.arr}
    	onChange={this.inputChange}
      items={this.state.items}
      onClick={this.createNewItem}
    />;
	}

});

module.exports = AppController;