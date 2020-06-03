import React from 'react';

class OptionsFilter extends React.Component {
    constructor(props) {
        super(props);

        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(newOption) {
        this.props.onOptionChange(newOption);
    }

    render() {
        const icon = `fas ${this.props.icon}`;
        const listOptions = this.props.options.map(opt => {
            return (
                <option value={opt.value} key={opt.value}>
                    {opt.name}
                </option>
            );
        });
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={{ width: '100%' }}>
                        <select
                            style={{ width: "100%" }}
                            value={this.props.selected}
                            onChange={this.handleDateChange}
                            name={this.props.name}
                        >
                            {listOptions}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>

        );
    }
}


export default OptionsFilter;
