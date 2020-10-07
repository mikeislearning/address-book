export interface Contact {
  address: object;
  available_room_count: number;
  description_html: string;
  headline: string;
  num_bathrooms: string;
  room_prices: Array<number>;
  total_room_count: number;
  slug: string;
}

export interface ContactsAction {
  data: Contact;
  error: Error;
  type: string;
}
