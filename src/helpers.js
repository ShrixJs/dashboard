export const formatCurrency = (amount) => {
  return (amount
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: amount % 1 === 0  ? 0 : 2
    })
    .replace('$', '$ ')
  );
};