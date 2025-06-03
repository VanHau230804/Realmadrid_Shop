export function formatDateTime(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('vi-VN');
};
