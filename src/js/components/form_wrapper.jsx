var React = require('react');
var Form  = require('./form.jsx');
var Preview = require('./preview.jsx');

var FormWrapper = React.createClass({

    render: function() {
        return (
            <div className="row">
                <Form/>
                <Preview/>
            </div>
        );
    }

});

module.exports = FormWrapper;