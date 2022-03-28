import React, { useState } from 'react';
import { Form, Input, Button, Radio, Switch } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import DatosGenerales from './datosGenerales';


const IngresarPaciente = () => {
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
        <Button type="primary">Enviar</Button>
      </Form.Item>
    </Form>
  );
};

export default IngresarPaciente;
