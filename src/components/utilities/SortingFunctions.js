export const sortByNameAsc = (subjects) => {
  return subjects.sort(goesFirstByName);
};

const goesFirstByName = (oneSubject, anotherSubject) => {
  let lowerCaseOneSubjectName = oneSubject.nombre.toLowerCase();
  let lowerCaseAnotherSubjectName = anotherSubject.nombre.toLowerCase();
  if (lowerCaseOneSubjectName < lowerCaseAnotherSubjectName) {
    return -1;
  }
  if (lowerCaseOneSubjectName > lowerCaseAnotherSubjectName) {
    return 1;
  }
  return 0;
};

export const sortByNameDesc = (subjects) => {
  return subjects.sort(goesLastByName);
};

const goesLastByName = (oneSubject, anotherSubject) => {
  let lowerCaseOneSubjectName = oneSubject.nombre.toLowerCase();
  let lowerCaseAnotherSubjectName = anotherSubject.nombre.toLowerCase();
  if (lowerCaseOneSubjectName > lowerCaseAnotherSubjectName) {
    return -1;
  }
  if (lowerCaseOneSubjectName < lowerCaseAnotherSubjectName) {
    return 1;
  }
  return 0;
};

export const sortByScoreAsc = (subjects) => {
  return subjects.sort(goesFirstByScore);
};

const goesFirstByScore = (oneSubject, anotherSubject) => {
  let oneSubjectScore = oneSubject.nota || 0; // Para que sea 0 si es undefined. Si quieren que las que estan siendo cursadas vayan al final, pongan 11
  let anotherSubjectScore = anotherSubject.nota || 0;
  return oneSubjectScore - anotherSubjectScore;
};

export const sortByScoreDesc = (subjects) => {
  return subjects.sort(goesLastByScore);
};

const goesLastByScore = (oneSubject, anotherSubject) => {
  let oneSubjectScore = oneSubject.nota || 0; // Para que sea 0 si es undefined. Si quieren que las que estan siendo cursadas vayan al final, pongan 11
  let anotherSubjectScore = anotherSubject.nota || 0;
  return anotherSubjectScore - oneSubjectScore;
};

export const identity = (lista) => lista;
