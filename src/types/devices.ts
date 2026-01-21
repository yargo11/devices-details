export interface DeviceProps {
  id: string;
  name: string;
  status: "online" | "offline" | "alert";
  type: string;
  ip: string;
  last_seen: string;
  location: string;
}
