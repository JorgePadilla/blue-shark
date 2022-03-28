import { pacienteGetAllValidator, pacientePostValidator } from "api/paciente/v1/paciente.validator";
import { pacienteGetAllHandler } from "./handler/paciente.getAll";
import { pacientePostHandler } from "./handler/paciente.post";

export const routes: CommonRoute[] = [
 {
    path: '/pacientes',
    method: 'get',
    auth: true,
    validator: pacienteGetAllValidator,
    handler: pacienteGetAllHandler,   
 },
 {
    path: '/paciente',
    method: 'post',
    permission: ['admin'],
    validator: pacientePostValidator,
    handler: pacientePostHandler,
 }
]