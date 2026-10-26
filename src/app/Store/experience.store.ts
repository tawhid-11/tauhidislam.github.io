import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { ApiService } from '../Services/api/api';
import { IExperience } from '../Interfaces/experience';
import { lastValueFrom, map } from 'rxjs';
import { sortByTenure } from '../Helpers/sort-by-date';

type ExperienceState = {
  experiences: IExperience[];
  isLoading: boolean;
};

const initialState: ExperienceState = {
  experiences: [],
  isLoading: false,
};

export const ExperienceStore = signalStore(
  withState(initialState),
  withMethods((store, apiService = inject(ApiService)) => ({
    async loadExperiences(): Promise<void> {
      patchState(store, { isLoading: true });

      const experiences = await lastValueFrom(
        apiService
          .getExperiences()
          .pipe(map((response) => response.experiences))
      );

      const sortedExperiences = sortByTenure(experiences);

      patchState(store, { experiences: sortedExperiences, isLoading: false });
    },
  }))
);
