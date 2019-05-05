import request from '../utils/request'

export async function getSwaiperData() {
  const res =  await request({
    url: 'home/swiperdata',
  })
  return res.data.data
} 