// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_PAGE = "/";
const ROOTS_AUTH = "/auth/";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_PAGE,
  login: path(ROOTS_AUTH, "login"),
  signup: path(ROOTS_AUTH, "signup"),
  forgotPassword: path(ROOTS_AUTH, "forgot-password"),
  resetPassword: path(ROOTS_AUTH, "reset-password"),
};

export const PATH_PAGE = {
  root: "/home",
  pipeline: "/pipeline-tracker",
};
export const PATH_PAGE_ERROR = {
  notFound: "/404",
};
