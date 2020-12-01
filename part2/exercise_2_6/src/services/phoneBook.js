/* eslint-disable import/no-anonymous-default-export */
/**
 * Phone book service
 *
 * @author Anh Vu <anh.vu@vertics.co>
 *
 * @copyright Vertics Oy 2020
 */
import axios from 'axios'

export const getAll = () => {
  return axios
    .get('http://localhost:3001/api/persons')
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}

export const createOne = (data) => {
  return axios
    .post('http://localhost:3001/api/persons', data)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw e
    })
}

export const deleteOne = (id) => {
  return axios
    .delete(`http://localhost:3001/api/persons/${id}`)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw e
    })
}

export const editOne = (id, data) => {
    return axios
    .put(`http://localhost:3001/api/persons/${id}`, data)
    .then(res => {
        console.log(res)
        return res
    })
    .catch(e => {
        throw e
    })
}