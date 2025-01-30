import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./SOSPage.css";

// Custom icon for location marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Location marker icon
  iconSize: [35, 35],
  iconAnchor: [17, 34],
  popupAnchor: [0, -30],
});

const SOSPage = () => {
  const [position, setPosition] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
      (error) => console.error("Error getting location:", error)
    );
  }, []);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]); // Set marker to clicked location
      },
    });

    return position ? (
      <Marker position={position} icon={customIcon}>
        <Popup>Your Current Location</Popup>
      </Marker>
    ) : null;
  };

  const handleSOS = () => setShowEmailModal(true);

  const handleSendEmail = () => {
    const trimmedEmail = recipientEmail.trim();
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    const subject = "EMERGENCY SOS ALERT";
    const body = `I NEED IMMEDIATE HELP!\n\nMy current location: ${
      position ? `${position[0]}, ${position[1]}` : "Unknown"
    }\nTime: ${new Date().toLocaleString()}`;

    window.location.href = `mailto:${trimmedEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setIsSending(false);
      setShowEmailModal(false);
      setRecipientEmail("");
    }, 3000);
  };

  return (
    <div className="sos-container">
      <h1>Know your Location</h1>

      {/* Map Container */}
      <div className="map-container">
        <MapContainer
          center={position || [28.7041, 77.1025]} // Default to Delhi
          zoom={12}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
        </MapContainer>
      </div>

      {/* SOS Button */}
      <button
        className={`sos-button ${isSending ? "sending" : ""}`}
        onClick={handleSOS}
        disabled={isSending}
      >
        {isSending ? "SENDING ALERT..." : "SEND LIVE SOS"}
      </button>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="email-modal-overlay">
          <div className="email-modal">
            <h3>Enter Recipient's Email</h3>
            <input
              type="email"
              placeholder="recipient@example.com"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              className="email-input"
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <div className="modal-buttons">
              <button onClick={handleSendEmail} className="send-button">Send Alert</button>
              <button onClick={() => setShowEmailModal(false)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Safety Tips */}
      <div className="safety-tips">
        <h3>Safety Guidelines:</h3>
        <ul>
          <li>Avoid high-density areas during late hours</li>
          <li>Share your live location with trusted contacts</li>
          <li>Use well-lit main roads whenever possible</li>
        </ul>
      </div>
    </div>
  );
};

export default SOSPage;
