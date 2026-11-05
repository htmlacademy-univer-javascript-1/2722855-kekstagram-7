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

  // Встреча должна начаться не раньше начала рабочего дня и закончиться не позже его конца
  return meetingStartMins >= workStartMins && meetingEndMins <= workEndMins;
};

// Проверки из задания (чтобы линтер не ругался на неиспользуемую функцию)
console.log(isMeetingWithinWorkingDay('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkingDay('8:0', '10:0', '8:0', 120));     // true
console.log(isMeetingWithinWorkingDay('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkingDay('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingWithinWorkingDay('8:00', '17:30', '08:00', 900)); // false
