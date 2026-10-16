export const stations = [
  'Bengaluru City',
  'Chennai Central',
  'Hyderabad Deccan',
  'Mumbai Central',
  'New Delhi',
  'Pune Junction',
  'Ahmedabad Junction',
  'Jaipur Junction',
  'Kolkata Howrah',
  'Lucknow Charbagh',
  'Varanasi Junction',
  'Madgaon',
  'Ernakulam Junction',
]

const daytimeAmenities = ['Pantry', 'Charging points', 'Wi-Fi']
const sleeperAmenities = ['Sleeper berths', 'Pantry', 'Charging points']
const premiumAmenities = ['Meals included', 'Charging points', 'Wi-Fi']

function makeTrain(details) {
  return {
    ...details,
    arrivalNextDay: details.arrivalNextDay ?? details.arrival < details.departure,
    amenities: details.amenities ?? (
      details.type === 'Overnight' ? sleeperAmenities
        : details.type === 'Premium' ? premiumAmenities
          : daytimeAmenities
    ),
  }
}

export const trains = [
  makeTrain({
    id: '12608', name: 'Lalbagh Express', from: 'Bengaluru City', to: 'Chennai Central',
    departure: '06:15', arrival: '11:00', duration: '4h 45m', type: 'Superfast',
    fare: 485, available: 18, rating: '4.8',
  }),
  makeTrain({
    id: '12028', name: 'Shatabdi Express', from: 'Bengaluru City', to: 'Chennai Central',
    departure: '11:00', arrival: '15:50', duration: '4h 50m', type: 'Chair car',
    fare: 720, available: 6, rating: '4.9', amenities: premiumAmenities,
  }),
  makeTrain({
    id: '12610', name: 'Chennai Express', from: 'Bengaluru City', to: 'Chennai Central',
    departure: '22:30', arrival: '04:25', duration: '5h 55m', type: 'Overnight',
    fare: 390, available: 24, rating: '4.6',
  }),
  makeTrain({
    id: '12786', name: 'Kacheguda Express', from: 'Bengaluru City', to: 'Hyderabad Deccan',
    departure: '18:20', arrival: '06:45', duration: '12h 25m', type: 'Overnight',
    fare: 550, available: 12, rating: '4.7',
  }),
  makeTrain({
    id: '12952', name: 'Mumbai Rajdhani', from: 'Mumbai Central', to: 'New Delhi',
    departure: '16:35', arrival: '08:30', duration: '15h 55m', type: 'Premium',
    fare: 1840, available: 9, rating: '4.9',
  }),
  makeTrain({
    id: '12124', name: 'Deccan Queen', from: 'Pune Junction', to: 'Mumbai Central',
    departure: '07:15', arrival: '10:35', duration: '3h 20m', type: 'Intercity',
    fare: 340, available: 31, rating: '4.8',
  }),
  makeTrain({
    id: '11302', name: 'Udyan Express', from: 'Bengaluru City', to: 'Pune Junction',
    departure: '20:40', arrival: '11:20', duration: '14h 40m', type: 'Overnight',
    fare: 690, available: 22, rating: '4.6',
  }),
  makeTrain({
    id: '17057', name: 'Devagiri Express', from: 'Hyderabad Deccan', to: 'Mumbai Central',
    departure: '13:25', arrival: '06:45', duration: '17h 20m', type: 'Overnight',
    fare: 760, available: 17, rating: '4.5',
  }),
  makeTrain({
    id: '12604', name: 'Charminar Express', from: 'Chennai Central', to: 'Hyderabad Deccan',
    departure: '18:10', arrival: '06:50', duration: '12h 40m', type: 'Overnight',
    fare: 620, available: 15, rating: '4.7',
  }),
  makeTrain({
    id: '12602', name: 'Chennai Mail', from: 'Chennai Central', to: 'Mumbai Central',
    departure: '20:10', arrival: '04:10', duration: '32h', type: 'Overnight',
    fare: 1080, available: 19, rating: '4.5', amenities: sleeperAmenities,
  }),
  makeTrain({
    id: '12009', name: 'Ahmedabad Shatabdi', from: 'Mumbai Central', to: 'Ahmedabad Junction',
    departure: '06:25', arrival: '13:10', duration: '6h 45m', type: 'Chair car',
    fare: 890, available: 14, rating: '4.8', amenities: premiumAmenities,
  }),
  makeTrain({
    id: '12010', name: 'Ahmedabad Shatabdi', from: 'Ahmedabad Junction', to: 'Mumbai Central',
    departure: '14:30', arrival: '21:20', duration: '6h 50m', type: 'Chair car',
    fare: 890, available: 11, rating: '4.8', amenities: premiumAmenities,
  }),
  makeTrain({
    id: '12015', name: 'Ajmer Shatabdi', from: 'New Delhi', to: 'Jaipur Junction',
    departure: '06:05', arrival: '10:40', duration: '4h 35m', type: 'Chair car',
    fare: 750, available: 16, rating: '4.8', amenities: premiumAmenities,
  }),
  makeTrain({
    id: '12016', name: 'Ajmer Shatabdi', from: 'Jaipur Junction', to: 'New Delhi',
    departure: '17:45', arrival: '22:30', duration: '4h 45m', type: 'Chair car',
    fare: 750, available: 21, rating: '4.8', amenities: premiumAmenities,
  }),
  makeTrain({
    id: '12230', name: 'Lucknow Mail', from: 'New Delhi', to: 'Lucknow Charbagh',
    departure: '22:00', arrival: '06:50', duration: '8h 50m', type: 'Overnight',
    fare: 580, available: 28, rating: '4.7',
  }),
  makeTrain({
    id: '12229', name: 'Lucknow Mail', from: 'Lucknow Charbagh', to: 'New Delhi',
    departure: '22:00', arrival: '06:45', duration: '8h 45m', type: 'Overnight',
    fare: 580, available: 23, rating: '4.7',
  }),
  makeTrain({
    id: '22436', name: 'Vande Bharat Express', from: 'New Delhi', to: 'Varanasi Junction',
    departure: '06:00', arrival: '14:00', duration: '8h', type: 'Premium',
    fare: 1795, available: 8, rating: '4.9',
  }),
  makeTrain({
    id: '22435', name: 'Vande Bharat Express', from: 'Varanasi Junction', to: 'New Delhi',
    departure: '15:00', arrival: '23:00', duration: '8h', type: 'Premium',
    fare: 1795, available: 10, rating: '4.9',
  }),
  makeTrain({
    id: '12302', name: 'Kolkata Rajdhani', from: 'New Delhi', to: 'Kolkata Howrah',
    departure: '16:50', arrival: '09:55', duration: '17h 5m', type: 'Premium',
    fare: 2210, available: 12, rating: '4.9',
  }),
  makeTrain({
    id: '12301', name: 'Kolkata Rajdhani', from: 'Kolkata Howrah', to: 'New Delhi',
    departure: '16:50', arrival: '10:00', duration: '17h 10m', type: 'Premium',
    fare: 2210, available: 9, rating: '4.9',
  }),
  makeTrain({
    id: '12333', name: 'Vibhuti Express', from: 'Kolkata Howrah', to: 'Varanasi Junction',
    departure: '20:00', arrival: '09:30', duration: '13h 30m', type: 'Overnight',
    fare: 690, available: 26, rating: '4.5',
  }),
  makeTrain({
    id: '12618', name: 'Mangala Lakshadweep Express', from: 'Ernakulam Junction', to: 'Bengaluru City',
    departure: '13:25', arrival: '22:00', duration: '8h 35m', type: 'Superfast',
    fare: 510, available: 20, rating: '4.6',
  }),
  makeTrain({
    id: '12617', name: 'Mangala Lakshadweep Express', from: 'Bengaluru City', to: 'Ernakulam Junction',
    departure: '21:15', arrival: '06:05', duration: '8h 50m', type: 'Overnight',
    fare: 510, available: 18, rating: '4.6',
  }),
  makeTrain({
    id: '10112', name: 'Konkan Kanya Express', from: 'Madgaon', to: 'Mumbai Central',
    departure: '18:00', arrival: '06:35', duration: '12h 35m', type: 'Overnight',
    fare: 570, available: 25, rating: '4.7',
  }),
  makeTrain({
    id: '10111', name: 'Konkan Kanya Express', from: 'Mumbai Central', to: 'Madgaon',
    departure: '23:00', arrival: '11:45', duration: '12h 45m', type: 'Overnight',
    fare: 570, available: 20, rating: '4.7',
  }),
  makeTrain({
    id: '12624', name: 'Chennai Mail', from: 'Ernakulam Junction', to: 'Chennai Central',
    departure: '14:30', arrival: '05:00', duration: '14h 30m', type: 'Overnight',
    fare: 640, available: 14, rating: '4.6',
  }),
  makeTrain({
    id: '12623', name: 'Chennai Mail', from: 'Chennai Central', to: 'Ernakulam Junction',
    departure: '19:45', arrival: '10:15', duration: '14h 30m', type: 'Overnight',
    fare: 640, available: 16, rating: '4.6',
  }),
]
