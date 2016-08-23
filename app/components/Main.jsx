var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// })

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="small-centered medium-6 large-4 columns">
          {props.children}
        </div>
      </div>
    </div>
  )
};

 /* note 'this' has been removed due to 'props' being an argument */

module.exports = Main;
