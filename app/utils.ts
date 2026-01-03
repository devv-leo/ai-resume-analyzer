export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 bytes";
  if (bytes === 0) return "0 bytes";

  const thresh = 1024;
  if (bytes < thresh) return `${bytes} bytes`;

  const units = ["KB", "MB", "GB", "TB"];
  let u = -1;
  let value = bytes;

  do {
    value = value / thresh;
    u++;
  } while (value >= thresh && u < units.length - 1);

  // Use 1 decimal place for values < 10, otherwise no decimal
  const formatted = value < 10 ? value.toFixed(1) : Math.round(value).toString();
  return `${formatted} ${units[u]}`;
}

export const generateUUID = () => crypto.randomUUID();
