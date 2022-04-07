import { createSelector } from 'reselect';
import { initialState } from './paciente.reducer';

const selectPacienteDomain = state => initialState;
//console.log('ttt', state)
const makeSelectPrimerNombre = () =>
  createSelector(
    selectPacienteDomain,
  //  substate => substate.pacienteForm.primerNombre,
  );

const makeSelectSegundoNombre = () =>
  createSelector(
    selectPacienteDomain,
    substate => substate.pacienteForm.segundoNombre,
  );

  export {
      selectPacienteDomain,
      makeSelectPrimerNombre,
      makeSelectSegundoNombre,
  }