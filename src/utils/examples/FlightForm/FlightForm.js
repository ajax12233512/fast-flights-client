import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Form, FieldArray, FormSection, Fields, SubmissionError } from 'redux-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import moment from 'moment';
import { isEqual, omit, functions } from 'lodash';

import FlightField from '../fields/flight_field';
import { connectWidgetForm } from './utils';
import messages from './flights_form.messages';
import { isBlank } from '~/app/lib/validation_helpers';
import Hint  from './hint';
import Title from './title';

import { checkFlights } from '~/app/api_actions'; // Import CheckFlights API actions

// Validate flight form data
function validate(values, props) {
  return {
    flights: values.flights.map((flight, index, flights) => {
      const previousFlight = index > 0 ? flights[index - 1] : undefined;
      let error = {};
      if (!flight.carrier) error.carrier = messages.errorEmpty;
      if (!flight.departureAirport) error.departureAirport = messages.errorEmpty;
      if (!flight.arrivalAirport) error.arrivalAirport = messages.errorEmpty;
      if (isBlank(flight.flightNumber)) error.flightNumber = messages.errorEmpty;
      if (flight.flightNumber && flight.flightNumber.length < 1) error.flightNumber = messages.errorEmpty;
      if (props.full && isBlank(flight.reservationNumber)) error.reservationNumber = messages.errorEmpty;
      if (isBlank(flight.date)) error.date = messages.errorEmpty;
      if (moment(flight.date).isAfter(moment(), 'day') && !props.allowFutureFlights) error.date = messages.errorDate;
      if (previousFlight && moment(flight.date) < moment(previousFlight.date)) error.date = messages.errorDate;
      return error;
    })
  };
}

function newFlight(flights) {
  const prevFlight = flights[flights.length - 1];
  if (prevFlight) {
    return {
      date: prevFlight.date,
      carrier: prevFlight.carrier,
      iata: prevFlight.carrier ? prevFlight.carrier.iata : '',
      departureAirport: prevFlight.arrivalAirport,
      reservationNumber: prevFlight.reservationNumber
    };
  }

  return {};
}

class FlightsForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.renderFlights = this.renderFlights.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const res = !isEqual(omit(this.props, functions(this.props)), omit(nextProps, functions(nextProps)));
    return res;
  }
  
  // Capture form submit event
  onSubmit(values, _, props) {
    const errors = { flights: values.flights.map(f => ({})) };
    const validFlights = new Array(values.flights.length);

    return Promise.all(values.flights.map((flight, index) => {
      return new Promise((succ, fail) => {
        checkFlights(flight, props.full ? 'full' : 'mini', (err, res) => {
          if (err) {
            const error = res.body.error;
            if (typeof error === 'object') {
              errors.flights[index] = error;
            } else {
              errors.flights[index].error = error;
            }
            fail(errors.flights[index]);
          } else {
            validFlights[index] = res.body;
            succ(validFlights[index]);
          }
        });
      });
    })).then(data => {
      this.props.onVariableSet(this.props.variable, validFlights);
      this.props.onNext();
    }).catch(err => {
      throw new SubmissionError(errors);
    });
  }

  renderFlights({ fields, meta, current }) {
    const { min, max, full, submitting, allowFutureFlights } = this.props;
    const count = fields.length;

    return (
      <div>
        {fields.map((flight, index) => {
          return (
            <FormSection key={index} name={flight}>
              {fields.length > 1 && index > 0 && <hr />}
              <Fields
                names={['carrier', 'departureAirport', 'arrivalAirport', 'flightNumber', 'date', 'iata'].concat(full ? ['reservationNumber'] : [])}
                component={FlightField}
                index={index}
                count={count}
                full={full}
                current={current}
                min={min}
                maxDate={allowFutureFlights ? undefined : moment()}
                messages={messages}
                remove={idx => this.removeFlight(fields, idx)}
                onCarrierChanged={value => this.carrierChanged({ value, index, fields })}
                onArrivalAirportChanged={value => this.arrivalAirportChanged({ value, index, fields })}
                onReservationNumberBlured={value => this.reservationNumberBlured({ value, index, fields })}
                onDateChanged={value => this.dateChanged({ value, index, fields })} />
            </FormSection>
          );
        })}

        {current && <div className="row">
          <div className="col-xs-12">
            {(!max || fields.length < max) &&
              <Button type="button" bsStyle="success" onClick={event => this.addFlight(fields)}><FormattedMessage {...messages.add} /></Button>}

            {fields.length >= min && fields.length <= max && <div className="pull-right" disabled={submitting}>
              <Button type="submit" bsStyle="primary">
                <i className="fa fa-send" /> <FormattedMessage {...messages.check} />
              </Button>
            </div>}
          </div>
        </div>}
      </div>
    );
  }

  render() {
    const { current, handleSubmit, title, locale, variable, hint, variables } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Title titleFor={variable} content={title} locale={locale} variables={variables} />
        <Hint content={hint} locale={locale} variables={variables} />
        <FieldArray name="flights" component={this.renderFlights} current={current} />
      </Form>
    );
  }

  addFlight(fields) {
    const flights = fields.getAll();
    fields.push(newFlight(flights));
  }

  removeFlight(fields, index) {
    fields.remove(index);
  }

  carrierChanged({ value, index, fields }) {
    const { autofill } = this.props;
    const next = index < fields.length - 1 ? fields.get(index + 1) : undefined;
    if (next && !next.carrier) {
      autofill(`flights[${index + 1}].carrier`, value);
      autofill(`flights[${index + 1}].iata`, value.iata);

      // Disabled for WCLM-223
      // if (value && value.iata && !next.flightNumber || !next.flightNumber.startsWith(value)) {
      //   autofill(`flights[${index + 1}].flightNumber`, value.iata);
      // }
    }
  }

  arrivalAirportChanged({ value, index, fields }) {
    const { autofill } = this.props;
    const next = index < fields.length - 1 ? fields.get(index + 1) : undefined;
    if (next) {
      autofill(`flights[${index + 1}].departureAirport`, value);
    }
  }

  reservationNumberBlured({ value, index, fields }) {
    const { autofill } = this.props;
    const next = index < fields.length - 1 ? fields.get(index + 1) : undefined;
    if (next && !next.reservationNumber) {
      autofill(`flights[${index + 1}].reservationNumber`, value);
    }
  }

  dateChanged({ value, index, fields }) {
    const { autofill } = this.props;
    const next = index < fields.length - 1 ? fields.get(index + 1) : undefined;
    if (next && !next.date) {
      autofill(`flights[${index + 1}].date`, value);
    }
  }
}

FlightsForm.propTypes = {
  title: PropTypes.object.isRequired,
  hint: PropTypes.object,
  locale: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formatMessage: PropTypes.func,
  submitting: PropTypes.bool.isRequired,
  current: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onVariableSet: PropTypes.func.isRequired,
  saveClaim: PropTypes.func.isRequired,
  variables: PropTypes.object.isRequired,
  variable: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  full: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
  autofill: PropTypes.func.isRequired,
  allowFutureFlights: PropTypes.bool
};

const mapStateToProps = (state, props) => {
  // const min = props.variables.directFlight ? 1 : 2;
  // const max = props.variables.directFlight ? 1 : 5;
  const min = 1;
  const max = 5;
  let flights = props.variableValue || [{ carrier: null, departureAirport: null, arrivalAirport: null, flightNumber: null, iata: null, reservationNumber: null, date: null }];
  if (max && flights.length && flights.length > max) flights = flights.splice(0, max);
  if (min && flights.length && flights.length < min)[Array(min - flights.length)].forEach((_, i) => flights.push(newFlight(flights)));
  const full = !!props.full;
  const allowFutureFlights = !!props.allowFutureFlights;
  return {
    initialValues: { flights },
    min,
    max,
    full,
    allowFutureFlights
  };
};

export default connectWidgetForm({
  validate
}, mapStateToProps)(injectIntl(FlightsForm));