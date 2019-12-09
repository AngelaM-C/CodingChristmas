import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CalendarWrapper = styled.div`
margin: auto;
padding: 50px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
 
export class Calendar extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


 
  render() {
    return (
    <CalendarWrapper>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    </CalendarWrapper>
    );
  }
}

export default Calendar;