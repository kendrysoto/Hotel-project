import React from 'react';



class Hotel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.hotel.photo} alt={this.props.hotel.name} />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.hotel.name}</p>
                    <p>{this.props.hotel.description}</p>
                    <div className="field is-grouped is-grouped-multiline" style={{ marginTop: '1em' }}>
                        <div className="control">
                            <div className="tags has-addons">
                                <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                                <span className="tag is-medium">{this.props.hotel.city}, {this.props.hotel.country}</span>
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                                <span className="tag is-medium">{this.props.hotel.rooms} Habitaciones</span>
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags">
                                <span className="tag is-medium is-info">
                                    {Array.from(Array(this.props.hotel.price)).map(tagI => <i className="fas fa-dollar-sign" style={{ margin: '0 .125em' }}></i>)}
                                    {Array.from(Array(4 - this.props.hotel.price)).map(tagI => <i className="fas fa-dollar-sign" style={{ margin: '0 .125em', opacity: '.25' }}></i>)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        );
    }
}


export default Hotel;
