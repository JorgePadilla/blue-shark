import { pacienteGetAllValidator, pacientePostValidator } from "./paciente.validator";
import { pacienteGetAllHandler } from "./handler/paciente.getAll";
import { pacientePostHandler } from "./handler/paciente.post";
import { imageUpload } from 'utils/upload';

export const routes: CommonRoute[] = [
 {
    path: '/pacientes',
    method: 'get',
    auth: true,
    validator: pacienteGetAllValidator,
    handler: pacienteGetAllHandler,   
 },
 {
   path: '/pacientes',
   method: 'post',
   auth: true,
   permission: ['admin'],
   upload: imageUpload.single('photo'),
   validator: pacientePostValidator,
   handler: pacientePostHandler,
 }
];