import axiosInstance from './instance';

const METHOD = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch',
};

const { GET, POST, DELETE, PUT, PATCH } = METHOD;

const createApiMethod = (axiosInstance, methodType) => (config) => {
  return axiosInstance({ ...config, method: methodType });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: createApiMethod(axiosInstance, GET),
  post: createApiMethod(axiosInstance, POST),
  put: createApiMethod(axiosInstance, PUT),
  patch: createApiMethod(axiosInstance, PATCH),
  delete: createApiMethod(axiosInstance, DELETE),
};
