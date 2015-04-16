var React = require('react');
var util  = require('../utilities.js');

var Preview = React.createClass({

    render: function() {
        var image = util.ifExists(this.props.image, 'http://placehold.it/900x300&text=Placeholder+Image'),
            body  = util.ifExists(this.props.body, `Footage knife cardboard tower geodesic military-grade shrine market
                                                    Kowloon Chiba. Math-claymore mine artisanal camera Shibuya vinyl crypto-media
                                                    into concrete sprawl. Decay alcohol 8-bit euro-pop smart-urban claymore mine
                                                    singularity courier. Sub-orbital claymore mine urban artisanal tiger-team dead
                                                    nodality man sunglasses advert corporation monofilament apophenia faded franchise.
                                                    Augmented reality crypto-media sentient wonton soup tanto artisanal film bicycle
                                                    assassin spook fetishism neon nodality boat. `),
            title = util.ifExists(this.props.title, 'Title'),
            readmore_link = util.ifExists(this.props.readmore_link, 'http://google.com');

        return (
            <div className="col-md-6">
                <h1 className="page-header">Preview</h1>
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h1 className="panel-title">{title}</h1>
                    </div>

                    <img src={image} className="img-responsive"/>

                    <div className="panel-body">
                        <p>{body}</p>
                        <p>
                            <a className="btn btn-danger btn-preview-read-more" href={readmore_link} target="_blank">Read More</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Preview;