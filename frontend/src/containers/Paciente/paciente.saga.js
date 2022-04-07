import { takeLatest, call, put, select } from 'redux-saga/effects';
import { postPacientesAPI } from './paciente.api';
import { POST_PACIENTES_REQUEST } from "./paciente.constants";
import { makeSelectPrimerNombre, makeSelectSegundoNombre} from './paciente.selectors'
import { postPacientesSuccess, postPacientesFailure, getPacientesAction } from './paciente.actions'

export function* postPacienteSaga() {
    const primerNombre = yield select(makeSelectPrimerNombre());
    const segundoNombre = yield select(makeSelectSegundoNombre());

    try {
        yield call(postPacientesAPI, { primerNombre, segundoNombre });
        yield put(postPacientesSuccess());
        yield put(getPacientesAction());
      } catch (error) {
        yield put(postPacientesFailure(error));
      }
}

export default function* pacienteSaga(){
    yield takeLatest(POST_PACIENTES_REQUEST, postPacienteSaga)
}