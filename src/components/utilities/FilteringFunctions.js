export const filterAttendedSubjects = (subjects) => {
  return subjects.filter((subject) => !subject.cursando);
};

export const filterAttendingSubjects = (subjects) => {
  return subjects.filter((subject) => subject.cursando);
};

export const filterNothing = (subjects) => subjects;

export const filterPassedSubjects = (subjects) => {
  return subjects.filter((subject) => subject.notaFinal > 3);
};

export const filterNotPassedSubjects = (subjects) => {
  return subjects.filter(
    (subject) => subject.notaFinal && subject.notaFinal <= 3
  );
};
