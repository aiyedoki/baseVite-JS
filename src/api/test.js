import request from '@/utils/request'

export const getTest = () => {
  return request('/public/getLoveAndLifeNewest', 'get')
}