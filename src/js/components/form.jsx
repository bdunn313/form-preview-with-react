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
                    <input className="form-control" type="text" name="title" value={this.props.title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>"Read More" Link</label>
                    <input className="form-control" type="url" name="readmore_link" value={this.props.readmore_link} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Image Url</label>
                    <input className="form-control" type="url" name="image" value={this.props.image} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea className="form-control" name="body" rows="7" value={this.props.body} onChange={this.handleChange}></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }

});

module.exports = Form;