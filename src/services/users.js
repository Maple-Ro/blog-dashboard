import request from '../utils/request';
// import {get} from '../utils/request2';
import { PAGE_SIZE, API_URL } from '../constants';
export function fetch({ page = 1 }) {
  return request(`${API_URL}/fetchReactDemo?_page=${page}&_limit=${PAGE_SIZE}`);
}
export function del(id) {
  return request(`${API_URL}/delReactDemo/${id}`,{
    method:'GET',
  });
}
export function patch(id, values) {
  return request(`${API_URL}/editReactDemo/${id}`, {
    method:'POST',
    body:JSON.stringify(values)
  });
}
export function create(values) {
  return request(`${API_URL}/createReactDemo/`, {
    method:'POST',
    body:JSON.stringify(values)
  });
}
