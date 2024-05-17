import * as UploadApi from '../api/UploadRequest'

const uploadImage = (data) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(data)
  } catch (error) {
    console.log(error)
  }
}

const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: 'UPLOAD_START' })

  try {
    const newPost = await UploadApi.uploadPost(data)
    console.log(newPost)
    dispatch({ type: 'UPLOAD_SUCCESS', data: newPost.data })
  } catch (error) {
    console.log(error)
    dispatch({ type: 'UPLOAD_FAIL' })
  }
}

export { uploadImage, uploadPost }
