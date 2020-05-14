import { createSelector } from "reselect";

export const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
