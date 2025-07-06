interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

/**
 * Team-Mitglied Komponente
 */
export default function TeamMember({ name, role, description, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <img 
        src={image} 
        alt={`${name} - ${role}`}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
        style={{ objectPosition: 'center 20%' }}
      />
      <h3 className="text-xl font-bold text-[var(--lohn-primary)] text-center mb-2">{name}</h3>
      <p className="text-[var(--lohn-teal)] text-center mb-3">{role}</p>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}