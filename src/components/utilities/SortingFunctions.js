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
  let oneSubjectScore = oneSubject.notaFinal || 0; // Para que sea 0 si es undefined. Si quieren que las que estan siendo cursadas vayan al final, pongan 11
  let anotherSubjectScore = anotherSubject.notaFinal || 0;
  return oneSubjectScore - anotherSubjectScore;
};

export const sortByScoreDesc = (subjects) => {
  return subjects.sort(goesLastByScore);
};

const goesLastByScore = (oneSubject, anotherSubject) => {
  let oneSubjectScore = oneSubject.notaFinal || 0; // Para que sea 0 si es undefined. Si quieren que las que estan siendo cursadas vayan al final, pongan 11
  let anotherSubjectScore = anotherSubject.notaFinal || 0;
  return anotherSubjectScore - oneSubjectScore;
};

export const sortByYearAsc = (subjects) => {
  return subjects.sort(goesFirstByYear);
};

const goesFirstByYear = (oneSubject, anotherSubject) => {
  return oneSubject.añoDeCursada - anotherSubject.añoDeCursada;
};

export const sortByYearDesc = (subjects) => {
  return subjects.sort(goesLastByYear);
};

const goesLastByYear = (oneSubject, anotherSubject) => {
  return anotherSubject.añoDeCursada - oneSubject.añoDeCursada;
};

export const identity = (lista) => lista;
