import { useEffect, useMemo, useState } from 'react'
import AppPresenter from './AppPresenter.jsx'
import { stations, trains } from './data/trains.js'

function getDefaultDate() {
  const date = new Date()
  date.setDate(date.getDate() + 3)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function readBookingHistory() {
  try {
    const savedBookings = localStorage.getItem('trackline-booking-history')
    const bookings = savedBookings ? JSON.parse(savedBookings) : []

    if (!Array.isArray(bookings)) {
      throw new Error('Saved booking history is not a list.')
    }

    return { bookings, error: '' }
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Browser storage is unavailable.'
    return {
      bookings: [],
      error: `We couldn't load your saved trips. ${detail}`,
    }
  }
}

export default function AppContainer() {
  const [origin, setOrigin] = useState(stations[0])
  const [destination, setDestination] = useState(stations[1])
  const [travelDate, setTravelDate] = useState(getDefaultDate)
  const [passengers, setPassengers] = useState('1')
  const [sortBy, setSortBy] = useState('recommended')
  const [search, setSearch] = useState({
    origin: stations[0],
    destination: stations[1],
    travelDate: getDefaultDate(),
    passengers: 1,
  })
  const [searchError, setSearchError] = useState('')
  const [selectedTrain, setSelectedTrain] = useState(null)
  const [passengerName, setPassengerName] = useState('')
  const [passengerEmail, setPassengerEmail] = useState('')
  const [bookingError, setBookingError] = useState('')
  const [confirmedBooking, setConfirmedBooking] = useState(null)
  const [savedHistory] = useState(readBookingHistory)
  const [bookingHistory, setBookingHistory] = useState(savedHistory.bookings)
  const [historyError, setHistoryError] = useState(savedHistory.error)
  const [activeView, setActiveView] = useState('search')

  useEffect(() => {
    if (historyError) return

    try {
      localStorage.setItem('trackline-booking-history', JSON.stringify(bookingHistory))
    } catch (error) {
      const detail = error instanceof Error ? error.message : 'Browser storage is unavailable.'
      setHistoryError(`Your trips are visible for this session, but couldn't be saved. ${detail}`)
    }
  }, [bookingHistory, historyError])

  const results = useMemo(() => {
    const matchingTrains = trains.filter(
      (train) => train.from === search.origin && train.to === search.destination,
    )

    if (sortBy === 'earliest') {
      return [...matchingTrains].sort((first, second) =>
        first.departure.localeCompare(second.departure),
      )
    }

    if (sortBy === 'lowest') {
      return [...matchingTrains].sort((first, second) => first.fare - second.fare)
    }

    return matchingTrains
  }, [search, sortBy])

  function handleSearch(event) {
    event.preventDefault()

    if (origin === destination) {
      setSearchError('Choose two different stations to find trains.')
      return
    }

    if (!travelDate || travelDate < getDefaultDateToday()) {
      setSearchError('Choose today or a future date for your journey.')
      return
    }

    setSearchError('')
    setSearch({ origin, destination, travelDate, passengers: Number(passengers) })
  }

  function handleSwapStations() {
    setOrigin(destination)
    setDestination(origin)
    setSearchError('')
  }

  function handleBook(train) {
    setSelectedTrain(train)
    setPassengerName('')
    setPassengerEmail('')
    setBookingError('')
  }

  function handleBookingSubmit(event) {
    event.preventDefault()

    if (!passengerName.trim()) {
      setBookingError('Enter the lead passenger’s full name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passengerEmail)) {
      setBookingError('Enter a valid email address for your ticket.')
      return
    }

    const bookingReference = `TL${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    const booking = {
      train: selectedTrain,
      name: passengerName.trim(),
      email: passengerEmail.trim(),
      passengers: search.passengers,
      travelDate: search.travelDate,
      bookingReference,
    }
    setBookingHistory((history) => [booking, ...history])
    setConfirmedBooking(booking)
    setSelectedTrain(null)
  }

  return (
    <AppPresenter
      stations={stations}
      origin={origin}
      destination={destination}
      travelDate={travelDate}
      passengers={passengers}
      search={search}
      results={results}
      sortBy={sortBy}
      searchError={searchError}
      selectedTrain={selectedTrain}
      passengerName={passengerName}
      passengerEmail={passengerEmail}
      bookingError={bookingError}
      confirmedBooking={confirmedBooking}
      bookingHistory={bookingHistory}
      historyError={historyError}
      activeView={activeView}
      onOriginChange={setOrigin}
      onDestinationChange={setDestination}
      onTravelDateChange={setTravelDate}
      onPassengersChange={setPassengers}
      onSearch={handleSearch}
      onSwapStations={handleSwapStations}
      onSortChange={setSortBy}
      onBook={handleBook}
      onPassengerNameChange={setPassengerName}
      onPassengerEmailChange={setPassengerEmail}
      onBookingSubmit={handleBookingSubmit}
      onCloseBooking={() => setSelectedTrain(null)}
      onCloseConfirmation={() => setConfirmedBooking(null)}
      onShowSearch={() => setActiveView('search')}
      onShowHistory={() => setActiveView('history')}
      onViewTicket={setConfirmedBooking}
    />
  )
}

function getDefaultDateToday() {
  const today = new Date()
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
}
