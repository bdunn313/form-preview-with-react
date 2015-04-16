var React = require('react');

var Preview = React.createClass({

    render: function() {
        return (
            <div className="col-md-6">
                <h1 className="page-header">Preview</h1>
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h1 className="panel-title">Title</h1>
                    </div>

                    <img src="http://placehold.it/900x300&text=Placeholder+Image" className="img-responsive"/>

                    <div className="panel-body">
                        <p>
                            Smart-engine alcohol nodal point urban shanty town warehouse ablative.
                            Geodesic Shibuya industrial grade apophenia A.I. kanji crypto-wonton soup singularity
                            soul-delay assassin nodal point franchise Legba receding rebar. Vehicle warehouse
                            Chiba RAF 3D-printed free-market otaku construct tiger-team realism tanto jeans cyber.
                            Semiotics knife Legba towards vehicle franchise modem sensory otaku free-market long-chain hydrocarbons.
                            Systemic jeans range-rover rebar concrete RAF crypto. Dolphin 8-bit construct skyscraper media j-pop
                            shrine neon free-market-ware youtube savant augmented reality dissident.
                        </p>
                        <p>
                            <a className="btn btn-danger btn-preview-read-more" href="#" target="_blank">Read More</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Preview;