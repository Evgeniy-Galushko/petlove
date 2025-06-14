export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectCurrentUser = (state) => state.auth.currentUser;

export const selectIsLoadin = (state) => state.auth.isloading;

export const selectError = (state) => state.auth.error;

export const selectStatus = (state) => state.auth.status;
