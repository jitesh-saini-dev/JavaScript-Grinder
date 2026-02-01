function handleApiResponse(response) {
  if (!Array.isArray(response)) return { data: null, status: 0 };
  if (response.length === 0) return { data: null, status: 0 };
  return { data: response, status: 1 } ?? { data: null, status: 0 };
}
let res1 = handleApiResponse([1,2,3]);
console.log(res1);
let res2 = handleApiResponse() ?? [1,23,4,5,6,6];
console.log(res2);
 