var React = require('react');

var Form = React.createClass({
    handleChange: function(e){
        this.props.updateValue(e.target.name, e.target.value);
    },
    render: function() {
        return (
            <form className="col-md-6">
                <h1 className="page-header">Form</h1>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" name="title" value={this.props.title} ref="title" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>"Read More" Link</label>
                    <input className="form-control" type="url" name="readmore_link"/>
                </div>
                <div className="form-group">
                    <label>Image Url</label>
                    <input className="form-control" type="url" name="image"/>
                </div>
                <div className="form-group">
                    <label>Image Caption</label>
                    <input className="form-control" type="text" name="caption"/>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea className="form-control" name="body" rows="7"></textarea>
                </div>
            </form>
        );
    }

});

module.exports = Form;