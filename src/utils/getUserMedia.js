export async function getUserMedia() {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  } catch (error) {
    console.error(error);
  }
}
