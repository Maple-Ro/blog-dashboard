import request from "../utils/request";
// import {get} from '../utils/request2';
import {API_URL, PAGE_SIZE} from "../constants";
function postConfig(values) {
  return {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(values)
  }
}
export function fetch({page = 1}) {
  return request(`${API_URL}/fetchReactDemo?_page=${page}&_limit=${PAGE_SIZE}`);
}
export function del(id) {
  return request(`${API_URL}/delReactDemo`, postConfig(id));
}
/**
 * mode: 是否跨域
 * @param id
 * @param values
 * @returns {Object}
 */
export function patch(id, values) {
  return request(`${API_URL}/editReactDemo/${id}`, postConfig(values));
}
export function create(values) {
  return request(`${API_URL}/createReactDemo`, postConfig(values));
}
