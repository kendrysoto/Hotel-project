import React from 'react';
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';



class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleDateChange(event) {
        let payload = this.props.filters;
        if (
            !(
                (event.target.name === "dateTo" &&
                    new Date(event.target.value.concat("", "T00:00:00")) <
                    this.props.filters.dateFrom) ||
                (event.target.name === "dateFrom" &&
                    new Date(event.target.value.concat("", "T00:00:00")) >
                    this.props.filters.dateTo)
            )
        ) {
            payload[event.target.name] = new Date(
                event.target.value.concat("", "T00:00:00")
            );
        }
        this.props.onFilterChange(payload);
    }
    handleOptionChange(event) {
        let payload = this.props.filters;
        payload[event.target.name] = /^\d+$/.test(event.target.value)
            ? parseInt(event.target.value)
            : event.target.value;
        this.props.onFilterChange(payload);
    }

    render() {
        return (
            <nav className="navbar is-info" style={{ justifyContent: "center" }}>
                <div className="navbar-item">
                    <DateFilter
                        onDateChange={this.handleDateChange}
                        name={"dateFrom"}
                        date={this.props.filters.dateFrom}
                        icon="fa-sign-in-alt"
                    />
                </div>
                <div className="navbar-item">
                    <DateFilter
                        onDateChange={this.handleDateChange}
                        name={"dateTo"}
                        date={this.props.filters.dateTo}
                        icon="fa-sign-out-alt"
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        options={[
                            { value: "", name: "Todos los países" },
                            { value: "Argentina", name: "Argentina" },
                            { value: "Brasil", name: "Brasil" },
                            { value: "Chile", name: "Chile" },
                            { value: "Uruguay", name: "Uruguay" }
                        ]}
                        selected={this.props.filters.country}
                        icon="fa-globe"
                        onOptionChange={this.handleOptionChange}
                        name={"country"}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        options={[
                            { value: 0, name: "Cualquier precio" },
                            { value: 1, name: "$" },
                            { value: 2, name: "$$" },
                            { value: 3, name: "$$$" },
                            { value: 4, name: "$$$$" }
                        ]}
                        selected={this.props.filters.price}
                        icon="fa-dollar-sign"
                        onOptionChange={this.handleOptionChange}
                        name={"price"}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        options={[
                            { value: 0, name: "Cualquier tamaño" },
                            { value: 10, name: "Hotel pequeño" },
                            { value: 20, name: "Hotel mediano" },
                            { value: 30, name: "Hotel grande" }
                        ]}
                        selected={this.props.filters.rooms}
                        icon="fa-bed"
                        onOptionChange={this.handleOptionChange}
                        name={"rooms"}
                    />
                </div>
            </nav>
        );
    }
}



export default Filters;
