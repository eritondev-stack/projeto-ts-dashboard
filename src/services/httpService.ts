/* eslint-disable @typescript-eslint/no-explicit-any */
import http from './axios'
import { Covid } from './covidModel'

class HttpService {
  async getAll (): Promise<Covid> {
    const data = await http.get('summary')
    return data.data
  }

  get (id: string) {
    return http.get(`/tutorials/${id}`)
  }

  create (data: any) {
    return http.post('/tutorials', data)
  }

  update (id: string, data: any) {
    return http.put(`/tutorials/${id}`, data)
  }

  delete (id: string) {
    return http.delete(`/tutorials/${id}`)
  }

  deleteAll () {
    return http.delete('/tutorials')
  }

  findByTitle (title: string) {
    return http.get(`/tutorials?title=${title}`)
  }
}

export default new HttpService()
