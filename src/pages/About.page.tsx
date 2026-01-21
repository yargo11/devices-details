import { AboutTemplate } from "../templates/About.template";

export function AboutPage() {
  const features = [
    "Real-time device monitoring and status tracking",
    "Comprehensive analytics and reporting dashboard",
    "Multi-device support for various hardware types",
    "Secure data transmission and storage",
    "Customizable alerts and notifications",
    "User-friendly interface with intuitive navigation",
  ];

  return (
    <AboutTemplate
      title="About Device Details"
      description="Learn more about our platform and what makes it the best choice for device management."
      features={features}
    />
  );
}
