import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "http://localhost:3000";

export async function fetchDevices(id?: string) {
  // Adicionar delay de 2 segundos para observar loading
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = id ? `${API_BASE_URL}/devices/${id}` : `${API_BASE_URL}/devices`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404 && id) {
      throw new Error(`Dispositivo com ID "${id}" não encontrado`);
    }
    throw new Error("Erro ao buscar dispositivos");
  }

  return response.json();
}

export function useDevices(id?: string) {
  return useQuery({
    queryKey: id ? ["devices", id] : ["devices"],
    queryFn: () => fetchDevices(id),
  });
}
