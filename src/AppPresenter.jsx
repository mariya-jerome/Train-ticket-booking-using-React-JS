const icons = {
  train: (
    <>
      <rect x="4" y="3" width="16" height="15" rx="4" />
      <path d="M8 7h8M8 12h.01M16 12h.01M8 21l2-3m6 3-2-3M4 15h16" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  swap: <path d="M16 3l4 4-4 4M4 7h16M8 21l-4-4 4-4m12 4H4" />,
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m18 6-12 12M6 6l12 12" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-8 8-16Z" />
      <path d="M4 21c2-5 6-8 11-11" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM17 10h2a2 2 0 1 1 0 4h-2M8 3v2m5-2v2" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
      <path d="M12 20h.01" />
    </>
  ),
  charge: <path d="m13 2-3 8h7l-6 12 2-9H6l7-11Z" />,
}

function getTodayInputDate() {
  const today = new Date()
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
}

function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand--light' : ''}`} href="#" aria-label="Trackline home">
      <span className="brand__mark">
        <Icon name="train" size={20} />
      </span>
      <span>trackline</span>
      <span className="brand__period">.</span>
    </a>
  )
}

function JourneyArtwork() {
  return (
    <div className="journey-art" aria-hidden="true">
      <span className="journey-art__sun" />
      <div className="journey-art__land journey-art__land--back" />
      <div className="journey-art__land journey-art__land--front" />
      <div className="journey-art__route">
        <span className="journey-art__stop journey-art__stop--start" />
        <span className="journey-art__stop journey-art__stop--end" />
        <span className="journey-art__route-label journey-art__route-label--start">YOUR CITY</span>
        <span className="journey-art__route-label journey-art__route-label--end">YOUR NEXT ADVENTURE</span>
      </div>
      <svg className="journey-art__train" viewBox="0 0 360 190" fill="none">
        <path d="M59 122h252a8 8 0 0 1 8 8v15H51v-15a8 8 0 0 1 8-8Z" fill="#F4F1E8" />
        <path d="M66 66a22 22 0 0 1 22-22h147c48 0 83 35 83 78H66V66Z" fill="#E86E4B" />
        <path d="M85 61a10 10 0 0 1 10-10h48v52H85V61Zm67-10h82c28 0 50 22 55 52H152V51Z" fill="#F7F6EF" />
        <path d="M147 53v52m139 4h32m-269 0h50" stroke="#203C38" strokeWidth="6" />
        <path d="M53 145h269" stroke="#E9AB72" strokeWidth="3" strokeLinecap="round" />
        <circle cx="99" cy="146" r="13" fill="#24433D" stroke="#F4F1E8" strokeWidth="5" />
        <circle cx="270" cy="146" r="13" fill="#24433D" stroke="#F4F1E8" strokeWidth="5" />
        <path d="M70 127h221" stroke="#D8D3C5" strokeWidth="2" />
      </svg>
      <span className="journey-art__rail journey-art__rail--one" />
      <span className="journey-art__rail journey-art__rail--two" />
    </div>
  )
}

function SearchPanel({
  stations,
  origin,
  destination,
  travelDate,
  passengers,
  searchError,
  onOriginChange,
  onDestinationChange,
  onTravelDateChange,
  onPassengersChange,
  onSearch,
  onSwapStations,
}) {
  return (
    <form className="search-panel" onSubmit={onSearch}>
      <div className="search-panel__heading">
        <div>
          <p className="eyebrow">PLAN YOUR JOURNEY</p>
          <h2>Where to next?</h2>
        </div>
        <span className="search-panel__hint">A few details and you’re on your way.</span>
      </div>
      <div className="search-fields">
        <label className="field field--station">
          <span className="field__label">FROM</span>
          <span className="field__control">
            <Icon name="pin" className="field__icon" />
            <select aria-label="Departure station" value={origin} onChange={(event) => onOriginChange(event.target.value)}>
              {stations.map((station) => <option key={station}>{station}</option>)}
            </select>
          </span>
        </label>
        <button className="swap-button" type="button" onClick={onSwapStations} aria-label="Swap departure and arrival stations">
          <Icon name="swap" size={17} />
        </button>
        <label className="field field--station">
          <span className="field__label">TO</span>
          <span className="field__control">
            <Icon name="pin" className="field__icon" />
            <select aria-label="Arrival station" value={destination} onChange={(event) => onDestinationChange(event.target.value)}>
              {stations.map((station) => <option key={station}>{station}</option>)}
            </select>
          </span>
        </label>
        <label className="field field--date">
          <span className="field__label">DEPARTURE</span>
          <span className="field__control">
            <Icon name="calendar" className="field__icon" />
            <input aria-label="Departure date" type="date" value={travelDate} min={getTodayInputDate()} onChange={(event) => onTravelDateChange(event.target.value)} required />
          </span>
        </label>
        <label className="field field--passengers">
          <span className="field__label">TRAVELLERS</span>
          <span className="field__control">
            <Icon name="users" className="field__icon" />
            <select aria-label="Number of travellers" value={passengers} onChange={(event) => onPassengersChange(event.target.value)}>
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option key={count} value={count}>{count} {count === 1 ? 'traveller' : 'travellers'}</option>
              ))}
            </select>
          </span>
        </label>
        <button className="search-button" type="submit">
          Find trains <Icon name="arrow" size={17} />
        </button>
      </div>
      {searchError && <p className="form-error" role="alert">{searchError}</p>}
    </form>
  )
}

function TrainCard({ train, passengers, onBook }) {
  const amenities = [
    { label: train.amenities[0], icon: train.amenities[0].includes('Meal') || train.amenities[0] === 'Pantry' ? 'coffee' : 'train' },
    { label: train.amenities[1], icon: 'charge' },
    { label: train.amenities[2], icon: train.amenities[2] === 'Wi-Fi' ? 'wifi' : 'shield' },
  ]

  return (
    <article className="train-card">
      <div className="train-card__main">
        <div className="train-card__identity">
          <span className="train-card__icon"><Icon name="train" size={20} /></span>
          <div>
            <h3>{train.name}</h3>
            <p>#{train.id} <span className="dot-separator">·</span> {train.type}</p>
          </div>
          <span className="train-rating"><Icon name="star" size={14} /> {train.rating}</span>
        </div>

        <div className="train-route">
          <div className="train-route__time">
            <strong>{train.departure}</strong>
            <span>{train.from}</span>
          </div>
          <div className="train-route__duration">
            <span>{train.duration}</span>
            <div className="train-route__line"><i /></div>
            <span>Direct train</span>
          </div>
          <div className="train-route__time train-route__time--arrival">
            <strong>
              {train.arrival}
              {train.arrivalNextDay && <span className="next-day">+1</span>}
            </strong>
            <span>{train.to}</span>
          </div>
        </div>

        <div className="train-amenities">
          {amenities.map((amenity) => (
            <span className="amenity" key={amenity.label}><Icon name={amenity.icon} size={14} /> {amenity.label}</span>
          ))}
        </div>
      </div>

      <div className="train-card__booking">
        <p className={`seat-status${train.available < 10 ? ' seat-status--limited' : ''}`}>
          <span /> {train.available} seats left
        </p>
        <div className="train-fare">
          <strong>₹{train.fare.toLocaleString('en-IN')}</strong>
          <span>per person</span>
        </div>
        {passengers > 1 && <p className="total-fare">₹{(train.fare * passengers).toLocaleString('en-IN')} total</p>}
        <button className="book-button" type="button" onClick={() => onBook(train)}>Choose train <Icon name="arrow" size={15} /></button>
      </div>
    </article>
  )
}

function BookingModal({ train, search, passengerName, passengerEmail, bookingError, onNameChange, onEmailChange, onSubmit, onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close booking form"><Icon name="close" /></button>
        <span className="modal-icon"><Icon name="train" size={23} /></span>
        <p className="eyebrow">ONE LAST STEP</p>
        <h2 id="booking-title">Let’s get you on board.</h2>
        <p className="modal-intro">{train.name} · {train.departure} → {train.arrival}</p>
        <div className="booking-summary">
          <span>{search.origin} <Icon name="arrow" size={14} /> {search.destination}</span>
          <span>{new Date(`${search.travelDate}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span>{search.passengers} {search.passengers === 1 ? 'traveller' : 'travellers'}</span>
        </div>
        <form className="passenger-form" onSubmit={onSubmit}>
          <label>
            Lead passenger
            <input autoFocus autoComplete="name" value={passengerName} onChange={(event) => onNameChange(event.target.value)} placeholder="Your full name" />
          </label>
          <label>
            Email for your ticket
            <input autoComplete="email" type="email" value={passengerEmail} onChange={(event) => onEmailChange(event.target.value)} placeholder="you@example.com" />
          </label>
          {bookingError && <p className="form-error" role="alert">{bookingError}</p>}
          <div className="modal-total">
            <span>Total fare <small>for {search.passengers} {search.passengers === 1 ? 'traveller' : 'travellers'}</small></span>
            <strong>₹{(train.fare * search.passengers).toLocaleString('en-IN')}</strong>
          </div>
          <button className="search-button passenger-form__submit" type="submit">Confirm booking <Icon name="arrow" size={17} /></button>
          <p className="demo-note">This is a demo booking. No payment will be collected.</p>
        </form>
      </section>
    </div>
  )
}

function ConfirmationModal({ booking, onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="booking-modal confirmation-modal" role="dialog" aria-modal="true" aria-labelledby="confirmation-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close confirmation"><Icon name="close" /></button>
        <span className="success-icon"><Icon name="check" size={25} /></span>
        <p className="eyebrow">YOU’RE GOING PLACES</p>
        <h2 id="confirmation-title">All aboard, {booking.name.split(' ')[0]}!</h2>
        <p className="modal-intro">Your demo ticket is ready. We’ve sent the details to {booking.email}.</p>
        <div className="ticket-stub">
          <div className="ticket-stub__top">
            <Brand />
            <span>BOOKING CONFIRMED</span>
          </div>
          <div className="ticket-stub__route">
            <div><strong>{booking.train.departure}</strong><span>{booking.train.from}</span></div>
            <div className="ticket-stub__connector"><span>✦</span><i /></div>
            <div><strong>{booking.train.arrival}</strong><span>{booking.train.to}</span></div>
          </div>
          <div className="ticket-stub__details">
            <span><small>PASSENGER</small>{booking.name}</span>
            <span><small>DATE</small>{new Date(`${booking.travelDate}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span><small>TRAIN</small>{booking.train.name}</span>
            <span><small>TRAVELLERS</small>{booking.passengers}</span>
          </div>
          <div className="ticket-stub__pnr"><span>BOOKING REFERENCE</span><strong>{booking.bookingReference}</strong></div>
        </div>
        <button className="search-button confirmation-modal__done" type="button" onClick={onClose}>Lovely, thanks <Icon name="check" size={17} /></button>
      </section>
    </div>
  )
}

function EmptyResults({ origin, destination }) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon"><Icon name="train" size={23} /></span>
      <h3>No direct trains on this route just yet.</h3>
      <p>Try another pair of stations. We’ll help you find the right way there.</p>
      <span className="empty-state__route">{origin} <Icon name="arrow" size={14} /> {destination}</span>
    </div>
  )
}

function BookingHistoryPage({ bookings, historyError, onShowSearch, onViewTicket }) {
  return (
    <section className="history-page">
      <div className="history-page__inner">
        <div className="history-heading">
          <div>
            <p className="eyebrow">YOUR TRACKLINE JOURNEYS</p>
            <h1>Booked trips<span>.</span></h1>
            <p>Every ticket you’ve booked, all in one place.</p>
          </div>
          <button className="search-button history-search-button" type="button" onClick={onShowSearch}>
            Find another train <Icon name="arrow" size={17} />
          </button>
        </div>

        {historyError && <p className="history-error" role="alert"><Icon name="shield" size={17} /> {historyError}</p>}

        {bookings.length === 0 ? (
          <div className="history-empty">
            <span className="history-empty__icon"><Icon name="train" size={24} /></span>
            <h2>No trips booked yet.</h2>
            <p>Once you book a train, your ticket and journey details will show up here.</p>
            <button className="book-button" type="button" onClick={onShowSearch}>Find your first train <Icon name="arrow" size={15} /></button>
          </div>
        ) : (
          <div className="history-list">
            {bookings.map((booking) => {
              const journeyDate = new Date(`${booking.travelDate}T12:00:00`)
              const isPast = booking.travelDate < getTodayInputDate()

              return (
                <article className="history-card" key={booking.bookingReference}>
                  <div className="history-card__top">
                    <span className={`history-status${isPast ? ' history-status--past' : ''}`}>
                      <span /> {isPast ? 'Journey completed' : 'Booking confirmed'}
                    </span>
                    <span className="history-card__reference">REF. {booking.bookingReference}</span>
                  </div>
                  <div className="history-card__journey">
                    <div className="history-card__station">
                      <strong>{booking.train.departure}</strong>
                      <span>{booking.train.from}</span>
                    </div>
                    <div className="history-card__route">
                      <span>{booking.train.name}</span>
                      <i><Icon name="train" size={15} /></i>
                      <span>{booking.train.duration}</span>
                    </div>
                    <div className="history-card__station history-card__station--arrival">
                      <strong>{booking.train.arrival}{booking.train.arrivalNextDay && <small>+1</small>}</strong>
                      <span>{booking.train.to}</span>
                    </div>
                  </div>
                  <div className="history-card__bottom">
                    <span><Icon name="calendar" size={15} /> {journeyDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span><Icon name="users" size={15} /> {booking.passengers} {booking.passengers === 1 ? 'traveller' : 'travellers'}</span>
                    <strong>₹{(booking.train.fare * booking.passengers).toLocaleString('en-IN')}</strong>
                    <button className="history-card__ticket" type="button" onClick={() => onViewTicket(booking)}>
                      View ticket <Icon name="arrow" size={14} />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default function AppPresenter({
  stations,
  origin,
  destination,
  travelDate,
  passengers,
  search,
  results,
  sortBy,
  searchError,
  selectedTrain,
  passengerName,
  passengerEmail,
  bookingError,
  confirmedBooking,
  bookingHistory,
  historyError,
  activeView,
  onOriginChange,
  onDestinationChange,
  onTravelDateChange,
  onPassengersChange,
  onSearch,
  onSwapStations,
  onSortChange,
  onBook,
  onPassengerNameChange,
  onPassengerEmailChange,
  onBookingSubmit,
  onCloseBooking,
  onCloseConfirmation,
  onShowSearch,
  onShowHistory,
  onViewTicket,
}) {
  const formattedDate = new Date(`${search.travelDate}T12:00:00`).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Brand />
          <nav className="main-nav" aria-label="Main navigation">
            <button className={activeView === 'search' ? 'main-nav__active' : ''} type="button" onClick={onShowSearch}>Find trains</button>
            {activeView === 'search' && <a href="#why-trackline">Why Trackline</a>}
            <button className={activeView === 'history' ? 'main-nav__active' : ''} type="button" onClick={onShowHistory}>
              Booked trips <span className="main-nav__count">{bookingHistory.length}</span>
            </button>
          </nav>
          <a className="header-help" href="mailto:hello@trackline.example">Need a hand? <span>We’re here</span> <Icon name="arrow" size={15} /></a>
        </div>
      </header>

      <main>
        {activeView === 'history' ? (
          <BookingHistoryPage
            bookings={bookingHistory}
            historyError={historyError}
            onShowSearch={onShowSearch}
            onViewTicket={onViewTicket}
          />
        ) : (
          <>
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__copy">
              <span className="hero__tag"><span /> GOOD JOURNEYS START HERE</span>
              <h1>Take the scenic<br />route <em>for a change.</em></h1>
              <p>More window seats. Less “are we there yet?”<br />Find a train that makes getting there part of the fun.</p>
              <div className="hero__perks">
                <span><Icon name="shield" size={16} /> Easy, worry-free booking</span>
                <span><Icon name="leaf" size={16} /> A lighter way to travel</span>
              </div>
            </div>
            <JourneyArtwork />
            <span className="hero__decor hero__decor--one" />
            <span className="hero__decor hero__decor--two" />
          </div>
        </section>

        <div className="content-wrap">
          <SearchPanel
            stations={stations}
            origin={origin}
            destination={destination}
            travelDate={travelDate}
            passengers={passengers}
            searchError={searchError}
            onOriginChange={onOriginChange}
            onDestinationChange={onDestinationChange}
            onTravelDateChange={onTravelDateChange}
            onPassengersChange={onPassengersChange}
            onSearch={onSearch}
            onSwapStations={onSwapStations}
          />

          <section className="results-section" id="results">
            <div className="results-heading">
              <div>
                <p className="eyebrow">YOUR NEXT ADVENTURE</p>
                <h2>Trains worth catching<span>.</span></h2>
                <p className="results-heading__summary">
                  {results.length} {results.length === 1 ? 'train' : 'trains'} from <strong>{search.origin}</strong> to <strong>{search.destination}</strong> <span>·</span> {formattedDate}
                </p>
              </div>
              {results.length > 0 && (
                <label className="sort-control">
                  <span>Sort by</span>
                  <select aria-label="Sort trains" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="earliest">Earliest departure</option>
                    <option value="lowest">Lowest fare</option>
                  </select>
                </label>
              )}
            </div>

            <div className="train-list">
              {results.length === 0
                ? <EmptyResults origin={search.origin} destination={search.destination} />
                : results.map((train) => (
                  <TrainCard key={train.id} train={train} passengers={search.passengers} onBook={onBook} />
                ))}
            </div>
            <p className="results-footnote"><Icon name="shield" size={15} /> Sample schedules, fares and seat counts for this demo. Fares are per person.</p>
          </section>
        </div>

        <section className="promise-section" id="why-trackline">
          <div className="promise-section__inner">
            <div className="promise-section__intro">
              <p className="eyebrow">THE TRACKLINE DIFFERENCE</p>
              <h2>We’ll get you there.<br /><em>And make it lovely.</em></h2>
            </div>
            <div className="promise-card">
              <span><Icon name="shield" size={19} /></span>
              <h3>Simple by design</h3>
              <p>No confusing steps, no surprise fees. Just a smoother way to book.</p>
            </div>
            <div className="promise-card">
              <span><Icon name="leaf" size={19} /></span>
              <h3>Better for the planet</h3>
              <p>Travel a little more thoughtfully, one train journey at a time.</p>
            </div>
            <div className="promise-card">
              <span><Icon name="coffee" size={19} /></span>
              <h3>Help when you need it</h3>
              <p>Real people, ready to help make your trip as easy as can be.</p>
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <Brand />
          <p>Here’s to the long way round. © 2026 Trackline</p>
          <span>Made for the journey <span className="footer-heart">♥</span></span>
        </div>
      </footer>

      {selectedTrain && (
        <BookingModal
          train={selectedTrain}
          search={search}
          passengerName={passengerName}
          passengerEmail={passengerEmail}
          bookingError={bookingError}
          onNameChange={onPassengerNameChange}
          onEmailChange={onPassengerEmailChange}
          onSubmit={onBookingSubmit}
          onClose={onCloseBooking}
        />
      )}
      {confirmedBooking && <ConfirmationModal booking={confirmedBooking} onClose={onCloseConfirmation} />}
    </>
  )
}
