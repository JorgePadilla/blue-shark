import React from 'react';
import { Form, Input, Radio } from 'antd';
import { DatePicker } from 'antd';

const DatosGenerales = () => {
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  return (
    <>
      <Form.Item label="Datos Generales"></Form.Item>
      <Form.Item label="Primer nombre">
        <Input placeholder="Primer nombre" />
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
    </>
  );
};

export default DatosGenerales;
