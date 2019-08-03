import React, {Component} from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import moment from 'moment';
import "./style.css";

class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment()
        }
    }

    render() {
        return (
            <div className="calendar-div">
              <Calendar/>
            </div>
        )
    }
}

export default CalendarComponent;