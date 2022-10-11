export class CustomMap {
    private mapDiv: HTMLDivElement;
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.mapDiv = document.getElementById(divId) as HTMLDivElement;
        this.googleMap = new google.maps.Map(this.mapDiv, {
            zoom: 1,
            center: { lat: 0, lng: 1 }
        });
    };
};