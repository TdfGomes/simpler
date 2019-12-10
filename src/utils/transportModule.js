export function transportModule(nav) {
  let stream = null;
  const constrains = { audio: true };
  const record = async () => {
    try {
      stream = await nav.mediaDevices.getUserMedia(constrains);
    } catch (error) {
      console.error(error);
    }
  };
  const stop = () => {};
  const play = () => {};

  return {
    record,
    stop,
    play,
  };
}
