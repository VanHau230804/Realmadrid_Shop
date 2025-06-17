import axios from 'axios';

export const uploadFile = async (data: FormData) => {
  try {
    const response = await axios.post('http://localhost:8080/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }); // bỏ headers
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const uploadImages = async (formData: FormData) => {
//   try {
//     const res = await axios.post(
//       'http://localhost:8080/upload/images',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       }
//     );
//     return res;
//   } catch (error) {
//     return error;
//   }
// };

// export const uploadImage = async (formData: FormData) => {
//   try {
//     const res = await axios.post(
//       'http://localhost:8080/upload/image',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       }
//     );
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
