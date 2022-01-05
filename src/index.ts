const round = (n: number) => {
  return Math.round(n)
}

const addRoundedIntegers = (n: number, m: number) => {
  if (n !== parseInt(n + '')) n = MathUtils.round(n)
  if (m !== parseInt(m + '')) m = MathUtils.round(m)

  return n + m
}

const pullSomeNumbersFromDatabase = () => {
  // Contrived, but imagine connecting to a database and grabbing some values from it.
  return [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
  ]
}

const addNumbersPulledFromDatabase = () => {
  const numbers = MathUtils.pullSomeNumbersFromDatabase()
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

const MathUtils = {
  round,
  addRoundedIntegers,
  pullSomeNumbersFromDatabase,
  addNumbersPulledFromDatabase
}

export default MathUtils
