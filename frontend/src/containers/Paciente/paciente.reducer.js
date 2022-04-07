import produce from "immer";
import {
    POST_PACIENTES_REQUEST,
    POST_PACIENTES_SUCCESS,
    POST_PACIENTES_FAILURE,
  } from './paciente.constants';

export const initialState = {
    pacientetList: [],
    pacienteForm: {
      primerNombre: '',
      segundoNombre: '',
    },
  };

  /* eslint-disable default-case, no-param-reassign */
  const pacienteReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type){
            case POST_PACIENTES_REQUEST:
                draft.modalLoading = true;
                break;
              case POST_PACIENTES_SUCCESS:
                draft.postForm = {
                  primerNombre: '',
                  segundoNombre: '',
                };
                break;
              case POST_PACIENTES_FAILURE:
                draft.modalLoading = false;
                break;
        }
    });

    export default pacienteReducer;