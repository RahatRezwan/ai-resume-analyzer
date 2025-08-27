/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes - The size in bytes
 * @returns A formatted string with appropriate unit (B, KB, MB, GB)
 */
export function formatSize(bytes: number): string {
   if (bytes === 0) return '0 B';

   const units = ['B', 'KB', 'MB', 'GB'];
   const k = 1024;
   const decimals = 1;

   const i = Math.floor(Math.log(bytes) / Math.log(k));
   const size = bytes / Math.pow(k, i);

   // For bytes, don't show decimals
   if (i === 0) {
      return `${size} ${units[i]}`;
   }

   return `${size.toFixed(decimals)} ${units[i]}`;
}
