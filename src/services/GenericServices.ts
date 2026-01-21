import type { DeviceProps } from "../types/devices";

export class GenericService {
  static calculateHeight(rowData: DeviceProps[]) {
    const itemCount = rowData.length;

    const rowHeight = 80;
    const headerHeight = 80;
    const calculatedHeight = headerHeight + itemCount * rowHeight;

    if (itemCount === 0) {
      return 390;
    }

    return Math.min(calculatedHeight, 390);
  }

  static fromStatustoColor(status: string) {
    switch (status) {
      case "online":
        return "var(--indicator-success-100)";
      case "offline":
        return "var(--indicator-danger-100)";
      case "alert ":
      default:
        return "var(--indicator-warning-100)";
    }
  }

  static formatDate(dateString: string) {
    try {
      const date = new Date(dateString);

      // Verificar se a data é válida
      if (isNaN(date.getTime())) {
        return dateString; // Retorna a string original se não conseguir converter
      }

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      return `${day}/${month}/${year} - ${hours}:${minutes}`;
    } catch (error) {
      console.error(error);
      return dateString; // Retorna a string original em caso de erro
    }
  }
}
