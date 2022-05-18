export const filterAttendedSubjects = (subjects) => {
  return subjects.filter((subject) => !subject.cursando);
};

export const filterAttendingSubjects = (subjects) => {
  return subjects.filter((subject) => subject.cursando);
};

export const filterNothing = (subjects) => subjects;
