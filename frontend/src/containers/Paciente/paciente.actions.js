import {
    GET_PACIENTES_REQUEST,
    GET_PACIENTES_FAILURE,
    GET_PACIENTES_SUCCESS,
    POST_PACIENTES_REQUEST,
    POST_PACIENTES_SUCCESS,
    POST_PACIENTES_FAILURE,
    ON_CHANGE_PRIMER_NOMBRE,
} from './paciente.constants'

export const getPacientesAction = payload => ({ type: GET_PACIENTES_REQUEST, payload });
export const getPacientesSuccess = payload => ({ type: GET_PACIENTES_SUCCESS, payload });
export const getPacientesFailure = payload => ({ type: GET_PACIENTES_FAILURE, payload });

export const postPacientesAction = payload => ({ type: POST_PACIENTES_REQUEST, payload });
export const postPacientesSuccess = payload => ({ type: POST_PACIENTES_SUCCESS, payload });
export const postPacientesFailure = payload => ({ type: POST_PACIENTES_FAILURE, payload });

export const onChangePrimerNombreAction = payload => ({ type: ON_CHANGE_PRIMER_NOMBRE, payload });