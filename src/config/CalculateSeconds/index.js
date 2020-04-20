function CalculateSeconds(hour) {
  const a = new Date(new Date().toDateString() + " " + hour);
  const b = new Date();

  const endHour = a.getHours();
  const endMinutes = a.getMinutes();

  const currentHour = b.getHours();
  const currentMinutes = b.getMinutes();

  if (currentMinutes > endMinutes) {
    const remainHour = endHour - currentHour - 1;
    const remainMinutes = 60 - currentMinutes;
    const fixHour = remainHour * 3600;
    const fixMinutes = remainMinutes * 60;
    const fixSeconds = (fixHour + fixMinutes) * 1000;
    return fixSeconds;
  } else {
    const remainHour = endHour - currentHour;
    const remainMinutes = endMinutes - currentMinutes;
    const fixHour = remainHour * 3600;
    const fixMinutes = remainMinutes * 60;
    const fixSeconds = (fixHour + fixMinutes) * 1000;
    return fixSeconds;
  }
}
export { CalculateSeconds };
