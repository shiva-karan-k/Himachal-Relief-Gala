import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const schedule = [
  {
    day: "4th October",
    title: "Opening Ceremony & Disaster Heroes Appreciation",
    events: [
      { time: "Morning", activity: "Sports Activities", icon: Users, description: "Community sports events and competitions" },
      { time: "Evening", activity: "Cultural Night", icon: Calendar, description: "Cultural performances acknowledging Disaster Heroes" },
      { time: "Night", activity: "Disaster Heroes Recognition", icon: Users, description: "NDRF, Police, Ronid Pundir, Sahil Thakur, Sarbjeet Singh Bobby honored" },
      { time: "Late", activity: "Candlelight Unity Ceremony", icon: MapPin, description: "Ceremony symbolizing unity and gratitude to heroes" }
    ]
  },
  {
    day: "5th October", 
    title: "Community Celebration",
    events: [
      { time: "Evening", activity: "Local Singers Performances", icon: Users, description: "Performances by talented local singers" },
      { time: "Night", activity: "Natti Folk Dance", icon: Calendar, description: "Traditional Himachali Natti folk dance performances" },
      { time: "Night", activity: "Kullu Dhol Music", icon: Users, description: "Traditional music celebrating community spirit" },
      { time: "Late", activity: "Community Spirit Celebration", icon: MapPin, description: "Celebrating unity and collective strength" }
    ]
  },
  {
    day: "6th October",
    title: "Gratitude & Relief",
    events: [
      { time: "Evening", activity: "Sponsor Appreciation Segment", icon: Users, description: "Recognizing supporters and contributors" },
      { time: "Evening", activity: "Blood Donation Camp Promotion", icon: Calendar, description: "Encouraging participation in next day's blood camp" },
      { time: "Night", activity: "Relief Contribution Recognition", icon: Clock, description: "Acknowledging those who helped affected families" },
      { time: "Late", activity: "Sky Lantern Release", icon: MapPin, description: "Ceremony symbolizing hope and renewal" }
    ]
  },
  {
    day: "7th October",
    title: "Empowerment & Finale",
    events: [
      { time: "Morning", activity: "Blood Donation Camp", icon: Calendar, description: "Community blood donation drive starting 09:00 AM" },
      { time: "Evening", activity: "Women's Empowerment (NIRBHAYA)", icon: Users, description: "Cultural event celebrating women's empowerment" },
      { time: "Night", activity: "DJ Night - Women's Celebration", icon: MapPin, description: "DJ Night dedicated to women's empowerment" },
      { time: "Late", activity: "Grand Finale", icon: Clock, description: "Concluding celebration of the 4-day event" }
    ]
  }
];

const distinguishedGuests = [
  { name: "NDRF Personnel", role: "Disaster Hero" },
  { name: "Ronid Pundir", role: "Student Flood Hero" },
  { name: "Sahil Thakur", role: "Student Flood Hero" },
  { name: "Sarbjeet Singh Bobby", role: "Community Philanthropist" },
  { name: "Local Singers", role: "Cultural Performers" },
  { name: "Natti Folk Dancers", role: "Traditional Artists" }
];

export default function EventSchedule() {
  return (
    <section id="schedule" className="py-20 relative">
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
                <h3 className="font-saira text-lg font-semibold text-[#6DE1FF] mb-1">
                  {day.day}
                </h3>
                <h4 className="text-sm font-medium text-white/90 mb-3">
                  {day.title}
                </h4>
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
                      <div className="text-xs font-semibold text-[#FF9A1F] mb-1">
                        {event.time}
                      </div>
                      <div className="text-sm text-white font-medium mb-1">
                        {event.activity}
                      </div>
                      <div className="text-xs text-white/60">
                        {event.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Distinguished Guests & Supporters Section */}
        <div className="text-center mb-8">
          <h3 className="font-saira text-2xl font-semibold mb-8 text-white">
            Distinguished Guests & Supporters
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {distinguishedGuests.map((guest, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full mb-3 mx-auto ring-2 ring-[#6DE1FF]/30 bg-gradient-to-br from-[#6DE1FF]/20 to-[#00E0C6]/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6DE1FF] to-[#00E0C6]"></div>
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