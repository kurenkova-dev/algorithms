//Алгоритм Евклида по поиску наибольшего общего делителя

//m, n - числа, НОД которых мы ищем 

function Euclid(m, n) {
    // базовый случай
    if(m === 0) { return n;}
    if(n === 0) { return m;}
    
    //рекурсивный случай
    return Euclid(b, a % b);
  }
 
 console.log(Euclid(20, 6));
