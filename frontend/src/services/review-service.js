import { httpService } from './http-service'

const ENDPOINT = 'review'

export const reviewService = {
  query,
  addReview,
  removeReview,
  getEmptyReview,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function addReview(review) {
  return await httpService.post(ENDPOINT, review)
}

async function removeReview(reviewId) {
  return await httpService.delete(`${ENDPOINT}/${reviewId}`, reviewId)
}

function getEmptyReview() {
  return Promise.resolve({
    userId: '',
    toyId: '',
    content: '',
    rate: 0,
  })
}

// ;(() => {
//   setTimeout(()=>{
//     socketService.on('', (review) => {
//       console.log('GOT from socket', review)
//       store.commit({type: 'addReview', review})
//     })
//     socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (review) => {
//       showSuccessMsg(`New review about me ${review.txt}`)
//     })
//   }, 0)

// })()