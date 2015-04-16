var React = require('react');
var Form  = require('./form.jsx');
var Preview = require('./preview.jsx');

var FormWrapper = React.createClass({
    getInitialState: function(){
        return {
            title: '',
            readmore_link: '',
            image: '',
            body: ''
        };
    },
    updateValue: function(key, value) {
        var newState = {};
        newState[key] = value;
        this.setState(newState);
    },
    render: function() {
        return (
            <div className="row">
                <Form
                    title={this.state.title}
                    updateValue={this.updateValue}/>
                <Preview
                    title={this.state.title}/>
            </div>
        );
    }

});

module.exports = FormWrapper;