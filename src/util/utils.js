export const isNullOrUndefined = (value) =>
   value === undefined || value === null || value === '';

export const getArrayDistinctById = (currentArray, arrayToMerge) => {
   const uniqueItems = [
      ...(Array.isArray(currentArray)
         ? currentArray
         : [isNullOrUndefined(currentArray) ? null : currentArray]),
      ...(Array.isArray(arrayToMerge)
         ? arrayToMerge
         : [isNullOrUndefined(arrayToMerge) ? [] : currentArray]),
   ].reduce(
      (acc, item) => (item?.id ? acc.set(item.id, item) : acc),
      new Map()
   );
   return Array.from(uniqueItems, (x) => x[1]);
};
