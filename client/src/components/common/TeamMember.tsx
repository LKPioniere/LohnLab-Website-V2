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
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[var(--lohn-teal)]/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--lohn-teal)]/5 to-[var(--lohn-primary)]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="w-36 h-36 mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-primary)] rounded-full p-1 group-hover:scale-105 transition-transform duration-300">
            <img 
              src={image} 
              alt={`${name} - ${role}`}
              className="w-full h-full rounded-full object-cover object-top bg-white"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
            Team
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-[var(--lohn-primary)] group-hover:text-[var(--lohn-teal)] transition-colors duration-300">
          {name}
        </h3>
        
        <div className="inline-block bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md group-hover:shadow-lg transition-shadow duration-300">
          {role}
        </div>
        
        <p className="text-gray-600 leading-relaxed mt-4 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}