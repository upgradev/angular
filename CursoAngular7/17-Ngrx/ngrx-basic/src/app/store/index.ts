import { Person } from "../person";
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface appState{
    //people: Person[];
    people: fromPersonReducer.PeopleState;
}

export const appReducers : ActionReducerMap<appState> ={
    people : fromPersonReducer.reducer

}


//export const selectPeople = (state: appState) => state.people;

/*export const selectPeopleCount = createSelector(
    selectPeople,
    (people) => people.length
);

export const selectPeopleCount2 = createSelector(
    selectPeopleCount,
    selectPeople,
    (n) => n+1
);*/