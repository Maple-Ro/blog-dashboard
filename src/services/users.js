import request from '../utils/request';
import { PAGE_SIZE } from '../constants';
export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}
export function del(id) {
  return request(`/delReactDemo/${id}`,{
    method:'DELETE',
  });
}
export function patch(id, values) {
  return request(`/editReactDemo/${id}`, {
    method:'POST',
    body:JSON.stringify(values)
  });
}
export function create(values) {
  return request(`createReactDemo/`, {
    method:'POST',
    body:JSON.stringify(values)
  });
}
