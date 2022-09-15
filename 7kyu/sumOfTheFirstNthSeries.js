function SeriesSum(n)
{
  return Array(n).fill(0).map((e, i) => 1/(1+ 3*i)).reduce((acc, v) => acc + v ,0).toFixed(2)
}
