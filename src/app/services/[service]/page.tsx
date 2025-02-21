export async function generateStaticParams() {
  const services = [
    "maternity-photography",
    "newborn-sessions",
    "family-portraits",
    "studio-sessions"
  ];

  return services.map((service) => ({
    service: service,
  }));
}

export default function Service({ params }: { params: { service: string } }) {
  const serviceName = params.service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light mb-8">{serviceName}</h1>
        <div className="max-w-3xl mx-auto">
          {/* Service content will go here */}
          <p className="text-gray-600">Service details coming soon...</p>
        </div>
      </div>
    </div>
  );
}