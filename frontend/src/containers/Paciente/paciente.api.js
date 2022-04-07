import request from 'utils/request';

export function postPacientesAPI(payload){
  const formData = new FormData();
  formData.set('primerNombre', payload.primerNombre);
  formData.set('segundoNombre', payload.segundoNombre);
  
  return request.post('api/v1/pacientes',payload)
}