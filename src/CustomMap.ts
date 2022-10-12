interface Mappable {
    location: { lat: number, lng: number };
    markerContent(): string;
};

export class CustomMap {
    private mapDiv: HTMLDivElement;
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.mapDiv = document.getElementById(divId) as HTMLDivElement;
        this.googleMap = new google.maps.Map(this.mapDiv, {
            zoom: 1,
            center: { lat: 0, lng: 0 }
        });
    };

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: { lat: mappable.location.lat, lng: mappable.location.lng }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    };
};