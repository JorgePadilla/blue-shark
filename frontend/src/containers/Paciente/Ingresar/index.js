import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Input, Button, Switch } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import DatosGenerales from './datosGenerales';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { postPacientesAction } from '../paciente.actions';
import reducer from '../paciente.saga';
import saga from '../paciente.saga';
import { makeSelectPrimerNombre, makeSelectSegundoNombre } from '../paciente.selectors';

const key = 'paciente';

function IngresarPaciente(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [value, setValue] = useState({ short: 'HN' });

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 8,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  function onSwitchChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >
     <DatosGenerales/>
      
      <Form.Item label="Datos de contacto"></Form.Item>

      <Form.Item label="Es mayor de 18 años">
        <Switch defaultChecked onChange={onSwitchChange} />
      </Form.Item>
      <Form.Item label="Persona encargada">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Domicilio completo">
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item label="Teléfono fijo">
        <CountryPhoneInput
          value={value}
          onChange={v => {
            setValue(v);
          }}
        />
      </Form.Item>
      <Form.Item label="Teléfono celular">
        <CountryPhoneInput
          value={value}
          onChange={v => {
            setValue(v);
          }}
        />
      </Form.Item>

      <Form.Item  label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Acepta notificaciones por email">
        <Switch defaultChecked onChange={onSwitchChange} />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={props.postPaciente}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  primerNombre: makeSelectPrimerNombre(),
  segundoNombre: makeSelectSegundoNombre(),
});

const mapDispatchToProps = dispatch => ({
  postPaciente: () => dispatch(postPacientesAction())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(IngresarPaciente);
