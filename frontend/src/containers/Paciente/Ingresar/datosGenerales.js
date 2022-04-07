import React, { useState, useMemo, memo }  from 'react';
import Select from 'react-select';
import { Form, Input, Radio } from 'antd';
import { DatePicker } from 'antd';
import countryList from 'react-select-country-list';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { onChangePrimerNombreAction } from '../paciente.actions';

import {
  makeSelectPrimerNombre,
} from '../paciente.selectors';

function DatosGenerales(props) {
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }
  
    return <Select options={options} value={value} onChange={changeHandler} />
  }
  
  return (
    <>
      <Form.Item label="Datos Generales"></Form.Item>
      <Form.Item label="Primer nombre">
        <Input placeholder="Primer nombre" onChange={props.onChangePrimerNombre} value={props.primerNombre} />
      </Form.Item>
      <Form.Item label="Segundo nombre">
        <Input placeholder="Segundo nombre" />
      </Form.Item>
      <Form.Item label="Primer apellido">
        <Input placeholder="Primer apellido" />
      </Form.Item>
      <Form.Item label="Segundo apellido">
        <Input placeholder="Segundo apellido" />
      </Form.Item>
      <Form.Item label="Nombre preferido">
        <Input placeholder="Nombre preferido" />
      </Form.Item>
      <Form.Item label="Sexo">
        <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="a">Masculino</Radio.Button>
          <Radio.Button value="b">Femenino</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Fecha de nacimiento">
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item label="Numero de identidad">
        <Input placeholder="Numero de identidad" />
      </Form.Item>
      <Form.Item label="Nacionalidad">
      <CountrySelector/>
      </Form.Item>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectPrimerNombre(),
});
DatosGenerales.prototypes = {
  primerNombre: PropTypes.string,
}

const mapDispatchToProps = dispatch => ({
  onChangePrimerNombre: e => dispatch(onChangePrimerNombreAction(e.target.value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DatosGenerales);
