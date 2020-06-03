import React from 'react';


class DateFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(event) {
        this.props.onDateChange(event);
    }

    formatDate() {
        let date = ""
        let dateObj = new Date(this.props.date)
        if (dateObj.getMonth() < 9) {
            date = dateObj.getFullYear() +
                "-" + "0" + (dateObj.getMonth() + 1) +
                "-" + dateObj.getDate()
        } else {
            date = dateObj.getFullYear() +
                "-" + (dateObj.getMonth() + 1) +
                "-" + dateObj.getDate()
        }
        if (dateObj.getDate() < 10) {
            date = dateObj.getFullYear() +
                "-" + (dateObj.getMonth() + 1) +
                "-" + "0" + dateObj.getDate()
        }
    }

    render() {
        let icon = `fas ${this.props.icon}`;
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date"
                        className="input"
                        type="date"
                        onChange={this.handleDateChange}
                        value={this.formatDate()}
                        name={this.props.name}
                    />
                    <span className="icon is-small is-left">
                        <i className={icon}></i>
                    </span>
                </div>
            </div>

        );
    }
}






export default DateFilter;
