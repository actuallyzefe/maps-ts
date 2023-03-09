import { User } from './User';
import { Company } from './Company';
import { CpuInfo } from 'os';

export interface MarkerFor {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;

  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(markerFor: MarkerFor): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerFor.location.lat,
        lng: markerFor.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerFor.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
