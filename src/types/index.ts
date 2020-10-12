interface NameInterface {
  title: string;
  first: string;
  last: string;
}

interface LoginInterface {
  uuid: string;
  username: string;
}

interface PictureInterface {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Contact {
  name: NameInterface;
  email: string;
  login: LoginInterface;
  picture: PictureInterface;
}

export interface ContactsAction {
  data: Contact;
  error: Error;
  type: string;
}
