import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const schedule = [
  {
    day: "Day 1 - Oct 4",
    events: [
      { time: "6:00 AM", activity: "Morning Puja & Aarti", icon: Calendar },
      { time: "11:00 AM", activity: "Cultural Performances Begin", icon: Users },
      { time: "7:00 PM", activity: "Welcome Dinner", icon: MapPin },
      { time: "9:00 PM", activity: "Donor Acknowledgments", icon: Users }
    ]
  },
  {
    day: "Day 2 - Oct 5",
    events: [
      { time: "6:00 AM", activity: "Traditional Rath Yatra", icon: Calendar },
      { time: "12:00 PM", activity: "Folk Dance & Music", icon: Users },
      { time: "7:30 PM", activity: "Gala Dinner", icon: MapPin },
      { time: "9:30 PM", activity: "Guest Speakers", icon: Users }
    ]
  },
  {
    day: "Day 3 - Oct 6",
    events: [
      { time: "6:00 AM", activity: "Community Prayers", icon: Calendar },
      { time: "2:00 PM", activity: "Relief Kit Distribution", icon: MapPin },
      { time: "7:00 PM", activity: "Cultural Evening", icon: Users },
      { time: "9:00 PM", activity: "Progress Updates", icon: Clock }
    ]
  },
  {
    day: "Day 4 - Oct 7",
    events: [
      { time: "6:00 AM", activity: "Final Puja Ceremony", icon: Calendar },
      { time: "11:00 AM", activity: "Impact Presentation", icon: Clock },
      { time: "7:00 PM", activity: "Closing Dinner", icon: MapPin },
      { time: "9:00 PM", activity: "Final Acknowledgments", icon: Users }
    ]
  }
];

const guests = [
  { name: "Political Representative", role: "Chief Guest", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" },
  { name: "Industry Leader", role: "Patron", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" },
  { name: "Cultural Artist", role: "Performer", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" },
  { name: "Social Influencer", role: "Ambassador", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" }
];

export default function EventSchedule() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-saira text-3xl md:text-4xl font-bold mb-4 text-white">
            4-Day Event Schedule
          </h2>
          <p className="text-lg text-white/70">
            Kullu Dussehra celebration with purpose
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="glass rounded-2xl p-6">
              {/* Day Header */}
              <div className="text-center mb-6">
                <h3 className="font-saira text-xl font-semibold text-[#6DE1FF] mb-2">
                  {day.day}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#6DE1FF] to-[#00E0C6] mx-auto"></div>
              </div>

              {/* Events */}
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-[#FF9A1F]/20 flex items-center justify-center">
                        <event.icon className="w-4 h-4 text-[#FF9A1F]" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">
                        {event.time}
                      </div>
                      <div className="text-sm text-white/70">
                        {event.activity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guests Section */}
        <div className="text-center mb-8">
          <h3 className="font-saira text-2xl font-semibold mb-8 text-white">
            Distinguished Guests & Supporters
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {guests.map((guest, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 mx-auto ring-2 ring-[#6DE1FF]/30">
                  <img 
                    src={guest.image}
                    alt={`${guest.name} - ${guest.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium text-white">{guest.name}</div>
                <div className="text-xs text-[#00E0C6]">{guest.role}</div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-white/80">
              <strong>Want to support on stage?</strong><br/>
              Get a Patron/Corporate table and join our acknowledgment ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}