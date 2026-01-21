import { useDevices } from "../services/api";
import { HomeTemplate } from "../templates/Home.template";

export function HomePage() {
  const { data, isLoading, isError } = useDevices();

  return (
    <HomeTemplate
      title="Welcome to Device Details"
      description="Your comprehensive solution for device management and monitoring."
      devices={data}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
