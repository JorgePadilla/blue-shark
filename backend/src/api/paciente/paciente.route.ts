import { pacienteGetAllValidator, pacientePostValidator } from "api/paciente/v1/paciente.validator";
import { pacienteGetAllHandler } from "./v1/handler/paciente.getAll";
import { pacientePostHandler } from "./v1/handler/paciente.post";

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
    permission: ['admin'],
    validator: pacientePostValidator,
    handler: pacientePostHandler,
 }
]