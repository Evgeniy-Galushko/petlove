import axios from "axios";

export async function savePhoto(formData) {
  try {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    console.log(cloudName);
    const request = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,

      {
        method: "POST",
        body: formData,
      }
    );

    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
