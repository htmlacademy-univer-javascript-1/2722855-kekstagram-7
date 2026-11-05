// Вспомогательная функция: переводит время "Ч:ММ" в общее количество минут
const timeToMinutes = (time) => {
  const parts = time.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  return hours * 60 + minutes;
};

// Основная функция проверки встречи
const isMeetingWithinWorkingDay = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartMins = timeToMinutes(workStart);
  const workEndMins = timeToMinutes(workEnd);

  const meetingStartMins = timeToMinutes(meetingStart);
  const meetingEndMins = meetingStartMins + meetingDuration;

  return meetingStartMins >= workStartMins && meetingEndMins <= workEndMins;
};

// Проверки из задания (без console.log)
window.test1 = isMeetingWithinWorkingDay('08:00', '17:30', '14:00', 90); // true
window.test2 = isMeetingWithinWorkingDay('8:0', '10:0', '8:0', 120);     // true
window.test3 = isMeetingWithinWorkingDay('08:00', '14:30', '14:00', 90); // false
window.test4 = isMeetingWithinWorkingDay('14:00', '17:30', '08:0', 90);  // false
window.test5 = isMeetingWithinWorkingDay('8:00', '17:30', '08:00', 900); // false
