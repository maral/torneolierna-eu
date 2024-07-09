"use client";

import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngTuple } from "leaflet";

export default function OpenStreetMap() {
  const position: LatLngTuple = [45.956307, 9.304959];
  const icon = new Icon({
    iconUrl: "marker-icon.png",
    iconSize: [48, 48],
    iconAnchor: [24, 48],
  });

  return (
    <MapContainer
      className="h-96"
      center={position}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon} />
    </MapContainer>
  );
}
