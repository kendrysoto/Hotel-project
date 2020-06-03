import React from 'react';
import './App.css';
import Hero from './components/Hero';
import hotelsData from './scripts/Data';
import Filters from './components/Filters';
import today from './scripts/Data';
import Hotels from './components/Hotels';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
        dateFrom: new Date(),
        dateTo: new Date(),
        country: "",
        price: 0,
        rooms: 0
      },
      hotels: hotelsData.filter(hotel => {
        return (
          hotel.availabilityFrom >= today.valueOf() &&
          new Date(today.valueOf() + 86400000 <= hotel.availabilityTo).valueOf()
        );
      })
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  handleFilterChange(payload) {
    this.setState({
      filters: payload,
      hotels: hotelsData.filter(hotel => {
        return (
          hotel.availabilityFrom >= payload.dateFrom.valueOf() &&
          payload.dateTo.valueOf() <= hotel.availabilityTo &&
          (hotel.country === payload.country || !payload.country) &&
          (hotel.price === payload.price || !payload.price) &&
          (hotel.rooms >= payload.rooms || !payload.rooms)
        );
      })
    });
  }
  render() {
    return (
      <div>
        <Hero filters={this.state.filters} />
        <Filters
          filters={this.state.filters}
          onFilterChange={this.handleFilterChange}
        />
        <Hotels data={this.state.hotels} />
      </div>
    );
  }
}


export default App;
