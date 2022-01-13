export function formatToBRL(value: number) {
   if (value) {
      const result = value.toLocaleString('pt-br', {
         style: 'currency',
         currency: 'BRL',
      });
      return result;
   } else {
      return `R$ 0,00`;
   }
}
