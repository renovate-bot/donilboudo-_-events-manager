export class Event {
    id: Number;
    title: String;
    description: String;
    city: String;
    location: String;
    price: Number;
    organizer: String;
    startDate: Date;
    endDate: Date;

    constructor(obj: any = {}) {
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.city = obj.city;
        this.location = obj.location;
        this.price = obj.price;
        this.organizer = obj.price;
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;
    }
}