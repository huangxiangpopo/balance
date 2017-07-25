var React = require('react');

require('../css/app.css');
var App = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={i}>{listItem}</li>;
  });

  return <div className="container">
  <h2 className="text-center">查找“平衡位”</h2>
  	<h3>请在下面输入框中输入一个整数数组,以逗号隔开,点击查找,输入框的下面将会显示数组“平衡位”的下标,如果没有,则返回“-1”;</h3>
  	<div className="row">
  		<div className="col-xs-8 col-sm-10 col-md-11">
  		<input type="text" className="form-control" value={props.arr} onChange={props.onChange}/>
  		</div>
  		<div className="col-xs-4 col-sm-2 col-md-1"><button className="btn btn-primary" onClick={props.onClick}>查找</button></div>
  	</div>
  	
  	
  			<ol>{itemHtml}</ol>
  	
    
    
  </div>;
};

module.exports = App;
